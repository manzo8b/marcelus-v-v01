(function (global) {
  'use strict';
  const verdict = ({ major, minor, insufficient }) => major ? 'FAIL' : insufficient ? 'NOT VERIFIABLE' : minor ? 'NEEDS REVISION' : 'PASS';
  const countWords = text => String(text).trim().split(/\s+/).filter(Boolean).length;
  const api = { verdict, countWords };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else global.EvaluationLogic = api;
})(typeof window !== 'undefined' ? window : globalThis);
