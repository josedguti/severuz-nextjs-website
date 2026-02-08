import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { RootLayout } from '@/components/RootLayout'

function Values() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our values"
        title="Building software with integrity and excellence."
        invert
      >
        <p>
          Every project we undertake is guided by our commitment to quality,
          transparency, and client success.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Quality First" invert>
            We believe in writing clean, maintainable code and following best
            practices to ensure your software stands the test of time.
          </GridListItem>
          <GridListItem title="Transparent Communication" invert>
            We keep you informed at every step of the development process. No
            surprises, no hidden costs—just honest, straightforward collaboration.
          </GridListItem>
          <GridListItem title="Client Success" invert>
            Your success is our success. We\'re invested in understanding your
            business goals and delivering solutions that drive real results.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}


export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Severuz is a software engineering consulting company based in Toronto, specializing in building scalable web and mobile applications with modern technologies.',
}

export default async function About() {
  return (
    <RootLayout>
      <PageIntro eyebrow="About us" title="Software engineering that delivers results">
        <p>
          Severuz is a software engineering consulting company that specializes in
          building custom web and mobile applications for businesses of all sizes.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Based in Toronto and working with clients remotely, we bring together
            modern technologies and proven development practices to create software
            solutions that are scalable, maintainable, and built to last.
          </p>
          <p>
            Whether you need a customer-facing web application, a mobile app for
            iOS and Android, robust API infrastructure, or cloud architecture
            consulting, we have the expertise to turn your vision into reality.
          </p>
          <p>
            Every project starts with understanding your unique requirements. Through
            an initial consultation, we work closely with you to define clear goals,
            establish timelines, and create a development plan that aligns with your
            business objectives.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="100%" label="Client satisfaction" />
          <StatListItem value="Modern" label="Tech stack" />
          <StatListItem value="Remote" label="Work style" />
        </StatList>
      </Container>

      <Values />

      <ContactSection />
    </RootLayout>
  )
}
