<script>
  import {
    IconSearch,
    IconBell,
    IconPlayerPlayFilled,
    IconStarFilled,
    IconClock,
    IconDeviceTv,
    IconChevronRight
  } from '@tabler/icons-svelte';

  const featured = {
    title: 'Shadow Protocol: Rebirth',
    season: 'Season 2 • Episode 12',
    genre: 'Action • Dark Fantasy • Drama',
    description:
      'A rogue division rises from the ruins of the old empire. Stream the latest episodes with subtitles in multiple languages and cinematic 4K quality.',
    background:
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1800&q=80'
  };

  const trending = [
    {
      title: 'Neon Ronin',
      episode: 'E08',
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Skyblade Academy',
      episode: 'E15',
      rating: 4.7,
      image:
        'https://images.unsplash.com/photo-1608889175638-9322300c46e8?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Mecha: Zero Dawn',
      episode: 'E21',
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Arcane Bloom',
      episode: 'E04',
      rating: 4.6,
      image:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const categories = ['Action', 'Romance', 'Isekai', 'Sci-Fi', 'Comedy', 'Mystery'];
</script>

<svelte:head>
  <title>KawaiiStream — Watch Anime Anytime</title>
  <meta
    name="description"
    content="Professional anime streaming experience with trending titles, simulcasts, and curated categories."
  />
</svelte:head>

<div class="app-shell">
  <header>
    <div class="logo">Kawaii<span>Stream</span></div>
    <nav>
      <a href="/">Home</a>
      <a href="/showcase">Series</a>
      <a href="/showcase">Movies</a>
      <a href="/showcase">New & Popular</a>
      <a href="/showcase">My List</a>
    </nav>
    <div class="actions">
      <button aria-label="Search"><IconSearch size={18} /></button>
      <button aria-label="Notifications"><IconBell size={18} /></button>
      <button class="premium">Try Premium</button>
    </div>
  </header>

  <section class="hero" style={`background-image: linear-gradient(90deg, rgba(0,0,0,0.82) 10%, rgba(0,0,0,0.35) 65%), url(${featured.background})`}>
    <div class="hero-content">
      <p class="kicker">Featured Simulcast</p>
      <h1>{featured.title}</h1>
      <p class="meta">{featured.season} • {featured.genre}</p>
      <p class="description">{featured.description}</p>
      <div class="hero-cta">
        <button class="watch-now"><IconPlayerPlayFilled size={18} /> Watch Now</button>
        <button class="details">More Details</button>
      </div>
    </div>
  </section>

  <section class="content-block">
    <div class="section-title">
      <h2>Trending this week</h2>
      <a href="/showcase">View all <IconChevronRight size={16} /></a>
    </div>
    <div class="cards">
      {#each trending as show}
        <article class="card">
          <img src={show.image} alt={show.title} />
          <div class="card-overlay">
            <p>{show.episode}</p>
            <span><IconStarFilled size={14} /> {show.rating}</span>
          </div>
          <h3>{show.title}</h3>
        </article>
      {/each}
    </div>
  </section>

  <section class="content-block lineup">
    <div class="section-title">
      <h2>Why anime fans choose us</h2>
    </div>
    <div class="lineup-grid">
      <div>
        <IconDeviceTv size={24} />
        <h3>Stream everywhere</h3>
        <p>Watch on mobile, desktop, and TV with seamless sync across devices.</p>
      </div>
      <div>
        <IconClock size={24} />
        <h3>Fast simulcast drops</h3>
        <p>Fresh episodes available shortly after Japanese broadcast.</p>
      </div>
      <div>
        <IconStarFilled size={24} />
        <h3>Premium quality</h3>
        <p>Ad-free playback with up to 4K support and surround sound options.</p>
      </div>
    </div>
  </section>

  <section class="content-block">
    <div class="section-title">
      <h2>Browse by genre</h2>
    </div>
    <div class="genres">
      {#each categories as category}
        <button>{category}</button>
      {/each}
    </div>
  </section>
</div>

<style lang="scss">
  :global(body) {
    margin: 0;
    background: #090c12;
    color: #f9fbff;
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  }

  .app-shell {
    min-height: 100vh;
    padding: 0 5vw 48px;
    background: radial-gradient(circle at top right, #1a2338, #090c12 45%);
  }

  header {
    position: sticky;
    top: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 16px 0;
    backdrop-filter: blur(12px);

    .logo {
      font-size: 1.2rem;
      font-weight: 800;
      letter-spacing: 0.02em;

      span {
        color: #f79c1d;
      }
    }

    nav {
      display: flex;
      gap: 20px;

      a {
        color: #dbe3ff;
        text-decoration: none;
        font-size: 0.95rem;
      }
    }

    .actions {
      display: flex;
      gap: 10px;
      align-items: center;

      button {
        border: 1px solid #2a3147;
        background: rgba(18, 23, 37, 0.8);
        color: #fff;
        border-radius: 10px;
        padding: 9px 12px;
        display: inline-flex;
        align-items: center;
      }

      .premium {
        border-color: #f79c1d;
        background: #f79c1d;
        color: #111;
        font-weight: 700;
      }
    }
  }

  .hero {
    min-height: 420px;
    border-radius: 18px;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: end;
    padding: 32px;

    .hero-content {
      max-width: 560px;
    }

    .kicker {
      color: #f79c1d;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.08em;
      font-size: 0.75rem;
    }

    h1 {
      margin: 8px 0;
      font-size: clamp(2rem, 5vw, 3rem);
    }

    .meta {
      color: #d1dbf5;
      margin-bottom: 12px;
    }

    .description {
      color: #f2f5ff;
      line-height: 1.6;
      max-width: 50ch;
    }

    .hero-cta {
      margin-top: 20px;
      display: flex;
      gap: 12px;

      button {
        border: 0;
        border-radius: 12px;
        padding: 11px 16px;
        font-weight: 700;
        cursor: pointer;
      }

      .watch-now {
        background: #f79c1d;
        color: #101217;
        display: inline-flex;
        align-items: center;
        gap: 8px;
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
    margin-bottom: 14px;

    h2 {
      margin: 0;
      font-size: 1.5rem;
    }

    a {
      color: #d4defc;
      display: inline-flex;
      align-items: center;
      text-decoration: none;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 14px;
  }

  .card {
    background: #121827;
    border-radius: 14px;
    overflow: hidden;

    img {
      width: 100%;
      height: 220px;
      object-fit: cover;
      display: block;
    }

    h3 {
      margin: 10px;
      font-size: 1rem;
      font-weight: 600;
    }
  }

  .card-overlay {
    margin-top: -44px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p,
    span {
      background: rgba(0, 0, 0, 0.72);
      padding: 5px 8px;
      border-radius: 8px;
      font-size: 0.8rem;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
  }

  .lineup-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;

    > div {
      background: #121827;
      border: 1px solid #25304f;
      border-radius: 14px;
      padding: 18px;

      h3 {
        margin: 8px 0 6px;
      }

      p {
        margin: 0;
        color: #d4defc;
      }
    }
  }

  .genres {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    button {
      background: #151d2f;
      color: #fff;
      border: 1px solid #2d3758;
      border-radius: 999px;
      padding: 10px 14px;
      font-weight: 600;
    }
  }

  @media (max-width: 1000px) {
    header nav {
      display: none;
    }

    .cards {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .lineup-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
