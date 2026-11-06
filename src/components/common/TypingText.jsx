import { Fragment } from 'react';
import './typing-text.css';
export const HEADING_CHARACTER_DELAY = 0.055;
export const CHARACTER_FADE_DURATION = 0.07;
export const typingDuration = (text, characterDelay = HEADING_CHARACTER_DELAY) => Array.from(text).length * characterDelay + CHARACTER_FADE_DURATION;
/** Every letter is already in flow; opacity reveals characters without shifting the reserved text. */
export default function TypingText({ text, delay = 0, characterDelay = HEADING_CHARACTER_DELAY }) {
  return <span className="hero-typing-text"><span className="sr-only">{text}</span><span aria-hidden="true">{Array.from(text).map((character, index) => /\s/.test(character) ? <Fragment key={index}>{character}</Fragment> : <span key={index} className="hero-typing-char" style={{ animationDelay: `${delay + index * characterDelay}s` }}>{character}</span>)}</span></span>;
}
