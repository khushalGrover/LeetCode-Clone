import Link from 'next/link';

import { Button } from '../components/Button';
import { CTABanner } from '../components/CTABanner';
import { Section } from '../components/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      subtitle="Start your Free Trial."
      button={
        <Link href="/">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
