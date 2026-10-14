import Link from 'next/link';
export default function NotFound() { return <div className="page-heading"><p className="eyebrow">404</p><h1>This page is not in the lab.</h1><Link className="button button-primary" href="/">Back to overview</Link></div>; }
