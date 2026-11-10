import { Plus } from 'lucide-react'
import { useId, useState } from 'react'
import type { StoryMeta } from '../content/site'
import { asset } from '../lib/asset'

const handles = ['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3']

interface StoryCardProps {
  story: StoryMeta
  summary: string
  detailsLabel: string
  index: number
  featured?: boolean
}

export default function StoryCard({ story, summary, detailsLabel, index, featured = false }: StoryCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const summaryId = useId()
  const number = String(index + 1).padStart(2, '0')

  return (
    <article
      data-open={isOpen}
      onMouseLeave={() => setIsOpen(false)}
      className={`theme-dark group relative isolate overflow-hidden bg-surface ${
        featured
          ? 'aspect-[4/5] sm:col-span-2 sm:aspect-[16/9] lg:col-span-4 lg:aspect-[3/1]'
          : 'aspect-[4/5] sm:aspect-[4/5]'
      }`}
    >
      <img
        src={asset(`images/${story.image}-800.webp`)}
        srcSet={`${asset(`images/${story.image}-800.webp`)} 800w, ${asset(`images/${story.image}-1600.webp`)} 1600w`}
        sizes={featured ? '(min-width: 1280px) 1200px, 100vw' : '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'}
        alt=""
        loading="lazy"
        decoding="async"
        style={story.focus ? { objectPosition: story.focus } : undefined}
        className="story-photo absolute inset-0 -z-10 size-full object-cover group-hover:scale-[1.03] group-hover:saturate-100 group-has-focus-visible:scale-[1.03] group-data-[open=true]:scale-[1.03]"
      />
      <div aria-hidden="true" className="story-tint absolute inset-0 -z-10" />
      <div aria-hidden="true" className="story-halftone absolute inset-0 -z-10" />
      <div aria-hidden="true" className="grain absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="story-scrim absolute inset-0 -z-10 opacity-0 transition-opacity duration-400 ease-ui group-hover:opacity-100 group-has-focus-visible:opacity-100 group-data-[open=true]:opacity-100"
      />

      {handles.map((position) => (
        <span
          key={position}
          aria-hidden="true"
          className={`absolute size-[6px] scale-50 bg-ink opacity-0 transition duration-300 ease-ui group-hover:scale-100 group-hover:opacity-100 group-has-focus-visible:scale-100 group-has-focus-visible:opacity-100 group-data-[open=true]:scale-100 group-data-[open=true]:opacity-100 ${position}`}
        />
      ))}

      <div className={`absolute inset-x-0 bottom-0 flex items-end gap-6 ${featured ? 'p-6 sm:p-8 lg:p-10' : 'p-6'}`}>
        <div className="min-w-0 flex-1">
          <p aria-hidden="true" className="font-mono text-xs text-accent">
            {number}
          </p>
          <h3
            className={`mt-2 font-medium tracking-[-0.01em] text-ink ${
              featured ? 'text-2xl sm:text-3xl' : 'text-xl leading-tight'
            }`}
          >
            {story.company}
          </h3>

          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-settle group-hover:grid-rows-[1fr] group-has-focus-visible:grid-rows-[1fr] group-data-[open=true]:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p
                id={summaryId}
                className={`translate-y-2 pt-3 leading-relaxed text-pretty text-ink/85 opacity-0 transition duration-500 ease-settle group-hover:translate-y-0 group-hover:opacity-100 group-has-focus-visible:translate-y-0 group-has-focus-visible:opacity-100 group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100 ${
                  featured ? 'max-w-[38rem] text-[15px] sm:text-base' : 'text-sm'
                }`}
              >
                {summary}
              </p>
            </div>
          </div>
        </div>

        <span
          aria-hidden="true"
          className="grid size-9 shrink-0 place-items-center border border-ink/30 bg-void/30 text-ink backdrop-blur-sm transition-colors duration-300 ease-ui group-hover:border-ink group-has-focus-visible:border-ink group-data-[open=true]:border-ink"
        >
          <Plus
            className="size-4 transition-transform duration-300 ease-ui group-hover:rotate-45 group-has-focus-visible:rotate-45 group-data-[open=true]:rotate-45"
            strokeWidth={1.5}
          />
        </span>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={summaryId}
        aria-label={detailsLabel}
        className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-offset-[-4px]"
      />
    </article>
  )
}
