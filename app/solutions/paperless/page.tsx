import { CheckedText } from '@/components/CheckedText';
import Image from 'next/image';
import {
  PiArticleLight,
  PiCalculatorLight,
  PiCloudCheckLight,
  PiDesktopTowerLight,
  PiDownloadLight,
  PiFileArrowDownLight,
  PiHardDrivesLight,
  PiHourglassMediumLight,
  PiLightbulbFilamentLight,
  PiMedalLight,
  PiNumberSquareOneLight,
  PiNumberSquareThreeLight,
  PiNumberSquareTwoLight,
  PiQuestionLight,
  PiScanLight,
  PiSignInLight,
  PiWrenchLight,
} from 'react-icons/pi';
import { SolutionCard } from '@/components/SolutionCard';
import { PricingCard } from '@/components/PricingCard';
import Link from 'next/link';
import type { Metadata } from 'next';
import { MotionWrapper } from '@/components/MotionWrapper';
import {
  itemAnimationVariant,
  staggerAnimationVariant,
} from '@/utils/animation';

export const metadata: Metadata = {
  title: 'Get the Paperless-ngx system running | we install it for you',
  description:
    '▷ Eliminate pen & paper and make your documents available for your team. Get started with paperless-ngx today! ✓ 100% satisfaction guarantee ✓ full support.',
};

