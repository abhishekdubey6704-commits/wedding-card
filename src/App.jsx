import React, { useEffect, useMemo, useState } from 'react';
import { CalendarDays, MapPin, Music2, Pause, Play, Heart, Menu, X, Camera, Sparkles, Clock3, ChevronDown } from 'lucide-react';
import { wedding } from './config';

const shlokas = [
  { sanskrit: 'सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः॥', hindi: 'सभी सुखी हों और सभी रोगमुक्त रहें।', english: 'May all be happy. May all be free from illness.' },
  { sanskrit: 'सखा सप्तपदा भव।', hindi: 'सात कदमों के साथ हम जीवनभर के साथी बनें।', english: 'Having taken seven steps together, may we be lifelong companions.' },
  { sanskrit: 'शुभमस्तु सर्वदा।', hindi: 'सदैव मंगल और शुभता बनी रहे।', english: 'May auspiciousness always prevail.' }
];

function useCountdown(target) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => { const id = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(id); }, []);
  const delta = new Date(target).getTime() - now;
  if (Number.isNaN(delta)) return { invalid: true };
  const elapsed = delta <= 0;
  const total = Math.abs(delta);
  return { elapsed, days: Math.floor(total / 86400000), hours: Math.floor(total / 3600000) % 24, minutes: Math.floor(total / 60000) % 60, seconds: Math.floor(total / 1000) % 60 };
}

function calendarUrl() {
  const start = new Date(wedding.date);
  const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);
  const fmt = d => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const params = new URLSearchParams({ action: 'TEMPLATE', text: wedding.calendarTitle, dates: `${fmt(start)}/${fmt(end)}`, details: wedding.calendarDescription, location: wedding.calendarLocation });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function TempleDoors({ onEnter }) {
  const [opened, setOpened] = useState(false);
  const enter = () => {
    setOpened(true);
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1850;
    window.setTimeout(onEnter, duration);
  };
  return <div className={`intro ${opened ? 'intro-open' : ''}`}>
    <div className="intro-glow" /><div className="intro-rays" /><div className="intro-mandala">✺</div>
    <div className="flower-veil" aria-hidden="true">
      {Array.from({length:160},(_,i)=>{
        const x=(i*47+11)%100;
        const y=(i*67+19)%100;
        const colors=['#e9b5c3','#f8dfd7','#c98791','#fff0e4','#a85f75','#e6b889'];
        return <i key={`petal-${i}`} style={{left:`${x}%`,top:`${y}%`,'--dx':`${(x-50)*1.8}vw`,'--dy':`${(y-50)*1.8}vh`,'--spin':`${(i*137)%900-450}deg`,'--delay':`${(i%12)*18}ms`,'--petal-color':colors[i%colors.length]}} />;
      })}
      {Array.from({length:30},(_,i)=>{
        const x=(i*61+23)%100;
        const y=(i*43+7)%100;
        const colors=['#f0c4ca','#fff0e4','#d29a8e','#d98fa5','#e7bb83'];
        return <span key={`flower-${i}`} style={{left:`${x}%`,top:`${y}%`,'--dx':`${(x-50)*1.55}vw`,'--dy':`${(y-50)*1.55}vh`,'--spin':`${i%2 ? 300 : -300}deg`,'--delay':`${(i%7)*32}ms`,'--flower-color':colors[i%colors.length]}} />;
      })}
      {Array.from({length:54},(_,i)=>{
        const x=(i*29+17)%100;
        const y=(i*41+13)%100;
        return <b className="flower-sparkle" key={`sparkle-${i}`} style={{left:`${x}%`,top:`${y}%`,'--dx':`${(x-50)*1.3}vw`,'--dy':`${(y-50)*1.3}vh`,'--delay':`${(i%9)*26}ms`}} />;
      })}
    </div>
    <div className="intro-content"><div className="ganesh-mark">ॐ</div><p className="eyebrow">A CELEBRATION OF LOVE & TOGETHERNESS</p><h1>शुभ विवाह</h1><p className="intro-sub">A divine golden era of love, blessings & togetherness.</p><button className="gold-button" onClick={enter}> <Sparkles size={16}/> Open Invitation <ChevronDown size={16}/></button><span className="intro-hint">Tap to open the invitation</span></div>
  </div>;
}

