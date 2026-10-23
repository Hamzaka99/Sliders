import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Clock3, ExternalLink, Globe2,
  Layers3, Maximize2, Minimize2, Moon, PackageCheck, PanelLeftClose,
  PanelLeftOpen, Presentation, Ship, Sparkles, Sun, X
} from 'lucide-react';
import { interfaceText, languages, presentationLibrary } from './presentation.js';
import './styles.css';

const images = {
  cover: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2200&q=88',
  history: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=85',
  rules: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85',
  trade: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=85',
  finance: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=85',
  quality: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85',
  case: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1600&q=85'
};

const chapterImages = [null, images.history, images.history, images.rules, images.trade, images.finance, images.quality, images.case];
const chapterPalette = ['mint', 'gold', 'gold', 'blue', 'coral', 'mint', 'gold', 'blue'];
const localized = (value, language) => typeof value === 'string' ? value : value?.[language] ?? value?.en ?? '';
const localizedMode = (mode, language) => mode === 'Any mode'
  ? ({ fr: 'Tous modes', ar: 'جميع الوسائط' }[language] ?? mode)
  : ({ fr: 'Maritime / fluvial', ar: 'بحري / نهري' }[language] ?? mode);
const pad = value => String(value).padStart(2, '0');

function IconButton({ label, children, onClick, active = false, className = '' }) {
  return <button type="button" className={`icon-button ${active ? 'is-active' : ''} ${className}`} onClick={onClick} aria-label={label} title={label}>{children}</button>;
}

function Brand({ language, onLibrary, compact = false }) {
  return <button className={`brand-button ${compact ? 'compact' : ''}`} type="button" onClick={onLibrary} aria-label={interfaceText[language].backToLibrary}>
    <span className="brand-symbol"><Globe2 size={18} strokeWidth={1.8} /></span>
    <span className="brand-copy"><strong>STORY / SLIDES</strong><small>{language === 'fr' ? 'Studio de présentation' : language === 'ar' ? 'استوديو العروض' : 'Presentation studio'}</small></span>
  </button>;
}

function LanguageSwitch({ language, setLanguage }) {
  return <div className="language-switch" role="group" aria-label="Presentation language">
    {languages.map(item => <button key={item} className={language === item ? 'selected' : ''} type="button" onClick={() => setLanguage(item)} aria-pressed={language === item}>{item === 'ar' ? 'عربي' : item.toUpperCase()}</button>)}
  </div>;
}

function Library({ language, open, close, selectDeck }) {
  const ui = interfaceText[language];
  return <AnimatePresence>
    {open && <motion.div className="library-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={event => event.target === event.currentTarget && close()}>
      <motion.section className="library-panel" role="dialog" aria-modal="true" aria-labelledby="library-title" initial={{ opacity: 0, y: 20, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .99 }} transition={{ duration: .24 }}>
        <div className="library-header"><div><span className="eyebrow">{ui.library}</span><h2 id="library-title">{language === 'fr' ? 'La bibliothèque' : language === 'ar' ? 'مكتبة العروض' : 'Your presentation library'}</h2></div><IconButton label={ui.close} onClick={close}><X size={18} /></IconButton></div>
        <div className="library-grid">{presentationLibrary.map(deck => <button className="library-deck" type="button" key={deck.id} onClick={() => selectDeck(deck)}>
          <span className="library-deck-image" style={{ backgroundImage: `url(${deck.coverImage || images.cover})` }}><span>{String(deck.chapters.length).padStart(2, '0')} {ui.chapters.toUpperCase()}</span><Presentation size={22} /></span>
          <span className="library-deck-copy"><span className="deck-meta">{localized(deck.metadata, language)}</span><strong>{localized(deck.title, language)}</strong><span>{localized(deck.subtitle, language)}</span><span className="deck-open">{language === 'fr' ? 'Reprendre la présentation' : language === 'ar' ? 'متابعة العرض' : 'Open presentation'} <ArrowUpRight size={15} /></span></span>
        </button>)}</div>
        <p className="library-footnote"><Layers3 size={15} /> {language === 'fr' ? 'Ajoutez un deck dans le registre des présentations pour le retrouver ici.' : language === 'ar' ? 'أضيفوا عرضاً إلى سجل العروض ليظهر هنا.' : 'Add a deck to the presentation registry to list it here.'}</p>
      </motion.section>
    </motion.div>}
  </AnimatePresence>;
}

