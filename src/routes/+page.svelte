<script>
 import { onMount } from 'svelte';
 let anime=[]; let q=''; let loading=true; let error='';
 async function load(url='https://api.jikan.moe/v4/top/anime?limit=24') {
  loading=true; error='';
  try { const r=await fetch(url); if(!r.ok) throw Error(); anime=(await r.json()).data||[]; }
  catch(e){ error='Could not load anime right now. Please retry.'; }
  finally{ loading=false; }
 }
 async function search(){ if(!q.trim()) return load(); await load(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(q)}&limit=24&sfw=true`); }
 onMount(load);
</script>

<svelte:head><title>AniVerse — Discover Anime</title><meta name="description" content="A modern anime discovery hub." /></svelte:head>

<div class="app">
<header>
 <a class="logo" href="/"><b>A</b><span>Ani<em>Verse</em></span></a>
 <nav><a class="active" href="/">Home</a><a href="#anime">Popular</a><a href="#genres">Genres</a></nav>
 <form on:submit|preventDefault={search}><span>⌕</span><input bind:value={q} placeholder="Search anime..."/><button>Search</button></form>
</header>

<section class="hero"><div class="heroText"><small>YOUR NEXT OBSESSION STARTS HERE</small><h1>Find your next<br/><i>anime adventure.</i></h1><p>Discover popular series, hidden gems and everything in between — all in one clean anime hub.</p><a class="cta" href="#anime">Explore Anime →</a></div><div class="glow"></div><div class="gridbg"></div></section>

<section class="genres" id="genres">{#each ['All','Action','Adventure','Comedy','Fantasy','Romance','Sci-Fi'] as g}<button>{g}</button>{/each}</section>

<main id="anime"><div class="heading"><div><small>CURATED FOR YOU</small><h2>Popular Anime</h2></div><span>{anime.length} titles</span></div>
{#if loading}<div class="cards">{#each Array(12) as _}<div class="skeleton"></div>{/each}</div>
{:else if error}<div class="error">{error} <button on:click={load}>Retry</button></div>
{:else}<div class="cards">{#each anime as a}<article><div class="poster"><img src={a.images?.jpg?.large_image_url||a.images?.jpg?.image_url} alt={a.title} loading="lazy"/><label>★ {a.score??'N/A'}</label></div><h3>{a.title}</h3><p>{a.type||'Anime'} · {a.episodes||'?'} eps</p></article>{/each}</div>{/if}</main>

<footer><strong>Ⓐ AniVerse</strong><span>Anime discovery built for fans.</span><small>Video playback should use licensed or officially provided sources.</small></footer>
</div>

<style>
:global(*){box-sizing:border-box}:global(body){margin:0;background:#08090d;color:#f5f5f7;font-family:Inter,system-ui,sans-serif}:global(a){color:inherit;text-decoration:none}button,input{font:inherit}
.app{min-height:100vh;background:radial-gradient(circle at 75% 10%,#281b4d33,transparent 35%),#08090d}header{height:76px;display:flex;align-items:center;gap:40px;padding:0 5vw;border-bottom:1px solid #ffffff0c;background:#08090dcc;backdrop-filter:blur(18px);position:sticky;top:0;z-index:10}.logo{display:flex;align-items:center;gap:10px;font-size:20px;font-weight:800}.logo b{display:grid;place-items:center;width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,#a58cff,#6546dc)}.logo em{color:#9b7cff;font-style:normal}nav{display:flex;gap:28px;color:#858793;font-size:14px}nav .active,nav a:hover{color:#fff}form{margin-left:auto;display:flex;align-items:center;width:min(360px,35vw);background:#111218;border:1px solid #242630;border-radius:11px;padding:4px 5px 4px 12px}form span{color:#777;font-size:20px}input{flex:1;min-width:0;border:0;outline:0;background:transparent;color:white;padding:9px}form button{border:0;border-radius:8px;background:#272332;color:#ddd5ff;padding:8px 12px;cursor:pointer}
.hero{min-height:510px;display:flex;align-items:center;padding:70px 8vw;position:relative;overflow:hidden;border-bottom:1px solid #ffffff08}.heroText{position:relative;z-index:2;max-width:680px}.hero small,main small{color:#9b7cff;font-weight:800;letter-spacing:2px;font-size:11px}h1{font-size:clamp(45px,6vw,78px);line-height:.98;letter-spacing:-4px;margin:15px 0}h1 i{color:#9b7cff;font-style:normal}.hero p{color:#9698a5;line-height:1.7;max-width:520px;margin:0 0 25px}.cta{display:inline-block;background:#8d6cf1;padding:13px 18px;border-radius:10px;font-weight:700;box-shadow:0 10px 30px #8d6cf133}.glow{position:absolute;right:7%;width:430px;height:430px;border-radius:50%;background:radial-gradient(circle,#8b63ff4d,transparent 65%)}.gridbg{position:absolute;inset:0;opacity:.12;background-image:linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px);background-size:70px 70px;mask-image:linear-gradient(to right,transparent,black 55%,transparent)}
.genres{display:flex;gap:8px;padding:20px 5vw;overflow:auto;border-bottom:1px solid #ffffff0b}.genres button{border:1px solid #292b34;background:#101117;color:#888b97;padding:9px 15px;border-radius:999px;white-space:nowrap;cursor:pointer}.genres button:hover{border-color:#6d54bb;color:#c9bcff}main{padding:60px 5vw 80px}.heading{display:flex;justify-content:space-between;align-items:end;margin-bottom:25px}.heading h2{font-size:32px;letter-spacing:-1.5px;margin:8px 0 0}.heading>span{color:#686a76;font-size:13px}.cards{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:20px}.poster{aspect-ratio:2/3;overflow:hidden;border-radius:13px;background:#14151b;border:1px solid #ffffff0d;position:relative}.poster img{width:100%;height:100%;object-fit:cover;display:block;transition:.35s}.cards article:hover img{transform:scale(1.045)}.poster label{position:absolute;top:8px;left:8px;padding:5px 7px;border-radius:7px;background:#08090dcc;font-size:11px;color:#f2d98a}.cards h3{font-size:14px;margin:10px 2px 5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cards p{font-size:11px;color:#686a76;margin:0 2px}.skeleton{aspect-ratio:2/3;border-radius:13px;background:linear-gradient(100deg,#121319 25%,#1b1c23 40%,#121319 55%);background-size:300% 100%;animation:shimmer 1.4s infinite}@keyframes shimmer{to{background-position:-200% 0}}.error{padding:30px;border:1px solid #292a33;border-radius:13px;color:#92949f}.error button{margin-left:10px;border:0;border-radius:8px;padding:8px 12px;background:#8d6cf1;color:white}footer{padding:30px 5vw;border-top:1px solid #ffffff0b;display:flex;gap:25px;align-items:center;color:#666975;font-size:12px}footer strong{font-size:18px;color:#ddd}footer span{flex:1}
@media(max-width:1100px){.cards{grid-template-columns:repeat(4,minmax(0,1fr))}nav{display:none}}@media(max-width:700px){header{padding:0 18px;gap:15px}form{width:auto;flex:1}form button{display:none}.hero{padding:55px 22px;min-height:440px}h1{letter-spacing:-2.5px}main{padding:45px 18px 60px}.genres{padding:16px 18px}.cards{grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}footer{flex-direction:column;align-items:flex-start}}
</style>
