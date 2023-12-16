import { DiscoverCard } from '@/components/DiscoverCard';
import Image from 'next/image';
import {
  PiChecksLight,
  PiFactoryLight,
  PiFilesLight,
  PiPiggyBankLight,
  PiPlaceholderLight,
  PiRobotLight,
  PiRocketLaunchLight,
  PiSmileyLight,
} from 'react-icons/pi';

export default function Home() {
  return (
    <div className="bg-base-100">
      <div className="hero min-h-screen">
        <div className="hero-content text-center flex flex-col">
          <div className="max-w-6xl">
            <h1 className="text-4xl sm:text-6xl font-bold leading-normal">
              Scale and Digitalize your Business with Intelligent Automations
            </h1>
          </div>

          <h2 className="text-2xl sm:text-4xl font-semibold mt-16 mb-8">
            Discover how you can
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            <DiscoverCard icon={<PiFactoryLight />} title="Build systems" />
            <DiscoverCard icon={<PiRobotLight />} title="Automate processes" />
            <DiscoverCard
              icon={<PiFilesLight />}
              title="Eliminate pen & paper"
            />
            <DiscoverCard icon={<PiPiggyBankLight />} title="Reduce costs" />
            <DiscoverCard
              icon={<PiRocketLaunchLight />}
              title="Increase efficiency"
            />
            <DiscoverCard
              icon={<PiSmileyLight />}
              title="Boost employee happiness"
            />
          </div>
        </div>
      </div>

      <section>{/* TODO: add animation */}</section>
      <section className="flex flex-col items-center mt-16 lg:mt-8 xl:mt-0">
        <p className="text-center mb-12">We are proud to partner with</p>
        <div className="carousel carousel-center flex gap-32 max-w-3xl items-center">
          <div className="carousel-item">
            <Image
              style={{ filter: 'grayscale()' }}
              src="/images/CF_logo.webp"
              alt="Chris Feith Logo"
              width={80}
              height={80}
            />
          </div>
          <div className="carousel-item">
            <Image
              style={{ filter: 'grayscale()' }}
              src="/images/IMS_logo.webp"
              alt="Immoselfmade Logo"
              width={80}
              height={80}
            />
          </div>
          <div className="carousel-item">
            <Image
              style={{ filter: 'grayscale()' }}
              src="/images/ADP_logo.webp"
              alt="Aldeas de Paz Logo"
              width={80}
              height={80}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
