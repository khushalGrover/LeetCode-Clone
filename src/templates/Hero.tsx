import Link from 'next/link';

import { Background } from '../components/Background';
import { BackgroundTilt } from '../components/BackgroundTilt';
import { Button } from '../components/Button';
import { HeroOneButton } from '../components/HeroOneButton';
import { Section } from '../components/Section';
import { NavbarTwoColumns } from '../components/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="transpaent relative">
    
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/#">
            <span className="text-primary-500">Premium</span>
          </Link>
        </li>
        <li>
          <Link href="/#explore">Explore</Link>
        </li>
        <li>
          <Link href="/#product">Product</Link>
        </li>
        <li>
          <Link href="/#developer">Developer</Link>
        </li>
        <li>
          <Link href="/##">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <BackgroundTilt tiltAngle="skew-y-12" myClass="bg-[#292929] top-0" />

    <Section yPadding="flex flex-col justify-center text-center h-[90vh] ">
      <HeroOneButton
        title={
          <>
            {'A New Way to '}
            <span className="text-primary-500">Learn</span>
          </>
        }
        description="LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews."
        button={
          <Link href="#" className="w-[200px] flex-none">
            <Button xl>Create Account</Button>
          </Link>
        }
      />
    </Section>
    <BackgroundTilt
      tiltAngle="-skew-y-12"
      myClass="bg-[#f7f9fc] z-[-3] top-[110vh]"
    />
  </Background>
);

export { Hero };
