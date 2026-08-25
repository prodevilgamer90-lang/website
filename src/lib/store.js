import { browser } from '$app/environment';

const read=(key,fallback)=>{if(!browser)return fallback;try{return JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback))}catch{return fallback}};
export const getWatchlist=()=>read('aniverse_watchlist',[]);
export const isSaved=(id)=>getWatchlist().some(x=>String(x.id)===String(id));
export function toggleWatchlist(item){if(!browser)return false;const list=getWatchlist();const exists=list.some(x=>String(x.id)===String(item.id));const next=exists?list.filter(x=>String(x.id)!==String(item.id)):[item,...list];localStorage.setItem('aniverse_watchlist',JSON.stringify(next));return !exists}
export const getHistory=()=>read('aniverse_history',[]);
export function saveProgress(item){if(!browser)return;const list=getHistory().filter(x=>String(x.id)!==String(item.id));localStorage.setItem('aniverse_history',JSON.stringify([{...item,updatedAt:Date.now()},...list].slice(0,30)))}
