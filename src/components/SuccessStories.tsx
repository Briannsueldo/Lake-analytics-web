import { storyMeta } from '../content/site'
import { useLanguage } from '../i18n/LanguageContext'
import StoryCard from './StoryCard'
import SectionHeading from './ui/SectionHeading'

export default function SuccessStories() {
  const { t } = useLanguage()
  const { stories } = t

  return (
    <section id="cases" aria-labelledby="cases-title" className="scroll-mt-0 bg-void py-20 sm:py-28 lg:py-32">
      <div className="page-wrap">
        <SectionHeading
          id="cases-title"
          eyebrow={stories.eyebrow}
          title={stories.title}
          aside={<p className="eyebrow text-ink/55 lg:text-right">{stories.count(storyMeta.length)}</p>}
        />

        <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {storyMeta.map((story, index) => (
            <StoryCard
              key={story.id}
              story={story}
              summary={stories.summaries[story.id]}
              detailsLabel={t.a11y.storyDetails(story.company)}
              index={index}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
