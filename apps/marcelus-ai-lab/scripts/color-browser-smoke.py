#!/usr/bin/env python3
"""Real Chromium smoke QA: published route structure, colored hierarchy, dark/mobile.
Run against exported Next.js site mounted at /marcelus-v-v01/."""
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8765/marcelus-v-v01"
ROUTES = [
    "/", "/it/", "/es/",
    "/it/projects/", "/it/resources/", "/it/lab/",
    "/it/library/", "/it/recruiter/", "/es/projects/",
]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=["--no-sandbox"])
    try:
        page = browser.new_page(viewport={"width": 1440, "height": 900}, color_scheme="light")
        errors = []
        page.on("pageerror", lambda e: errors.append(str(e)))
        for path in ROUTES:
            response = page.goto(BASE + path, wait_until="domcontentloaded")
            assert response and response.status == 200, (path, response.status if response else None)
            assert page.locator("h1").is_visible(), "h1 missing: " + path
            top = page.locator(".site-header")
            assert top.count() == 1
            assert top.evaluate("(e)=>getComputedStyle(e).borderBottomColor") == "rgb(12, 97, 93)"
            assert page.evaluate("getComputedStyle(document.documentElement).getPropertyValue('--lab-blue').trim().toLowerCase()") == "#244f9b"
        page.goto(BASE + "/it/", wait_until="domcontentloaded")
        colored_cards = page.locator('a[class*="featuredCard"]').evaluate_all(
            "(items)=>items.map(e=>({bg:getComputedStyle(e).backgroundColor,"
            "border:getComputedStyle(e).borderTopColor}))"
        )
        assert len(colored_cards) == 4, colored_cards
        assert len({c["bg"] for c in colored_cards}) == 4, colored_cards
        assert len({c["border"] for c in colored_cards}) == 4, colored_cards
        hero = page.locator('section[class*="hero"]').first
        assert "gradient" in hero.evaluate("(e)=>getComputedStyle(e).backgroundImage")
        page.evaluate("localStorage.setItem('marcelus-theme','dark')")
        page.reload(wait_until="domcontentloaded")
        page.wait_for_function("document.documentElement.dataset.theme==='dark'")
        assert page.evaluate("getComputedStyle(document.documentElement).getPropertyValue('--lab-blue').trim().toLowerCase()") == "#aec6ff"
        dark_colors = page.locator('a[class*="featuredCard"]').evaluate_all(
            "(items)=>items.map(e=>getComputedStyle(e).backgroundColor)"
        )
        assert len(set(dark_colors)) == 4, dark_colors
        assert len({c for c in dark_colors if c in ["rgb(233, 241, 255)","rgb(230, 244, 238)"]}) == 0
        assert not errors, errors
        mobile = browser.new_page(viewport={"width": 390, "height": 844}, is_mobile=True, has_touch=True)
        mobile_errors = []
        mobile.on("pageerror", lambda e: mobile_errors.append(str(e)))
        for path in ["/it/", "/es/", "/it/projects/", "/it/library/", "/it/resources/"]:
            response = mobile.goto(BASE + path, wait_until="domcontentloaded")
            assert response and response.status == 200, path
            assert mobile.locator("h1").is_visible(), path
            assert mobile.evaluate("document.documentElement.scrollWidth<=innerWidth+2"), "horizontal overflow "+path
        assert not mobile_errors, mobile_errors
        print("MARCELUS chromatic UI: 9 routes; five colored families; dark theme and responsive pages PASS")
    finally:
        browser.close()
