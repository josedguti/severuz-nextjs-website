import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { RootLayout } from '@/components/RootLayout'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discovery & Planning" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Every project begins with an{' '}
          <strong className="font-semibold text-neutral-950">initial consultation</strong>{' '}
          where we discuss your vision, goals, and requirements. We take the time
          to understand your business context, target users, and technical needs.
        </p>
        <p>
          Through detailed conversations and requirement gathering sessions, we
          identify the core{' '}
          <strong className="font-semibold text-neutral-950">features</strong>,
          technical constraints, and success criteria for your project. This
          collaborative approach ensures we\'re aligned from day one.
        </p>
        <p>
          We then create a comprehensive{' '}
          <strong className="font-semibold text-neutral-950">project plan</strong>{' '}
          with clear timelines, milestones, and deliverables. You\'ll know exactly
          what to expect and when to expect it.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Initial consultation call</TagListItem>
        <TagListItem>Requirements gathering</TagListItem>
        <TagListItem>Technical architecture planning</TagListItem>
        <TagListItem>Timeline & milestone definition</TagListItem>
        <TagListItem>Technology stack selection</TagListItem>
        <TagListItem>Project scope document</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Development" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          With a solid plan in place, we begin development using{' '}
          <strong className="font-semibold text-neutral-950">modern technologies</strong>{' '}
          and best practices. We follow agile methodologies, building your software
          iteratively and ensuring quality at every step.
        </p>
        <p>
          Throughout development, we maintain{' '}
          <strong className="font-semibold text-neutral-950">open communication</strong>,
          providing regular progress updates and demos. You\'ll have visibility into
          the development process and opportunities to provide feedback along the way.
        </p>
        <p>
          We write clean, maintainable code with comprehensive testing to ensure
          your application is robust, secure, and ready to scale with your business.
          Every line of code is written with{' '}
          <strong className="font-semibold text-neutral-950">long-term sustainability</strong>{' '}
          in mind.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Development approach
      </h3>
      <TagList className="mt-4">
        <TagListItem>Agile methodology</TagListItem>
        <TagListItem>Regular progress updates</TagListItem>
        <TagListItem>Code reviews & quality checks</TagListItem>
        <TagListItem>Comprehensive testing</TagListItem>
        <TagListItem>Modern tech stack</TagListItem>
        <TagListItem>Security best practices</TagListItem>
      </TagList>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Launch & Support" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          As we approach launch, we conduct thorough{' '}
          <strong className="font-semibold text-neutral-950">testing</strong> to
          ensure everything works flawlessly. We test across different devices,
          browsers, and scenarios to catch any issues before your users do.
        </p>
        <p>
          Once testing is complete, we handle the{' '}
          <strong className="font-semibold text-neutral-950">deployment</strong> to
          production environments, whether that\'s cloud infrastructure, app stores,
          or your existing hosting. We make sure the launch goes smoothly.
        </p>
        <p>
          After launch, we provide{' '}
          <strong className="font-semibold text-neutral-950">documentation</strong>{' '}
          and training to help you understand and manage your new software. We\'re
          here to support you as you grow and can help with future enhancements
          and scaling needs.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Comprehensive Testing">
          Thorough QA testing across devices, browsers, and use cases to ensure
          a smooth user experience and catch any bugs before launch.
        </ListItem>
        <ListItem title="Deployment & Infrastructure">
          Professional deployment to production environments with proper CI/CD
          pipelines, monitoring, and scalable cloud infrastructure.
        </ListItem>
        <ListItem title="Documentation & Training">
          Complete documentation of your codebase, APIs, and systems, along with
          training to help your team understand and maintain the software.
        </ListItem>
      </List>
    </Section>
  )
}


export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'From initial consultation to deployment, our process is designed to ensure clear communication, quality deliverables, and successful outcomes.',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Our process" title="A straightforward approach to building great software">
        <p>
          Every successful project starts with understanding your needs. Our process
          is designed to be transparent, collaborative, and focused on delivering
          results that exceed your expectations.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <ContactSection />
    </RootLayout>
  )
}