function Cover({ deck, language, onStart }) {
  const ui = interfaceText[language];
  return <section className="cover-slide" style={{ '--cover-image': `url("${images.cover}")` }}>
    <div className="cover-image-wash" />
    <div className="cover-topline"><span className="cover-marker"><span /> INTERNATIONAL TRADE / FIELD NOTES</span><span>01 — {pad(deck.chapters.length)}</span></div>
    <div className="cover-main">
      <span className="cover-overline">{language === 'fr' ? 'RÈGLES · FLUX · CONFIANCE' : language === 'ar' ? 'قواعد · تدفقات · ثقة' : 'RULES · ROUTES · TRUST'}</span>
      <h1>{localized(deck.title, language)}</h1>
      <p>{localized(deck.subtitle, language)}</p>
      <button className="start-button" type="button" onClick={onStart}>{ui.start}<ArrowRight size={16} /></button>
    </div>
    <div className="cover-caption"><span><Ship size={14} /> {language === 'fr' ? 'Méditerranée · route commerciale' : language === 'ar' ? 'البحر المتوسط · طريق تجاري' : 'Mediterranean · trade route'}</span><span>{localized(deck.metadata, language)}</span></div>
    <div className="cover-chapter-index"><span>THE JOURNEY</span><strong>01</strong><span>—</span><strong>{pad(deck.chapters.length)}</strong></div>
  </section>;
}

function SlideHeader({ chapter, index, total, language }) {
  return <header className="chapter-header">
    <div className="chapter-title-wrap"><span className="chapter-kicker"><span>{pad(index)} / {pad(total)}</span><i />{localized(chapter.kicker, language).split('/').slice(1).join('/').trim()}</span><h1>{localized(chapter.title, language)}</h1><p>{localized(chapter.intro, language)}</p></div>
    <span className="chapter-number">{pad(index)}</span>
  </header>;
}

function Notes({ chapter, language, open }) {
  const notes = localized(chapter.note, language);
  return <AnimatePresence initial={false}>{open && notes && <motion.aside className="presenter-notes" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .22 }}><div><span>{interfaceText[language].notesHeading}</span><p>{notes}</p></div></motion.aside>}</AnimatePresence>;
}

function OverviewSlide({ chapter, language }) {
  return <div className="overview-content">
    <div className="pillar-grid">{chapter.pillars.map((pillar, index) => <motion.article className={`pillar-panel ${pillar.tone}`} key={pillar.number} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 + index * .08 }}>
      <span className="pillar-index">{pillar.number}</span><span className="pillar-orgs">{pillar.orgs}</span><h2>{localized(pillar.title, language)}</h2><p>{localized(pillar.text, language)}</p><span className="pillar-rule" />
    </motion.article>)}</div>
    <section className="glossary-strip"><div className="glossary-label"><BookOpen size={16} /><span>{interfaceText[language].glossary}</span></div><div className="glossary-list">{chapter.glossary.map(item => <div className="glossary-item" key={item.term}><strong>{item.term}</strong><span>{localized(item.expansion, language)}</span></div>)}</div></section>
  </div>;
}

function TimelineSlide({ chapter, language }) {
  const [selected, setSelected] = useState(0);
  const event = chapter.events[selected];
  return <div className="timeline-content">
    <div className="timeline-track" role="tablist" aria-label={localized(chapter.title, language)}>{chapter.events.map((item, index) => <button className={`timeline-point ${selected === index ? 'active' : ''}`} type="button" role="tab" aria-selected={selected === index} onClick={() => setSelected(index)} key={item.year}><span className="timeline-dot" /><strong>{item.year}</strong><span>{localized(item.name, language)}</span></button>)}</div>
    <AnimatePresence mode="wait"><motion.div className="timeline-detail" key={event.year} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: .24 }}>
      <div className="timeline-photo" style={{ backgroundImage: `url(${images.history})` }}><span className="photo-caption">{localized(event.place, language)}</span><span className="photo-year">{event.year}</span></div>
      <div className="timeline-copy"><span className="detail-location">{localized(event.place, language)}</span><h2>{localized(event.name, language)}</h2><div className="why-impact"><section><span>{interfaceText[language].why}</span><p>{localized(event.why, language)}</p></section><section><span>{interfaceText[language].impact}</span><p>{localized(event.impact, language)}</p></section></div></div>
    </motion.div></AnimatePresence>
  </div>;
}

