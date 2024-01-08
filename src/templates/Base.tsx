import { Meta } from '../components/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Room } from '../3dComponents/Room';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased relative">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <div className='fixed top-0 left-0 h-[100vh] w-full z-[-3]'>
      <Room/>
    </div>
    <Hero />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
