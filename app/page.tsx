import { DiscoverCard } from '@/components/DiscoverCard';
import {
  PiFactoryLight,
  PiFilesLight,
  PiPiggyBankLight,
  PiRobotLight,
  PiRocketLaunchLight,
  PiSmileyLight,
} from 'react-icons/pi';

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-100">
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
          <DiscoverCard icon={<PiFilesLight />} title="Eliminate pen & paper" />
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
  );
}