export default function Paperless() {
  return (
    <>
      <div className="hero bg-blob-soft bg-cover lg:bg-contain bg-top">
        <div className="hero-content text-center flex flex-col">
          <MotionWrapper className="max-w-6xl" variants={itemAnimationVariant}>
            <h1 className="text-4xl sm:text-6xl font-bold sm:leading-relaxed sm:pt-8">
              Transform your physical documents into a searchable online archive
            </h1>
          </MotionWrapper>
          <MotionWrapper variants={itemAnimationVariant}>
            <p className="mt-8 mb-2 max-w-xl mx-auto leading-relaxed">
              Paperless is an open-source community developed document managment
              software that runs on the server. You can connect your scanner to
              it or just drop files from your devices into the consumption of
              Paperless. The software automatically sorts and names your
              documents and make it fully searchable thanks to OCR.
            </p>
          </MotionWrapper>
          <Link href="#pricing">
            <button className="btn btn-secondary mb-16 capitalize">
              Get started now
            </button>
          </Link>
          <div className="flex flex-col md:flex-row gap-12 max-w-5xl">
            <Image
              src="https://docs.paperless-ngx.com/assets/logo_full_white.svg"
              alt="White logo of paperless-ngx"
              width={384}
              height={184}
              loading="lazy"
            />
            <div className="flex flex-col gap-4">
              <MotionWrapper index={0} variants={staggerAnimationVariant}>
                <CheckedText description="Find the right documents at a blazingly speed and simplify collaborating with your team by digitalizing all your documents with Paperless." />
              </MotionWrapper>
              <MotionWrapper index={1} variants={staggerAnimationVariant}>
                <CheckedText description="Never worry about your files. Everything is backed-up on your server." />
              </MotionWrapper>
              <MotionWrapper index={2} variants={staggerAnimationVariant}>
                <CheckedText description="Forget about the repetitive task of manually naming and sorting documents. Automate from scan to document management saving tons of time." />
              </MotionWrapper>
            </div>
          </div>
        </div>
      </div>

      <Image
        className="container mx-auto pt-16 px-4"
        src="https://docs.paperless-ngx.com/assets/screenshots/documents-smallcards-dark.png"
        alt="paperless-ngx dashboard with tagged documents"
        width={1920}
        height={1080}
        loading="lazy"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-4 items-center mb-8">
          <PiQuestionLight className="text-3xl text-primary" />
          <h2 className="text-4xl font-semibold">What do I need?</h2>
        </div>
        <p className="max-w-3xl">
          Everything you need to setup the paperless system.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mt-8">
          <SolutionCard
            icon={<PiDownloadLight />}
            description="Paperless-ngx open source software"
            url="https://github.com/paperless-ngx/paperless-ngx"
          />
          <SolutionCard
            icon={<PiScanLight />}
            description="A scanner that is capable of sending files to a folder (e.g. Fujitsu ScanSnap)"
            // url="https://github.com/paperless-ngx/paperless-ngx"
          />
          <SolutionCard
            icon={<PiDesktopTowerLight />}
            description="A computer (ideally a server) where you want to store your files (e.g. Synology NAS)"
            // url="https://github.com/paperless-ngx/paperless-ngx"
          />
        </div>
      </div>

      <section className="px-4">
        <div className="container mx-auto p-8 lg:p-16 bg-gunmetal-600 rounded-lg">
          <div className="flex gap-4 items-center mb-8">
            <PiHourglassMediumLight className="text-3xl text-primary" />
            <h2 className="text-4xl font-semibold">
              How does the installation work?
            </h2>
          </div>
          <p className="max-w-3xl">
            You can install Paperless on your computer, on your server or
            company infrastructure or on an external server.
          </p>
          <ul className="mt-8">
            <li className="flex flex-col gap-4 mb-8">
              <PiNumberSquareOneLight className="text-4xl text-primary" />
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
                <div className="col-span-2 flex flex-col sm:flex-row gap-2">
                  <SolutionCard
                    icon={<PiHardDrivesLight />}
                    description="Install on your own server (NAS, company infrastructure)"
                  />
                  <div className="divider sm:divider-horizontal">OR</div>
                  <SolutionCard
                    icon={<PiCloudCheckLight />}
                    description="Install on external server infrastructure you rent"
                  />
                </div>
              </div>
            </li>
            <li className="flex flex-col gap-4 mb-8">
              <PiNumberSquareTwoLight className="text-4xl text-primary" />
              <div className="grid sm:grid-cols-2 md:grid-cols-3">
                <SolutionCard
                  icon={<PiWrenchLight />}
                  description="Configure your scanner to drop files in paperless"
                />
              </div>
            </li>
            <li className="flex flex-col gap-4">
              <PiNumberSquareThreeLight className="text-4xl text-primary" />
              <div className="grid sm:grid-cols-2 md:grid-cols-3">
                <SolutionCard
                  icon={<PiSignInLight />}
                  description="Configure access rights, login web portal, test run"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-4 items-center mb-8">
          <PiQuestionLight className="text-3xl text-primary" />
          <h2 className="text-4xl font-semibold">How to use paperless-ngx?</h2>
        </div>
        <p className="max-w-3xl">
          We&apos;re currently working on a complete guide with a lot of tips,
          tricks and hacks to empower you to reap all the fruits of this system.
          In the meantime you can read the&nbsp;
          <Link
            className="underline hover:text-primary"
            href="https://docs.paperless-ngx.com/"
          >
            official documentation here
          </Link>
          .
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mt-8">
          <SolutionCard
            icon={<PiFileArrowDownLight />}
            description="Our full guide (coming soon). Subscribe to get notified"
            url="/#newsletter"
          />
          <SolutionCard
            icon={<PiLightbulbFilamentLight />}
            description="More tips and tricks on our blog (coming soon)"
          />
          <SolutionCard
            icon={<PiArticleLight />}
            description="Curated articles about paperless-ngx"
            // url="/blog?tag=paperless"
          />
        </div>
      </div>

      <section className="px-4">
        <div className="container mx-auto p-8 lg:p-16 bg-sapphire-300 rounded-lg">
          <div className="flex gap-4 items-center mb-8">
            <PiMedalLight className="text-3xl text-primary" />
            <h2 className="text-4xl font-semibold">Our offer</h2>
          </div>
          <h3 className="text-3xl mb-4">
            We install the Paperless system for you.
          </h3>
          <p className="max-w-3xl">
            Book today and start profiting from the paperless system tomorrow!
            We take all the hustle and install paperless for you on a trusted
            GDPR conform server provider in one of two locations (US or EU).
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mt-8">
            <SolutionCard
              icon={<PiFileArrowDownLight />}
              description="Save time and start immediately"
            />
            <SolutionCard
              icon={<PiLightbulbFilamentLight />}
              description="Free test of the system here"
            />
            <SolutionCard
              icon={<PiArticleLight />}
              description="30 day full suport after the installation"
            />
            <SolutionCard
              icon={<PiArticleLight />}
              description="Receive our full video tutorial for free (regular price $99)"
            />
            <SolutionCard
              icon={<PiArticleLight />}
              description="Get access to our exclusive mastermind group"
            />
            <SolutionCard
              icon={<PiArticleLight />}
              description="10% discount on our tools"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16" id="pricing">
        <div className="flex gap-4 items-center mb-8">
          <PiCalculatorLight className="text-3xl text-primary" />
          <h2 className="text-4xl font-semibold">Pricing</h2>
        </div>
        <p className="max-w-3xl">
          One click payment with credit/debit card. After your purchase you will
          immediately receive the invoice in your email inbox. Within 24h we
          will start working on your inquiry.
        </p>
        <div className="mt-8">
          <PricingCard />
        </div>
      </div>
    </>
  );
}