function HistoryCarousel({ chapter, language, storyIndex, onPrevious, onNext }) {
  const touchStart = useRef(null);
  const story = chapter.stories[storyIndex];
  const ui = interfaceText[language];
  const isRTL = language === 'ar';

  function handleTouchEnd(event) {
    event.stopPropagation();
    if (!touchStart.current) return;
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(deltaX) > 55 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25) {
      const movesForward = isRTL ? deltaX > 0 : deltaX < 0;
      if (movesForward) onNext();
      else onPrevious();
    }
  }

  return <section className="history-carousel" aria-roledescription="carousel" aria-label={ui.historyArc} onTouchStart={event => { event.stopPropagation(); const touch = event.changedTouches[0]; touchStart.current = { x: touch.clientX, y: touch.clientY }; }} onTouchEnd={handleTouchEnd}>
    <AnimatePresence mode="wait"><motion.article key={story.id} className="history-carousel-scene" initial={{ opacity: 0, scale: .985 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.015 }} transition={{ duration: .36, ease: [.22, .75, .2, 1] }}>
      <img className="history-carousel-photo" src={story.image} alt={localized(story.imageAlt, language)} />
      <div className="history-carousel-shade" />
      <div className="history-carousel-topline"><span>{localized(chapter.kicker, language).split('/').slice(1).join('/').trim()}</span><span>{pad(storyIndex + 1)} / {pad(chapter.stories.length)}</span></div>
      <div className="history-carousel-copy"><span className="history-carousel-period">{localized(story.period, language)}</span><h1>{localized(story.title, language)}</h1><p className="history-carousel-subtitle">{localized(story.subtitle, language)}</p><p className="history-carousel-body">{localized(story.text, language)}</p></div>
      <div className="history-carousel-bottom"><span>{ui.imageCredit}: {story.imageCredit} <a href={story.imageSource} target="_blank" rel="noreferrer" aria-label={`${ui.imageCredit}: ${story.imageCredit}`}><ExternalLink size={13} /></a></span><div className="history-carousel-controls"><button type="button" onClick={onPrevious} aria-label={ui.previous} title={ui.previous}><ArrowLeft size={17} /></button><button type="button" onClick={onNext} aria-label={ui.next} title={ui.next}><ArrowRight size={17} /></button></div></div>
    </motion.article></AnimatePresence>
  </section>;
}

function HsCode({ hs, language }) {
  return <section className="hs-feature"><div className="hs-heading"><span>WCO / OMD</span><h2>{localized(hs.title, language)}</h2><strong>{hs.code}</strong></div><div className="hs-breakdown">{hs.parts.map(part => <div key={part.digits}><strong>{part.digits}</strong><span>{localized(part.name, language)}</span></div>)}</div></section>;
}

function InstitutionsSlide({ chapter, language }) {
  return <div className="institutions-content"><div className="institution-grid">{chapter.organizations.map((org, index) => <motion.article className="institution-card" key={org.acronym} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .04 * index }}>
    <div className="institution-card-top"><span>{org.acronym}</span><small>{localized(org.location, language)}</small></div><ul>{org.items[language].map(item => <li key={item}>{item}</li>)}</ul>
  </motion.article>)}</div><HsCode hs={chapter.hs} language={language} /></div>;
}