function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!wedding.youtubeVideoId) return;
    window.onYouTubeIframeAPIReady = () => setReady(true);
    if (!document.querySelector('script[data-youtube-api]')) { const s = document.createElement('script'); s.src = 'https://www.youtube.com/iframe_api'; s.dataset.youtubeApi = 'true'; document.body.appendChild(s); }
  }, []);
  useEffect(() => {
    if (!ready || !wedding.youtubeVideoId || !window.YT?.Player) return;
    const player = new window.YT.Player('youtube-player', { videoId: wedding.youtubeVideoId, playerVars: { playsinline: 1, controls: 0, rel: 0 } });
    window.__weddingPlayer = player;
    return () => { try { player.destroy(); } catch {} };
  }, [ready]);
  const toggle = () => {
    if (!wedding.youtubeVideoId) { alert('Add your YouTube video ID in src/config.js to enable wedding music.'); return; }
    const p = window.__weddingPlayer;
    if (!p) { alert('Music player is loading. Please try again in a moment.'); return; }
    if (playing) p.pauseVideo(); else p.playVideo();
    setPlaying(!playing);
  };
  return <><div id="youtube-player" className="youtube-hidden"/><button className="music-button" onClick={toggle} aria-label={playing ? 'Pause music' : 'Play music'}>{playing ? <Pause size={17}/> : <Play size={17}/>}<span>{playing ? 'Pause music' : 'Play shehnai & flute'}</span><Music2 size={16}/></button></>;
}


