import { BlogPreview } from '@/components/BlogPreview';
import { CheckedText } from '@/components/CheckedText';
import { DiscoverCard } from '@/components/DiscoverCard';
import { EmailSignup } from '@/components/EmailSignup';
import { LottieAnimation } from '@/components/LottieAnimation';
import { MotionWrapper } from '@/components/MotionWrapper';
import { PartnerLogo } from '@/components/PartnerLogo';
import { UseCaseCard } from '@/components/UseCaseCard';
import {
  fadeInAnimationVariant,
  itemAnimationVariant,
  staggerAnimationVariant,
} from '@/utils/animation';
import { RouteId } from '@/utils/route';
import Image from 'next/image';
import Link from 'next/link';
import {
  PiAlienLight,
  PiArrowBendDownRightLight,
  PiFactoryLight,
  PiFileCloudLight,
  PiFilesLight,
  PiFlowArrowLight,
  PiPiggyBankLight,
  PiRepeatLight,
  PiRobotLight,
  PiRocketLaunchLight,
  PiSmileyLight,
  PiTriangleLight,
} from 'react-icons/pi';

export default function Home() {
  return (
    <>
      <div className="container mx-auto hero min-h-screen relative">
        <div className="hero-content text-center flex flex-col">
          <MotionWrapper
            className="max-w-6xl"
            variants={fadeInAnimationVariant}
          >
            <h1 className="text-4xl sm:text-6xl font-bold sm:leading-relaxed bg-gradient-to-br from-slate-100 to-slate-300 text-transparent bg-clip-text">
              Scale and Digitalize your Business with Intelligent Automations
            </h1>
            <h2 className="text-2xl sm:text-4xl font-semibold sm:mt-16 my-8">
              Discover how you can
            </h2>
          </MotionWrapper>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            <MotionWrapper index={0} variants={staggerAnimationVariant}>
              <DiscoverCard icon={<PiFactoryLight />} title="Build systems" />
            </MotionWrapper>
            <MotionWrapper index={1} variants={staggerAnimationVariant}>
              <DiscoverCard
                icon={<PiRobotLight />}
                title="Automate processes"
              />
            </MotionWrapper>
            <MotionWrapper index={2} variants={staggerAnimationVariant}>
              <DiscoverCard
                icon={<PiFilesLight />}
                title="Eliminate pen & paper"
              />
            </MotionWrapper>

            <MotionWrapper index={3} variants={staggerAnimationVariant}>
              <DiscoverCard icon={<PiPiggyBankLight />} title="Reduce costs" />
            </MotionWrapper>

            <MotionWrapper index={4} variants={staggerAnimationVariant}>
              <DiscoverCard
                icon={<PiRocketLaunchLight />}
                title="Increase efficiency"
              />
            </MotionWrapper>

            <MotionWrapper index={5} variants={staggerAnimationVariant}>
              <DiscoverCard
                icon={<PiSmileyLight />}
                title="Boost employee happiness"
              />
            </MotionWrapper>
          </div>
          <MotionWrapper
            variants={fadeInAnimationVariant}
            className="flex flex-col sm:flex-row items-center justify-center pt-8"
          >
            <div className="flex flex-col">
              <p className="text-sm mr-16">We are proud to partner with</p>
              <PiArrowBendDownRightLight className="text-3xl" />
            </div>
            <div className="flex items-center gap-12">
              <PartnerLogo
                src="/images/IMS_logo.webp"
                alt="Immoselfmade Logo"
              />
              <PartnerLogo
                src="/images/WV_logo.webp"
                alt="Wupperfeld Ventures Logo"
              />
            </div>
          </MotionWrapper>
        </div>
        <div className="-z-10 w-full opacity-30 absolute">
          <LottieAnimation src="/animations/matrix.lottie" />
        </div>
      </div>

      <section className="py-32 sm:pb-64 px-4 bg-base-100 bg-blob-md bg-cover lg:bg-contain bg-center">
        <div className="container mx-auto">
          <MotionWrapper variants={itemAnimationVariant}>
            <h2 className="text-3xl sm:text-5xl font-semibold text-center mb-12 sm:leading-normal">
              Learn based on our business use cases
            </h2>
          </MotionWrapper>
          <MotionWrapper variants={itemAnimationVariant}>
            <p className="mb-12 text-center max-w-xl mx-auto leading-relaxed">
              We are a team of AI geeks, software engineers and entrepreneurs
              who are passionate about creating innovative solutions. We stay
              up-to-date with the latest technologies and tools and continuously
              test new products. We combine our technical expertise with our
              industry insights to create and publish solutions on
              DigitizerSpace that are both cutting-edge and simple to use.
            </p>
          </MotionWrapper>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <MotionWrapper index={0} variants={staggerAnimationVariant}>
              <UseCaseCard
                icon={<PiRepeatLight />}
                title="Automations"
                description="Connect various apps with each other via APIs and safe tons of time"
              />
            </MotionWrapper>
            <MotionWrapper index={1} variants={staggerAnimationVariant}>
              <UseCaseCard
                icon={<PiFlowArrowLight />}
                title="Workflows"
                description="Create systematic approaches to your daily tasks and easy to follow routines for your employees"
              />
            </MotionWrapper>
            <MotionWrapper index={2} variants={staggerAnimationVariant}>
              <UseCaseCard
                icon={<PiFileCloudLight />}
                title="Digitization"
                description="Eliminate pen and paper and make every information accessible to your team"
              />
            </MotionWrapper>
            <MotionWrapper index={3} variants={staggerAnimationVariant}>
              <UseCaseCard
                icon={<PiAlienLight />}
                title="AI Generation"
                description="Use artificial intelligence to generate the content you need like images and videos"
              />
            </MotionWrapper>
          </div>
        </div>
      </section>

      <section className="container mx-auto pb-16 sm:pb-32 px-4 bg-base-100">
        <MotionWrapper variants={itemAnimationVariant}>
          <h2 className="text-3xl sm:text-5xl font-semibold text-center mb-24 sm:leading-normal">
            Explore our blog
            <br></br>
            <span className="text-error lowercase text-xl">*Coming soon</span>
          </h2>
        </MotionWrapper>
        <MotionWrapper variants={fadeInAnimationVariant}>
          <BlogPreview />
        </MotionWrapper>
        {/* <Link href={RouteId.blog}> */}
        <button className="btn btn-primary mt-8" disabled>
          Learn more
          <PiTriangleLight className="rotate-90" />
        </button>
        {/* </Link> */}
      </section>

      <section className="py-32">
        <MotionWrapper
          variants={fadeInAnimationVariant}
          className="container mx-auto px-4"
        >
          <div className="grid grid-cols-2 gap-12">
            <div
              className="tooltip tooltip-neutral col-span-2 lg:col-span-1 w-fit"
              data-tip="Prompt: an astronaut floating in space with earth in the background, shrugging his arms, neon green lighting, cinematic."
            >
              <Image
                className="h-auto rounded-lg border-4 border-transparent hover:border-primary"
                src="/images/ai-astronaut-shrugging.webp"
                alt="Ai generated image of an astronaut shrugging his arms with earth in the background"
                width={512}
                height={512}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col col-span-2 lg:col-span-1 bg-blob-soft bg-cover bg-center">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:leading-normal">
                Benefit from the wave of new technology
              </h2>
              <h3 className="text-2xl mb-4 sm:leading-normal">
                and implement it in your business the right way
              </h3>
              <p className="mb-8">
                Today&apos;s software landscape enables you to do much more than
                just integrating chatbots but it can be overwhelming to know
                what works best for your business. DigitizerSpace is here to
                help you identify use cases.
              </p>
              <div className="flex flex-col gap-4">
                <CheckedText description="Stay up to date with trends and tools." />
                <CheckedText description="Identify use cases for your business." />
                <CheckedText description="Implement solutions that will boost your business." />
              </div>
            </div>
          </div>
        </MotionWrapper>
      </section>

      <section className="container mx-auto py-16 sm:py-32 px-4 bg-base-100 grid grid-cols-2 gap-12">
        <div className="flex flex-col col-span-2 lg:col-span-1 bg-blob-soft bg-cover bg-center">
          <MotionWrapper variants={itemAnimationVariant}>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:leading-normal">
              We seamlessly build and launch automation solutions
            </h2>
          </MotionWrapper>
          <MotionWrapper variants={itemAnimationVariant}>
            <h3 className="text-2xl mb-4 sm:leading-normal">
              In case you need an automation hand take a look at our tailored
              services
            </h3>
          </MotionWrapper>
          <div className="flex flex-col gap-4">
            <CheckedText description="Pre-built automation solutions that can be customized to fit your business needs." />
            <CheckedText description="Software products and tools that can help you automate your business processes." />
            <CheckedText description="Consulting service designed to help you identify areas where automation and digitization can improve your processes." />
          </div>
          <Link className="w-fit mt-8" href={RouteId.solutions}>
            <button className="btn btn-primary">
              Solutions
              <PiTriangleLight className="rotate-90" />
            </button>
          </Link>
        </div>
        <MotionWrapper
          variants={fadeInAnimationVariant}
          className="tooltip tooltip-neutral col-span-2 lg:col-span-1 place-self-center"
          data-tip="Prompt: a team of astronauts in black suits walking in a spaceship, neon green lighting, cinematic with lens flares, with DigitizerSpace written in large white letters on their suits."
        >
          <Image
            className="h-auto rounded-lg border-4 border-transparent hover:border-primary"
            src="/images/ai-team-digitizerspace.webp"
            alt="Ai generated image of astronauts resembling the team of DigitizerSpace"
            width={512}
            height={512}
            loading="lazy"
          />
        </MotionWrapper>
      </section>

      <section className="container mx-auto pt-16 sm:pt-32 px-4 bg-base-100 grid grid-cols-2 gap-12">
        <div className="col-span-2 lg:col-span-1 bg-blob-soft bg-cover bg-center">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="skeleton w-full h-48"></div>
            <div className="skeleton w-full h-48"></div>
            <div className="skeleton w-full h-48"></div>
            <div className="skeleton w-full h-48"></div>
            {/* <ReviewCard
              description="That is the best way to do it. So awesome. I can 100% recommend these guys. Helped me a lot in my business. Paperless is a game changer."
              avatarURL="/images/founder-portrait.webp"
              name="Michael Baylor"
              position="Chief Technology Officer"
            />
            <ReviewCard
              description="That is the best way to do it. So awesome. I can 100% recommend these guys. Helped me a lot in my business. Paperless is a game changer."
              avatarURL="/images/founder-portrait.webp"
              name="Michael Baylor"
              position="Chief Technology Officer"
            />
            <ReviewCard
              description="That is the best way to do it. So awesome. I can 100% recommend these guys. Helped me a lot in my business. Paperless is a game changer."
              avatarURL="/images/founder-portrait.webp"
              name="Michael Baylor"
              position="Chief Technology Officer"
            />
            <ReviewCard
              description="That is the best way to do it. So awesome. I can 100% recommend these guys. Helped me a lot in my business. Paperless is a game changer."
              avatarURL="/images/founder-portrait.webp"
              name="Michael Baylor"
              position="Chief Technology Officer"
            /> */}
          </div>
        </div>
        <div className="flex flex-col col-span-2 lg:col-span-1">
          <MotionWrapper variants={itemAnimationVariant}>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-12 sm:leading-normal">
              Hear from our clients
            </h2>
          </MotionWrapper>
          <MotionWrapper variants={itemAnimationVariant}>
            <p className="leading-relaxed">
              How our clients have transformed their business with us,
              streamlined processes, improved efficiency, saved costs and
              increased revenue.
            </p>
          </MotionWrapper>
          <Link className="w-fit mt-8" href={RouteId.about}>
            <button className="btn btn-primary">
              About us
              <PiTriangleLight className="rotate-90" />
            </button>
          </Link>
        </div>
      </section>

      <section
        id="newsletter"
        className="pt-32 pb-16 sm:pt-64 sm:pb-32 px-4 bg-base-100 bg-blob-lg bg-cover bg-top"
      >
        <MotionWrapper
          variants={fadeInAnimationVariant}
          className="container mx-auto grid grid-cols-3 gap-20 xl:gap-40 glass rounded-lg p-8 sm:p-12"
        >
          <div className="col-span-3 md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8 sm:leading-normal">
              Be the first to receive our industry specific trends
            </h2>
            <p className="leading-relaxed mb-8">
              Our goal is to help you leverage the latest automation
              technologies and artificial intelligence to run your business with
              a tailwind.
            </p>
            <div className="flex flex-col gap-4 mb-8">
              <CheckedText description="Never miss out on news, trends and special offers." />
              <CheckedText description="Receive our latest insights and updates." />
              {/* <CheckedText description="As a bonus, you will receive our guide for free." /> */}
            </div>
            <EmailSignup />
          </div>
          {/* <div className="col-span-3 md:col-span-1 place-self-center">
            <div className="rounded-lg border-primary border-2 shadow-md bg-neutral px-8 py-32 relative">
              <p className="uppercase text-center font-bold">
                10 must have automation tools and how to use them
              </p>
              <PiPlusSquareFill className="text-5xl text-primary absolute -top-8 -left-8" />
            </div>
          </div> */}
        </MotionWrapper>
      </section>
    </>
  );
}