function IncotermsSlide({ chapter, language }) {
  const [selected, setSelected] = useState('CIF');
  const term = chapter.terms[selected];
  const ui = interfaceText[language];
  return <div className="incoterms-content">
    <div className="term-toolbar"><div className="term-picker" role="tablist" aria-label="Incoterm">{Object.keys(chapter.terms).map(code => <button key={code} className={selected === code ? 'active' : ''} type="button" role="tab" aria-selected={selected === code} onClick={() => setSelected(code)}>{code}</button>)}</div><span className="term-legend"><i /> {ui.seller} <i className="buyer-legend" /> {ui.buyer}</span></div>
    <AnimatePresence mode="wait"><motion.div className="term-summary" key={selected} initial={{ opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -7 }} transition={{ duration: .2 }}><div><span className="term-code">{selected}</span><h2>{localized(term.name, language)}</h2></div><span className="mode-tag"><Ship size={14} /> {localizedMode(term.mode, language)}</span></motion.div></AnimatePresence>
    <div className="supply-journey">{chapter.stages.map((stage, index) => <div key={index} className={`journey-stage ${term.sellerStages[index] ? 'seller-stage' : 'buyer-stage'}`}><span className="stage-number">0{index + 1}</span><span>{localized(stage, language)}</span><small>{term.sellerStages[index] ? ui.seller : ui.buyer}</small>{index === term.riskAt && <span className="risk-marker">RISK</span>}</div>)}</div>
    <div className="term-explanation"><section className="term-risk"><span><ArrowUpRight size={15} /> {ui.risk}</span><p>{localized(term.risk, language)}</p></section><section><span><PackageCheck size={15} /> {ui.customs}</span><p>{localized(term.customs, language)}</p></section><section><span><ArrowRight size={15} /> {ui.cost}</span><p>{localized(chapter.stages[term.costTo], language)}</p></section></div>
    <p className="term-footnote">{localized(chapter.note, language)}</p>
    <div className="incoterm-table-wrap"><table className="incoterm-table"><thead><tr>{[language === 'fr' ? 'Règle' : language === 'ar' ? 'المصطلح' : 'Term', language === 'fr' ? 'Nom complet' : language === 'ar' ? 'الاسم الكامل' : 'Full name', ui.transport, ui.risk].map(item => <th key={item}>{item}</th>)}</tr></thead><tbody>{Object.entries(chapter.terms).map(([code, item]) => <tr key={code} className={code === selected ? 'selected' : ''} onClick={() => setSelected(code)}><td><strong>{code}</strong></td><td>{localized(item.name, language)}</td><td>{localizedMode(item.mode, language)}</td><td>{localized(item.risk, language)}</td></tr>)}</tbody></table></div>
  </div>;
}

function FinanceSlide({ chapter, language }) {
  return <div className="finance-content">
    <div className="finance-grid">{chapter.institutions.map((item, index) => <motion.article className={`finance-card finance-card-${index + 1}`} key={item.acronym} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .06 * index }}><span className="finance-badge">{item.badge}</span><strong className="finance-acronym">{item.acronym}</strong><h2>{localized(item.title, language)}</h2><ul>{item.points[language].map(point => <li key={point}>{point}</li>)}</ul></motion.article>)}</div>
    <section className="lc-process"><div className="process-heading"><span>ICC · UCP 600</span><h2>{interfaceText[language].checklist}</h2></div><div className="process-track">{chapter.steps.map((step, index) => <div className="process-step" key={index}><span className="process-index">0{index + 1}</span><h3>{localized(step.title, language)}</h3><p>{localized(step.text, language)}</p>{index < chapter.steps.length - 1 && <ArrowRight className="process-arrow" size={18} />}</div>)}</div></section>
  </div>;
}

function StandardsSlide({ chapter, language }) {
  return <div className="standards-content"><div className="standards-feature" style={{ backgroundImage: `linear-gradient(90deg, #132123f2 0%, #132123a6 56%, #13212322 100%), url("${images.quality}")` }}><span>QUALITY / SAFETY / MOVEMENT</span><p>{localized(chapter.intro, language)}</p></div><div className="standards-grid">{chapter.bodies.map((item, index) => <motion.article className={`standard-item standard-${index + 1}`} key={item.acronym} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .05 * index }}><div className="standard-top"><strong>{item.acronym}</strong><span>{item.badge}</span></div><h2>{localized(item.title, language)}</h2><ul>{item.points[language].map(point => <li key={point}>{point}</li>)}</ul></motion.article>)}</div></div>;
}

