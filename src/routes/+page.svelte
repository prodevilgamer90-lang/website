<script>
  import {
    IconSearch,
    IconBell,
    IconPlayerPlayFilled,
    IconStarFilled,
    IconClock,
    IconDeviceTv,
    IconChevronRight,
    IconFlame,
    IconCalendarEvent,
    IconHistory,
    IconBrandYoutubeFilled,
    IconMicrophone2,
    IconBookmark,
    IconSparkles,
    IconBolt
  } from '@tabler/icons-svelte';
  import { fade, fly, scale } from 'svelte/transition';

  const navLinks = ['Home', 'Latest', 'Popular', 'Schedule', 'Dubbed', 'My List'];

  const featured = {
    title: 'Eclipse of Blades: Requiem',
    season: 'Season 3 • Episode 09',
    genre: 'Action • Fantasy • Thriller',
    description:
      'As kingdoms fracture and ancient relics awaken, a lone elite squad must survive the blood moon war. Experience cinematic streaming with premium subtitles and fast simulcast.',
    background:
      'https://images.unsplash.com/photo-1489599091065-041f8f8f4b5f?auto=format&fit=crop&w=2000&q=80'
  };

  const latestUpdates = [
    { title: 'Blade Circuit', episode: 'EP 18', time: '12 min ago', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80' },
    { title: 'Moonline Exodus', episode: 'EP 07', time: '32 min ago', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=80' },
    { title: 'Ghost Scholar', episode: 'EP 12', time: '1 hour ago', image: 'https://images.unsplash.com/photo-1608889175638-9322300c46e8?auto=format&fit=crop&w=900&q=80' },
    { title: 'Samurai Protocol', episode: 'EP 05', time: '2 hours ago', image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=900&q=80' }
  ];

  const upcomingAnime = [
    { title: 'Celestial Rift', date: 'Oct 09, 2026', studio: 'Studio Aster' },
    { title: 'Neo Yokai Files', date: 'Oct 11, 2026', studio: 'North Wind' },
    { title: 'Crimson Academy', date: 'Oct 13, 2026', studio: 'Kiba Works' },
    { title: 'Skyline Alchemist', date: 'Oct 15, 2026', studio: 'Frame Nine' }
  ];

  const popularAnime = [
    { title: 'Chronicle: Last Gate', score: 9.1, viewers: '1.4M watching', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80' },
    { title: 'Vortex Hearts', score: 8.8, viewers: '1.1M watching', image: 'https://images.unsplash.com/photo-1542204637-e67bc7d41e48?auto=format&fit=crop&w=900&q=80' },
    { title: 'Driftline 404', score: 8.9, viewers: '986K watching', image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=900&q=80' },
    { title: 'Astra Nocturne', score: 9.0, viewers: '1.2M watching', image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=900&q=80' }
  ];

  const currentlyWatching = [
    { title: 'Nightwave Ronin', progress: 76, next: 'EP 19 in 3h' },
    { title: 'Pixel Warden', progress: 42, next: 'EP 08 in 1d' },
    { title: 'Silent Orbit', progress: 91, next: 'Final EP in 6h' }
  ];

  const trailers = [
    { title: 'Eclipse of Blades S3 Trailer', duration: '01:48' },
    { title: 'Celestial Rift First Look', duration: '02:11' },
    { title: 'Crimson Academy PV', duration: '01:23' }
  ];

  const dubSection = ['English Dub', 'Hindi Dub', 'Spanish Dub', 'Portuguese Dub', 'Arabic Dub', 'Multi-Audio'];

  const genres = ['Action', 'Isekai', 'Romance', 'Comedy', 'Mystery', 'Shounen', 'Seinen', 'Slice of Life'];
</script>

<svelte:head>
  <title>AniVerse+ — Ultimate Anime Streaming Experience</title>
  <meta
    name="description"
    content="Watch latest anime updates, upcoming releases, popular anime, trailers, and dubbed episodes in a premium streaming interface."
  />
</svelte:head>

<div class="app-shell" in:fade={{ duration: 450 }}>
  <header>
    <div class="logo" in:fly={{ y: -18, duration: 500 }}>
      AniVerse<span>+</span>
    </div>

    <nav>
      {#each navLinks as link}
        <a href="/showcase">{link}</a>
      {/each}
    </nav>

    <div class="actions">
      <button aria-label="Search"><IconSearch size={18} /></button>
      <button aria-label="Notifications"><IconBell size={18} /></button>
      <button class="premium"><IconSparkles size={16} /> Go Premium</button>
    </div>
  </header>

  <section
    class="hero"
    style={`background-image: linear-gradient(95deg, rgba(8,10,16,0.9) 12%, rgba(8,10,16,0.25) 70%), url(${featured.background})`}
    in:scale={{ start: 0.96, duration: 350 }}
  >
    <div class="hero-content">
      <p class="kicker"><IconBolt size={14} /> Featured Premiere</p>
      <h1>{featured.title}</h1>
      <p class="meta">{featured.season} • {featured.genre}</p>
      <p class="description">{featured.description}</p>
      <div class="hero-cta">
        <button class="watch-now"><IconPlayerPlayFilled size={18} /> Watch Now</button>
        <button class="details">Add to Watchlist <IconBookmark size={16} /></button>
      </div>
    </div>
  </section>

  <section class="content-block">
    <div class="section-title">
      <h2><IconHistory size={20} /> Latest Anime Updates</h2>
      <a href="/showcase">See all <IconChevronRight size={16} /></a>
    </div>
    <div class="cards updates-grid">
      {#each latestUpdates as show, i}
        <article class="card" in:fly={{ y: 20, duration: 420, delay: i * 70 }}>
          <img src={show.image} alt={show.title} />
          <div class="card-overlay">
            <p>{show.episode}</p>
            <span><IconClock size={13} /> {show.time}</span>
          </div>
          <h3>{show.title}</h3>
        </article>
      {/each}
    </div>
  </section>

  <section class="multi-grid content-block">
    <div class="panel" in:fade={{ duration: 400 }}>
      <div class="section-title compact">
        <h2><IconCalendarEvent size={20} /> Upcoming Anime</h2>
      </div>
      <ul class="list">
        {#each upcomingAnime as anime}
          <li>
            <div>
              <strong>{anime.title}</strong>
              <small>{anime.studio}</small>
            </div>
            <span>{anime.date}</span>
          </li>
        {/each}
      </ul>
    </div>

    <div class="panel" in:fade={{ duration: 450 }}>
      <div class="section-title compact">
        <h2><IconFlame size={20} /> Popular Anime</h2>
      </div>
      <div class="popular-grid">
        {#each popularAnime as anime}
          <article>
            <img src={anime.image} alt={anime.title} />
            <div>
              <h3>{anime.title}</h3>
              <p><IconStarFilled size={14} /> {anime.score} • {anime.viewers}</p>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section class="content-block multi-grid">
    <div class="panel" in:fade={{ duration: 420 }}>
      <div class="section-title compact">
        <h2><IconDeviceTv size={20} /> Currently Watching</h2>
      </div>
      <div class="watching-list">
        {#each currentlyWatching as item}
          <div class="watch-item">
            <div class="watch-head">
              <h3>{item.title}</h3>
              <small>{item.next}</small>
            </div>
            <div class="progress"><span style={`width: ${item.progress}%`} /></div>
            <p>{item.progress}% completed</p>
          </div>
        {/each}
      </div>
    </div>

    <div class="panel" in:fade={{ duration: 500 }}>
      <div class="section-title compact">
        <h2><IconBrandYoutubeFilled size={20} /> Anime Trailers</h2>
      </div>
      <div class="trailers">
        {#each trailers as trailer}
          <button>
            <IconPlayerPlayFilled size={17} />
            <div>
              <strong>{trailer.title}</strong>
              <small>{trailer.duration}</small>
            </div>
          </button>
        {/each}
      </div>
    </div>
  </section>

  <section class="content-block feature-strip" in:fade={{ duration: 450 }}>
    <div class="section-title compact">
      <h2><IconMicrophone2 size={20} /> Dub Section</h2>
    </div>
    <div class="chip-grid">
      {#each dubSection as dub}
        <button>{dub}</button>
      {/each}
    </div>
  </section>

  <section class="content-block">
    <div class="section-title compact">
      <h2>Explore by Genre</h2>
    </div>
    <div class="genres">
      {#each genres as genre}
        <button>{genre}</button>
      {/each}
    </div>
  </section>
</div>

<style lang="scss">
  :global(body) {
    margin: 0;
    background: #06080f;
    color: #f8faff;
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  }

  .app-shell {
    min-height: 100vh;
    padding: 0 4.5vw 50px;
    background:
      radial-gradient(circle at 12% 0%, rgba(62, 93, 186, 0.35), transparent 40%),
      radial-gradient(circle at 85% 5%, rgba(239, 136, 18, 0.2), transparent 35%),
      #06080f;
  }

  header {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 14px 0;
    backdrop-filter: blur(14px);

    .logo {
      font-size: 1.25rem;
      font-weight: 800;
      letter-spacing: 0.02em;

      span {
        color: #ff9f1a;
      }
    }

    nav {
      display: flex;
      align-items: center;
      gap: 18px;

      a {
        color: #d9e4ff;
        text-decoration: none;
        font-size: 0.93rem;
        transition: color 0.2s ease;

        &:hover {
          color: #ffb043;
        }
      }
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 10px;

      button {
        border: 1px solid #2b3350;
        background: rgba(20, 27, 46, 0.85);
        color: #fff;
        border-radius: 10px;
        padding: 9px 12px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        transition: transform 0.2s ease, border-color 0.2s ease;

        &:hover {
          transform: translateY(-1px);
          border-color: #4c5f99;
        }
      }

      .premium {
        background: linear-gradient(135deg, #ffb74d, #ff8f00);
        border-color: #ff9a1f;
        color: #1b1300;
        font-weight: 700;
      }
    }
  }

  .hero {
    min-height: 430px;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    padding: 32px;
    display: flex;
    align-items: flex-end;
    box-shadow: 0 18px 60px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.07);

    .hero-content {
      max-width: 650px;
    }

    .kicker {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #ffb043;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.08em;
      font-size: 0.74rem;
    }

    h1 {
      margin: 9px 0;
      font-size: clamp(2.1rem, 5vw, 3.2rem);
      line-height: 1.1;
    }

    .meta {
      margin: 0 0 12px;
      color: #d3ddfb;
    }

    .description {
      margin: 0;
      color: #eef2ff;
      line-height: 1.65;
      max-width: 55ch;
    }

    .hero-cta {
      margin-top: 24px;
      display: flex;
      flex-wrap: wrap;
      gap: 11px;

      button {
        border: 0;
        border-radius: 11px;
        padding: 11px 15px;
        font-weight: 700;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        transition: transform 0.2s ease;

        &:hover {
          transform: translateY(-2px);
        }
      }

      .watch-now {
        background: #ff9f1a;
        color: #171203;
      }

      .details {
        background: rgba(255, 255, 255, 0.14);
        color: #fff;
      }
    }
  }

  .content-block {
    margin-top: 30px;
  }

  .section-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;

    h2 {
      margin: 0;
      font-size: 1.33rem;
      display: inline-flex;
      align-items: center;
      gap: 7px;
    }

    a {
      color: #d5e0ff;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 3px;
    }

    &.compact h2 {
      font-size: 1.18rem;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 14px;
  }

  .card {
    background: #121828;
    border: 1px solid #253251;
    border-radius: 14px;
    overflow: hidden;
    transition: transform 0.2s ease, border-color 0.2s ease;

    &:hover {
      transform: translateY(-4px);
      border-color: #4360a6;
    }

    img {
      width: 100%;
      height: 210px;
      object-fit: cover;
      display: block;
    }

    h3 {
      margin: 11px;
      font-size: 1rem;
      font-weight: 600;
    }
  }

  .card-overlay {
    margin-top: -44px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;

    p,
    span {
      background: rgba(0, 0, 0, 0.74);
      border-radius: 8px;
      padding: 5px 8px;
      font-size: 0.78rem;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
  }

  .multi-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .panel {
    background: linear-gradient(160deg, #111829, #0b1020);
    border: 1px solid #253251;
    border-radius: 14px;
    padding: 16px;
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 10px;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      background: #141c31;
      border-radius: 10px;
      padding: 10px;

      strong {
        display: block;
      }

      small {
        color: #b7c6ef;
      }

      span {
        color: #ffc170;
        font-weight: 600;
        font-size: 0.86rem;
      }
    }
  }

  .popular-grid {
    display: grid;
    gap: 9px;

    article {
      display: flex;
      gap: 10px;
      align-items: center;
      background: #141c31;
      border-radius: 10px;
      padding: 8px;

      img {
        width: 95px;
        height: 58px;
        object-fit: cover;
        border-radius: 8px;
      }

      h3 {
        margin: 0;
        font-size: 0.95rem;
      }

      p {
        margin: 4px 0 0;
        color: #ced9f7;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        font-size: 0.83rem;
      }
    }
  }

  .watching-list {
    display: grid;
    gap: 10px;
  }

  .watch-item {
    background: #141c31;
    border-radius: 10px;
    padding: 10px;

    .watch-head {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      align-items: baseline;

      h3 {
        margin: 0;
        font-size: 0.95rem;
      }

      small {
        color: #b8c7ef;
      }
    }

    .progress {
      margin-top: 8px;
      height: 8px;
      border-radius: 999px;
      background: #26314f;
      overflow: hidden;

      span {
        display: block;
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(90deg, #ffb043, #ff7f11);
        transition: width 0.35s ease;
      }
    }

    p {
      margin: 8px 0 0;
      color: #d4defc;
      font-size: 0.84rem;
    }
  }

  .trailers {
    display: grid;
    gap: 9px;

    button {
      background: #141c31;
      border: 1px solid #29365a;
      border-radius: 10px;
      color: #f8faff;
      padding: 10px;
      text-align: left;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: border-color 0.2s ease, transform 0.2s ease;

      &:hover {
        border-color: #4670cc;
        transform: translateX(2px);
      }

      strong {
        display: block;
      }

      small {
        color: #b8c6ec;
      }
    }
  }

  .feature-strip .chip-grid,
  .genres {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .feature-strip button,
  .genres button {
    background: #151d32;
    color: #fff;
    border: 1px solid #2f3b61;
    border-radius: 999px;
    padding: 9px 13px;
    font-weight: 600;
    transition: border-color 0.2s ease, transform 0.2s ease;

    &:hover {
      border-color: #5d7bcc;
      transform: translateY(-1px);
    }
  }

  @media (max-width: 1100px) {
    header nav {
      display: none;
    }

    .cards {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .multi-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 680px) {
    .hero {
      min-height: 380px;
      padding: 22px;
    }

    .cards {
      grid-template-columns: 1fr;
    }

    header .actions .premium {
      display: none;
    }
  }
</style>
