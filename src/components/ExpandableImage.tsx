import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ExpandableImageProps {
  src: string;
  alt: string;
  caption?: string;
}

/**
 * Image that zooms on hover (desktop) and opens a fullscreen
 * lightbox on click/tap (dismissed via ✕, backdrop, or Escape).
 */
const ExpandableImage: React.FC<ExpandableImageProps> = ({ src, alt, caption }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <figure>
      <button
        type="button"
        className="zoom-trigger"
        onClick={() => setOpen(true)}
        aria-label={`View larger image: ${alt}`}
      >
        <img src={src} alt={alt} loading="lazy" />
      </button>
      {caption && <figcaption>{caption}</figcaption>}
      {open &&
        createPortal(
          <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={() => setOpen(false)}>
            <button
              type="button"
              className="lightbox__close"
              aria-label="Close image"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <img className="lightbox__img" src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
            {caption && <div className="lightbox__caption">{caption}</div>}
          </div>,
          document.body
        )}
    </figure>
  );
};

export default ExpandableImage;