function VFXLayer() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    const targets = document.querySelectorAll('.section-heading, .person-card, .event-card, .gallery-photo, .blessing, .health-section, .rsvp-card, .quote-section, .film-section, .film-frame');
    targets.forEach(el => el.classList.add('vfx-reveal'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('vfx-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    targets.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <div className="ambient-vfx" aria-hidden="true">
    <div className="ambient-glow glow-one"/><div className="ambient-glow glow-two"/>
    {Array.from({length:16},(_,i)=><span className={`floating-petal petal-${i%4}`} key={`p${i}`} style={{'--i':i,left:`${(i*19+3)%100}%`,animationDuration:`${17+(i%5)*3}s`,animationDelay:`${i*-1.7}s`}}/>)}
    {Array.from({length:22},(_,i)=><span className="gold-dust" key={`d${i}`} style={{'--i':i,left:`${(i*37+7)%100}%`,top:`${(i*23+11)%100}%`,animationDuration:`${3+(i%4)*1.2}s`,animationDelay:`${i*-.45}s`}}/>)}
  </div>;
}

function getYouTubeVideoId(value) {
  const input = value.trim();
  if (!input) return '';

  let videoId = input;
  try {
    const url = new URL(input);
    const host = url.hostname.replace(/^www\./, '');
    if (host === 'youtu.be') {
      videoId = url.pathname.split('/').filter(Boolean)[0] || '';
    } else if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
      videoId = url.searchParams.get('v') || url.pathname.match(/^\/(?:embed|shorts|live)\/([^/]+)/)?.[1] || '';
    } else {
      return '';
    }
  } catch {
    // A bare video ID is also accepted.
  }

  return /^[\w-]{11}$/.test(videoId) ? videoId : '';
}

function PreWeddingFilm() {
  const videoId = getYouTubeVideoId(wedding.preWeddingVideoId);
  if (!wedding.preWeddingVideoId) return null;
  return <section className="film-section section" id="film">
    <div className="section-heading"><span className="section-kicker">OUR STORY, ON FILM</span><h2>Our Pre-Wedding Film</h2><p>A little glimpse of the moments that brought us here.</p></div>
    {videoId ? <div className="film-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${videoId}`} title="Our pre-wedding film" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div> : <p className="film-error">Add a valid YouTube video link or 11-character video ID to <code>preWeddingVideoId</code> in <code>src/config.js</code>.</p>}
  </section>;
}

function Countdown() {
  const c = useCountdown(wedding.date);
  const elapsedDays = Math.floor((Date.now() - new Date(wedding.date).getTime()) / 86400000);
  return <section className="countdown-section section" id="countdown"><div className="section-heading"><span className="section-kicker">THE BIG DAY</span><h2>{c.elapsed ? 'A beautiful journey has begun' : 'Counting down to forever'}</h2><p>{c.elapsed ? `Married for ${Math.max(0, elapsedDays)} beautiful days and counting.` : 'The celebrations are getting closer. We cannot wait to see you.'}</p></div>
    {c.invalid ? <p>Please set a valid wedding date in src/config.js.</p> : <div className="timer-grid">{[['Days',c.days],['Hours',c.hours],['Minutes',c.minutes],['Seconds',c.seconds]].map(([label,value])=><div className="timer-card" key={label}><strong>{String(value).padStart(2,'0')}</strong><span>{label}</span></div>)}</div>}
    <a className="text-link" href={calendarUrl()} target="_blank" rel="noreferrer"><CalendarDays size={17}/> Save the date to Google Calendar</a>
  </section>;
}

export default function App() {
  const [entered, setEntered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);
  const nav = [['Our Story','#couple'],...(getYouTubeVideoId(wedding.preWeddingVideoId) ? [['Our Film','#film']] : []),['Celebrations','#events'],['Gallery','#gallery']];
  return <>
    <VFXLayer/>
    {!entered && <TempleDoors onEnter={() => setEntered(true)}/>}
    <div className={`site-shell ${entered ? 'invitation-entered' : ''}`}>
      <header className="navbar"><a href="#home" className="brand">ॐ <span>THE WEDDING</span></a><button className="mobile-menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen?<X/>:<Menu/>}</button><nav className={menuOpen?'nav-open':''}>{nav.map(([label,href])=><a key={href} href={href} onClick={()=>setMenuOpen(false)}>{label}</a>)}</nav><MusicPlayer/></header>
      <main>
        <section className="hero" id="home"><div className="hero-ornament">✺</div><p className="section-kicker">॥ श्री गणेशाय नमः ॥</p><p className="hero-pretitle">WITH THE BLESSINGS OF OUR FAMILIES</p><p className="hero-era">A DIVINE GOLDEN ERA</p><h1><span>{wedding.groom.name}</span><em>&</em><span>{wedding.bride.name}</span></h1><p className="hero-subtitle">invite you to celebrate the beginning of their forever</p><div className="hero-rule"><span>✦</span></div><p className="hero-date">{wedding.dateLabel}</p><p className="hero-venue"><MapPin size={15}/> {wedding.venue} · {wedding.address}</p><a className="primary-button hero-cta" href="#countdown">Explore the invitation <ChevronDown size={16}/></a><div className="hero-bottom-note">A DAY TO REMEMBER · A LOVE TO CELEBRATE</div></section>
        <section className="blessing section"><span className="lotus">❀</span><p className="sanskrit">{shlokas[0].sanskrit}</p><p className="translation">{shlokas[0].english}</p><p className="hindi-translation">{shlokas[0].hindi}</p></section>
        <Countdown/>
        <section className="couple-section section" id="couple"><div className="section-heading"><span className="section-kicker">TWO HEARTS, ONE JOURNEY</span><h2>Meet the Couple</h2><p>Two stories, two families, and one beautiful beginning.</p></div><div className="couple-grid">{[wedding.groom,wedding.bride].map((person,i)=><article className="person-card" key={person.role}><div className="person-image-wrap"><img src={person.image} alt={person.role}/><div className="petal-disintegration" aria-hidden="true">{Array.from({length:30},(_,j)=><i key={j} style={{'--drift-x':`${((j*37)%260)-130}px`,'--drift-y':`${((j*53)%210)-105}px`,'--spin':`${j*83}deg`,'--delay':`${(j%10)*28}ms`}} />)}</div><span className="image-index">0{i+1}</span></div><p className="person-role">{person.role}</p><h3>{person.name}</h3><p className="person-description">{person.description}</p></article>)}</div><p className="couple-verse">“सखा सप्तपदा भव।” <span>— May we be companions for all seven steps and beyond.</span></p></section>
        <section className="events-section section" id="events"><div className="section-heading"><span className="section-kicker">JOIN THE CELEBRATION</span><h2>Wedding Festivities</h2><p>Every ritual, every smile, every moment — made more special with you.</p></div><div className="events-list">{wedding.events.map((event,i)=><article className="event-card" key={event.name}><div className="event-number">0{i+1}</div><div className="event-info"><span className="event-date">{event.date}</span><h3>{event.name}</h3><p>{event.note}</p><div className="event-meta"><span><Clock3 size={14}/>{event.time}</span><span><MapPin size={14}/>{event.venue}</span></div></div><div className="event-flower">✿</div></article>)}</div></section>
        <section className="quote-section"><div className="quote-mark">“</div><p className="sanskrit">{shlokas[1].sanskrit}</p><p className="quote-english">{shlokas[1].english}</p><span className="quote-divider">✦</span><p className="quote-hindi">{shlokas[1].hindi}</p></section>
        <PreWeddingFilm/>
        <section className="gallery-section section" id="gallery"><div className="section-heading"><span className="section-kicker">LITTLE MOMENTS, FOREVER MEMORIES</span><h2>Our Gallery</h2><p>A glimpse of the memories we are making.</p></div><div className="gallery-grid">{wedding.gallery.map((src,i)=><button className={`gallery-photo photo-${i+1}`} key={src} onClick={()=>setActivePhoto(src)} aria-label={`Open gallery photo ${i+1}`}><img src={src} alt={`Wedding gallery ${i+1}`} loading="lazy"/><span><Camera size={17}/></span></button>)}</div></section>
        <section className="closing-section"><span className="closing-ornament">✺</span><p className="sanskrit">{shlokas[2].sanskrit}</p><h2>With love, and a lifetime of gratitude.</h2><p>We look forward to celebrating with you.</p><div className="closing-names">{wedding.groom.name} <span>&</span> {wedding.bride.name}</div><a className="text-link" href={wedding.mapUrl} target="_blank" rel="noreferrer"><MapPin size={16}/> Get directions</a></section>
      </main>
      <footer className="footer"><span>Made with love</span><Heart size={13} fill="currentColor"/><span>for a day to remember</span><a href="#home">Back to top ↑</a></footer>
    </div>
    {activePhoto && <div className="lightbox" role="dialog" aria-modal="true" onClick={()=>setActivePhoto(null)}><button aria-label="Close photo" onClick={()=>setActivePhoto(null)}><X/></button><img src={activePhoto} alt="Enlarged wedding gallery"/></div>}
  </>;
}
