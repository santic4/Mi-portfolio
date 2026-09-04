"use client";

import { useEffect, useMemo, useState } from "react";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  placeholder?: boolean;
};

type ProjectGalleryProps = {
  images?: ProjectImage[];
  projectTitle: string;
};

export default function ProjectGallery({ images = [], projectTitle }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedSources, setFailedSources] = useState<Set<string>>(new Set());

  const visibleImages = useMemo(
    () => images.filter((image) => image?.src && !failedSources.has(image.src)),
    [images, failedSources],
  );

  useEffect(() => {
    if (activeIndex >= visibleImages.length) setActiveIndex(0);
  }, [activeIndex, visibleImages.length]);

  if (!images.length) return null;

  if (!visibleImages.length) {
    return (
      <div className="gallery-unavailable" role="status">
        <span aria-hidden="true">↗</span>
        <p>Las imágenes de {projectTitle} estarán disponibles pronto.</p>
      </div>
    );
  }

  const current = visibleImages[activeIndex] ?? visibleImages[0];
  const hasMultiple = visibleImages.length > 1;

  const selectPrevious = () => {
    setActiveIndex((index) => (index - 1 + visibleImages.length) % visibleImages.length);
  };

  const selectNext = () => {
    setActiveIndex((index) => (index + 1) % visibleImages.length);
  };

  return (
    <div className="project-gallery" aria-label={`Galería de ${projectTitle}`}>
      <div className="gallery-stage">
        <img
          src={current.src}
          alt={current.alt}
          loading="lazy"
          onError={() => {
            setFailedSources((previous) => new Set(previous).add(current.src));
            setActiveIndex(0);
          }}
        />
        {current.placeholder && <span className="gallery-demo">Vista demo</span>}
        {hasMultiple && (
          <div className="gallery-controls">
            <button type="button" onClick={selectPrevious} aria-label={`Imagen anterior de ${projectTitle}`}>
              ←
            </button>
            <span>{activeIndex + 1}/{visibleImages.length}</span>
            <button type="button" onClick={selectNext} aria-label={`Imagen siguiente de ${projectTitle}`}>
              →
            </button>
          </div>
        )}
      </div>

      {(current.caption || hasMultiple) && (
        <div className="gallery-meta">
          <p>{current.caption ?? `Vista ${activeIndex + 1} de ${projectTitle}`}</p>
          {hasMultiple && (
            <div className="gallery-thumbnails" aria-label="Elegir imagen">
              {visibleImages.map((image, index) => (
                <button
                  type="button"
                  key={image.src}
                  className={index === activeIndex ? "is-active" : ""}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ver imagen ${index + 1} de ${projectTitle}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                >
                  <img
                    src={image.src}
                    alt=""
                    loading="lazy"
                    onError={() => setFailedSources((previous) => new Set(previous).add(image.src))}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
