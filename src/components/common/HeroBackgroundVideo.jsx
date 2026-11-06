import { useEffect, useRef, useState } from 'react';
import './hero-video.css';

const readPreferences = () => ({
  mobile: window.matchMedia('(max-width: 767px)').matches,
  restricted: window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(prefers-reduced-data: reduce)').matches || Boolean(navigator.connection?.saveData),
});
/** One responsive MP4 at a time, with a permanent poster underlay and motion/data safeguards. */
export default function HeroBackgroundVideo() {
  const [preferences, setPreferences] = useState(readPreferences);
  const [visible, setVisible] = useState(true);
  const [tabActive, setTabActive] = useState(() => !document.hidden);
  const [readySource, setReadySource] = useState(null);
  const [failedSource, setFailedSource] = useState(null);
  const [loopFading, setLoopFading] = useState(false);
  const layer = useRef(null);
  const video = useRef(null);
  const variant = preferences.mobile ? 'mobile' : 'desktop';
  const src = `${import.meta.env.BASE_URL}videos/aishwarya-hero-${variant}.mp4`;
  const poster = `${import.meta.env.BASE_URL}images/hero-${variant}-poster.webp`;
  const allowed = !preferences.restricted && failedSource !== src;

  useEffect(() => {
    const queries = ['(max-width: 767px)', '(prefers-reduced-motion: reduce)', '(prefers-reduced-data: reduce)'].map((query) => window.matchMedia(query));
    const update = () => setPreferences(readPreferences());
    queries.forEach((query) => query.addEventListener('change', update));
    navigator.connection?.addEventListener?.('change', update);
    const visibility = () => setTabActive(!document.hidden);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      queries.forEach((query) => query.removeEventListener('change', update));
      navigator.connection?.removeEventListener?.('change', update);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0 });
    observer.observe(layer.current.closest('section'));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = video.current;
    // Restore the source after React StrictMode's development-only effect cleanup.
    if (element && element.getAttribute('src') !== src) element.src = src;
    return () => {
      if (!element) return;
      element.pause();
      element.removeAttribute('src');
      element.load();
    };
  }, [src, allowed]);

  useEffect(() => {
    const element = video.current;
    if (!element || !allowed) return;
    if (!visible || !tabActive) { element.pause(); return; }
    element.muted = true;
    element.play().catch((error) => {
      if (error.name === 'NotAllowedError' || error.name === 'NotSupportedError') {
        setFailedSource(src);
        setReadySource(null);
      } else {
        setReadySource((current) => current === src ? null : current);
      }
    });
  }, [src, allowed, visible, tabActive]);

  return (
    <div ref={layer} className="hero-video-layer pointer-events-none absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
      <img src={poster} alt="" fetchPriority="high" width={preferences.mobile ? 720 : 1920} height={preferences.mobile ? 1280 : 1080} className="hero-video-media absolute inset-0 size-full object-cover" />
      {allowed && <video key={src} ref={video} src={src} poster={poster} autoPlay muted loop playsInline preload="metadata" controls={false} disablePictureInPicture disableRemotePlayback tabIndex={-1}
        onPlaying={(event) => { const media = event.currentTarget; setReadySource(src); setLoopFading(Number.isFinite(media.duration) && media.duration - media.currentTime < 0.8); }} onError={() => { setReadySource(null); setFailedSource(src); }}
        onTimeUpdate={(event) => { const media = event.currentTarget; setLoopFading(Number.isFinite(media.duration) && media.duration - media.currentTime < 0.8); }}
        className={`hero-video-media hero-video-playback absolute inset-0 size-full object-cover ${readySource === src && !loopFading ? 'hero-video-ready' : ''}`} />}
    </div>
  );
}