function CaseSlide({ chapter, language }) {
  const [selected, setSelected] = useState(0);
  const step = chapter.steps[selected];
  return <div className="case-content">
    <div className="case-route" style={{ backgroundImage: `linear-gradient(90deg, #0d191bdc, #0d191b55), url("${images.case}")` }}><span className="route-label route-origin">{chapter.route.from}<small>{language === 'fr' ? 'Origine' : language === 'ar' ? 'المنشأ' : 'ORIGIN'}</small></span><span className="route-dash" /><span className="route-ship"><Ship size={29} strokeWidth={1.25} /></span><span className="route-label route-destination">{chapter.route.to}<small>{language === 'fr' ? 'Destination' : language === 'ar' ? 'الوجهة' : 'DESTINATION'}</small></span><span className="route-caption">{chapter.route.distance}</span></div>
    <div className="case-lower"><nav className="case-step-list" aria-label={localized(chapter.title, language)}>{chapter.steps.map((item, index) => <button className={selected === index ? 'active' : ''} key={index} type="button" onClick={() => setSelected(index)}><span>{pad(index + 1)}</span><strong>{localized(item.title, language)}</strong><ArrowRight size={14} /></button>)}</nav>
      <AnimatePresence mode="wait"><motion.article className="case-step-detail" key={selected} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: .2 }}><span className="detail-location">{interfaceText[language].chapter} {pad(selected + 1)} / 06</span><h2>{localized(step.title, language)}</h2><div className="institution-tags">{step.orgs.split(' · ').map(org => <span key={org}>{org}</span>)}</div><p>{localized(step.detail, language)}</p><div className="case-step-controls"><button type="button" onClick={() => setSelected(Math.max(0, selected - 1))} disabled={selected === 0}><ArrowLeft size={15} /> {interfaceText[language].previous}</button><button type="button" onClick={() => setSelected(Math.min(chapter.steps.length - 1, selected + 1))} disabled={selected === chapter.steps.length - 1}>{interfaceText[language].more} <ArrowRight size={15} /></button></div></motion.article></AnimatePresence></div>
  </div>;
}

function Chapter({ chapter, language, storyIndex, onPrevious, onNext }) {
  if (chapter.type === 'overview') return <OverviewSlide chapter={chapter} language={language} />;
  if (chapter.type === 'timeline') return <TimelineSlide chapter={chapter} language={language} />;
  if (chapter.type === 'history-carousel') return <HistoryCarousel chapter={chapter} language={language} storyIndex={storyIndex} onPrevious={onPrevious} onNext={onNext} />;
  if (chapter.type === 'institutions') return <InstitutionsSlide chapter={chapter} language={language} />;
  if (chapter.type === 'incoterms') return <IncotermsSlide chapter={chapter} language={language} />;
  if (chapter.type === 'finance') return <FinanceSlide chapter={chapter} language={language} />;
  if (chapter.type === 'standards') return <StandardsSlide chapter={chapter} language={language} />;
  if (chapter.type === 'case') return <CaseSlide chapter={chapter} language={language} />;
  return null;
}

