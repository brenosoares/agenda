export function sum(arr, key) { return arr.reduce((acc, cur) => acc + (Number(cur[key]) || 0), 0); }
export function average(arr, key) { if (!arr.length) return 0; return sum(arr, key) / arr.length; }
export function topBy(arr, key) { return arr.reduce((top, item) => { if (!top || item[key] > top[key]) return item; return top; }, null); }
export function groupBy(arr, key) { return arr.reduce((acc, cur) => { (acc[cur[key]] ||= []).push(cur); return acc; }, {}); }
export function conversionRate(item) { if (!item.acessos) return 0; return item.conversoes / item.acessos; }