export function App() {
  const [activeDeck, setActiveDeck] = useState(presentationLibrary[0]);
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState(() => window.localStorage.getItem('story-slides-theme') || 'dark');
  const [slideIndex, setSlideIndex] = useState(-1);
  const [storyIndex, setStoryIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [notesOpen, setNotesOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [outlineOpen, setOutlineOpen] = useState(true);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const stageRef = useRef(null);
  const touchStart = useRef(null);
  const reducedMotion = useReducedMotion();
  const ui = interfaceText[language];
  const chapter = slideIndex < 0 ? null : activeDeck.chapters[slideIndex];
  const total = activeDeck.chapters.length;
  const isRTL = language === 'ar';
  const slideVariants = {
    enter: value => ({ opacity: 0, x: reducedMotion ? 0 : value * 72, scale: reducedMotion ? 1 : .985, filter: reducedMotion ? 'none' : 'blur(5px)' }),
    center: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
    exit: value => ({ opacity: 0, x: reducedMotion ? 0 : value * -52, scale: reducedMotion ? 1 : .99, filter: reducedMotion ? 'none' : 'blur(4px)' })
  };

  function goTo(index) {
    const clamped = Math.max(-1, Math.min(total - 1, index));
    if (clamped === slideIndex) return;
    setDirection(clamped > slideIndex ? 1 : -1);
    setSlideIndex(clamped);
    setStoryIndex(0);
  }

  function stepSlide(delta) {
    if (chapter?.type === 'history-carousel') {
      const nextStory = storyIndex + delta;
      if (nextStory >= 0 && nextStory < chapter.stories.length) {
        setStoryIndex(nextStory);
        return;
      }
    }
    goTo(slideIndex + delta);
  }

  async function toggleFullscreen() {
    if (!document.fullscreenElement) await stageRef.current?.requestFullscreen?.();
    else await document.exitFullscreen?.();
  }

  useEffect(() => {
    const syncFullscreen = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', syncFullscreen);
    return () => document.removeEventListener('fullscreenchange', syncFullscreen);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [language, isRTL]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('story-slides-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onKeyDown = event => {
      const target = event.target;
      const isTyping = target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));
      if (isTyping || libraryOpen) return;
      if (event.key === 'ArrowRight') { event.preventDefault(); stepSlide(isRTL ? -1 : 1); }
      else if (event.key === 'ArrowLeft') { event.preventDefault(); stepSlide(isRTL ? 1 : -1); }
      else if (event.key === ' ' || event.key === 'PageDown') { event.preventDefault(); stepSlide(1); }
      else if (event.key === 'PageUp') { event.preventDefault(); stepSlide(-1); }
      else if (event.key.toLowerCase() === 'n') setNotesOpen(value => !value);
      else if (event.key.toLowerCase() === 'f') { event.preventDefault(); toggleFullscreen(); }
      else if (event.key === 'Escape' && notesOpen) setNotesOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [slideIndex, storyIndex, isRTL, libraryOpen, notesOpen, total]);

  useEffect(() => {
    if (slideIndex < 0) return;
    document.title = `${localized(activeDeck.chapters[slideIndex].title, language)} — Story / Slides`;
  }, [activeDeck, slideIndex, language]);

  return <main ref={stageRef} className={`studio-shell ${isFullscreen ? 'presentation-mode' : ''} ${outlineOpen ? '' : 'outline-collapsed'}`} data-theme={theme} dir={isRTL ? 'rtl' : 'ltr'}>
    <header className="studio-topbar">
      <div className="topbar-start"><IconButton label={outlineOpen ? 'Hide outline' : 'Show outline'} onClick={() => setOutlineOpen(value => !value)} className="outline-toggle">{outlineOpen ? <PanelLeftClose size={17} /> : <PanelLeftOpen size={17} />}</IconButton><Brand language={language} onLibrary={() => setLibraryOpen(true)} compact={isFullscreen} /></div>
      <div className="topbar-center"><span className="deck-live-dot" /><span>{localized(activeDeck.title, language)}</span><span className="topbar-divider">/</span><span>{ui.slide} {pad(Math.max(1, slideIndex + 1))}</span></div>
      <div className="topbar-actions"><button className="library-button" type="button" onClick={() => setLibraryOpen(true)}><Layers3 size={15} /><span>{ui.library}</span></button><LanguageSwitch language={language} setLanguage={setLanguage} /><IconButton label={ui.notes} active={notesOpen} onClick={() => setNotesOpen(value => !value)}><BookOpen size={17} /></IconButton><IconButton label={theme === 'dark' ? ui.themeLight : ui.themeDark} onClick={() => setTheme(value => value === 'dark' ? 'light' : 'dark')} className="theme-toggle">{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</IconButton><button className="fullscreen-button" type="button" onClick={toggleFullscreen}>{isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}<span>{isFullscreen ? ui.exitFullscreen : ui.fullscreen}</span></button></div>
    </header>

    <div className="studio-body">
      <aside className="chapter-sidebar"><div className="sidebar-deck-label"><span>NOW PRESENTING</span><span className="deck-runtime"><Clock3 size={12} /> {localized(activeDeck.metadata, language).split('·').at(-1)?.trim()}</span></div><button className="sidebar-deck" type="button" onClick={() => goTo(-1)}><span className="sidebar-cover" style={{ backgroundImage: `url(${activeDeck.coverImage || images.cover})` }}><span>{localized(activeDeck.title, language)}</span></span><span><strong>{localized(activeDeck.title, language)}</strong><small>{total} {ui.chapters}</small></span></button><div className="sidebar-rule" /><span className="outline-heading">{ui.outline}</span><nav className="chapter-nav" aria-label={ui.outline}>{activeDeck.chapters.map((item, index) => <button key={item.id} className={slideIndex === index ? 'active' : ''} type="button" onClick={() => goTo(index)} aria-current={slideIndex === index ? 'step' : undefined}><span className="chapter-nav-index">{pad(index + 1)}</span><span className="chapter-nav-title">{localized(item.title, language)}</span><span className="chapter-nav-marker" /></button>)}</nav><div className="sidebar-bottom"><span><Sparkles size={13} /> {ui.modeHint}</span><span>EN / FR / عربي</span></div></aside>

      <section className="presentation-area" aria-live="polite">
        <div className={`slide-backdrop ${chapter ? `backdrop-${chapterPalette[slideIndex]}` : 'backdrop-cover'}`} style={chapterImages[slideIndex] ? { '--chapter-image': `url("${chapterImages[slideIndex]}")` } : undefined} />
        <div className="presentation-stage" onTouchStart={event => { if (event.target instanceof Element && event.target.closest('button')) return; const touch = event.changedTouches[0]; touchStart.current = { x: touch.clientX, y: touch.clientY }; }} onTouchEnd={event => { if (!touchStart.current) return; const touch = event.changedTouches[0]; const deltaX = touch.clientX - touchStart.current.x; const deltaY = touch.clientY - touchStart.current.y; touchStart.current = null; if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25) stepSlide(deltaX < 0 ? (isRTL ? -1 : 1) : (isRTL ? 1 : -1)); }}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            {slideIndex < 0 ? <motion.div key="cover" className="slide-motion cover-motion" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: reducedMotion ? .01 : .48, ease: [.22, .75, .2, 1] }}><Cover deck={activeDeck} language={language} onStart={() => goTo(0)} /></motion.div> : <motion.article key={chapter.id} className={`slide-motion chapter-motion chapter-${chapter.type}`} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: reducedMotion ? .01 : .48, ease: [.22, .75, .2, 1] }}>
              {chapter.type !== 'history-carousel' && <SlideHeader chapter={chapter} index={slideIndex + 1} total={total} language={language} />}<Chapter chapter={chapter} language={language} storyIndex={storyIndex} onPrevious={() => stepSlide(-1)} onNext={() => stepSlide(1)} /><Notes chapter={chapter} language={language} open={notesOpen} />
            </motion.article>}
          </AnimatePresence>
        </div>
        <div className="slide-edge-label"><span>STORY / SLIDES</span><span>{chapter ? `${pad(slideIndex + 1)} — ${pad(total)}` : 'FIELD NOTES / 01'}</span></div>
      </section>
    </div>

    <footer className="studio-controls"><button className="back-library" type="button" onClick={() => setLibraryOpen(true)}><Layers3 size={15} /><span>{ui.backToLibrary}</span></button><div className="playback-control"><span className="playback-index">{pad(Math.max(1, slideIndex + 1))}<i>/</i>{pad(total)}</span><div className="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax={total} aria-valuenow={Math.max(0, slideIndex + 1)}><motion.span className="progress-value" animate={{ width: `${Math.max(0, ((slideIndex + 1) / total) * 100)}%` }} transition={{ duration: .35 }} /></div><div className="control-buttons"><IconButton label={ui.previous} onClick={() => stepSlide(-1)} className="nav-control" disabled={slideIndex <= -1}><ArrowLeft size={17} /></IconButton><IconButton label={ui.next} onClick={() => stepSlide(1)} className="nav-control next-control" disabled={slideIndex >= total - 1}><ArrowRight size={17} /></IconButton></div></div><button className="notes-shortcut" type="button" onClick={() => setNotesOpen(value => !value)}><span>N</span> {ui.notes}</button></footer>
    <Library language={language} open={libraryOpen} close={() => setLibraryOpen(false)} selectDeck={deck => { setActiveDeck(deck); setLibraryOpen(false); setSlideIndex(-1); }} />
  </main>;
}

const rootElement = document.getElementById('root');
if (rootElement) createRoot(rootElement).render(<App />);