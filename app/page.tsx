import { CheckedText } from '@/components/CheckedText';
import { DiscoverCard } from '@/components/DiscoverCard';
import { EmailSignup } from '@/components/EmailSignup';
import { LottieAnimation } from '@/components/LottieAnimation';
import { PartnerCard } from '@/components/PartnerCard';
import { ReviewCard } from '@/components/ReviewCard';
import { UseCaseCard } from '@/components/UseCaseCard';
import Image from 'next/image';
import Link from 'next/link';
import {
  PiAlienLight,
  PiFactoryLight,
  PiFileCloudLight,
  PiFilesLight,
  PiFlowArrowLight,
  PiPiggyBankLight,
  PiPlusSquareFill,
  PiRepeatLight,
  PiRobotLight,
  PiRocketLaunchLight,
  PiSmileyLight,
} from 'react-icons/pi';

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen relative">
        <div className="hero-content text-center flex flex-col">
          <div className="max-w-6xl">
            <h1 className="text-4xl sm:text-6xl font-bold leading-relaxed">
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
        <div className="-z-10 w-full opacity-30 absolute">
          <LottieAnimation src="/animations/matrix.lottie" />
        </div>
      </div>

      <section className="grid gap-4 items-center grid-cols-2 bg-base-100 px-4">
        <div className="order-2 md:order-1 col-span-2 md:col-span-1 flex flex-col items-center">
          <p className="text-xl mb-16 md:mt-16 xl:mt-0">
            We are proud to partner with
          </p>
          <div className="grid order-2 grid-cols-2 gap-4">
            <PartnerCard src="/images/CF_logo.webp" alt="Chris Feith Logo" />
            <PartnerCard src="/images/IMS_logo.webp" alt="Immoselfmade Logo" />
            <PartnerCard src="/images/ADP_logo.webp" alt="Aldeas de Paz Logo" />
            <PartnerCard
              src="/images/WV_logo.webp"
              alt="Wupperfeld Ventures Logo"
            />
          </div>
        </div>
        <div className="order-1 md:order-2 col-span-2 md:col-span-1">
          <LottieAnimation src="/animations/automation.lottie" />
        </div>
      </section>

      <section className="py-16 sm:py-32 px-4 bg-base-100">
        <h2 className="text-3xl sm:text-5xl leading-relaxed font-semibold text-center mb-12">
          Have you ever wondered how you can benefit from the wave of new
          technology like artificial intelligence?
        </h2>
        <div className="grid grid-cols-3 gap-12">
          <div
            className="tooltip tooltip-neutral col-span-3 lg:col-span-1 place-self-center"
            data-tip="Prompt: Imagine a mystical figure, with a striking resemblance to Dumbledore, wearing sunglasses, illuminated by a sea of neon green lights as he casts a spell with his wand, creating a stunning visual display."
          >
            <Image
              className="h-auto rounded-lg border-4 border-transparent hover:border-primary"
              src="/images/ai-magician.webp"
              alt="Ai generated image of a magician"
              width={400}
              height={600}
            />
          </div>
          <div className="flex flex-col col-span-3 lg:col-span-2">
            <h3 className="text-2xl sm:text-3xl leading-relaxed font-semibold mb-8">
              And how you can implement it in your business to make your life
              dramatically easier?
            </h3>
            <p className="mb-4">
              Today&apos;s software landscape enables you to do much more than
              just chatbots but it can be overwhelming and how do you know what
              works best for your business?
            </p>
            <p className="mb-8">
              This is why we build this portal. To bundle our continuous
              research and reveal real world use cases
            </p>
            <div className="flex flex-col gap-4">
              <CheckedText description="stay up to date with trends and tools" />
              <CheckedText description="identify use cases for your business" />
              <CheckedText description="implement solutions and boost your business" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-32 px-4 bg-base-100">
        <h2 className="text-3xl sm:text-5xl leading-relaxed font-semibold text-center mb-12">
          Learn based on our business use cases
        </h2>
        <p className="mb-12 text-center max-w-xl mx-auto leading-relaxed">
          We are a team of AI geeks, software engineers and entrepreneurs. We
          continuously browse the web and test the newest tools. We then combine
          this with our business mindset to create the solutions you&apos;ll
          find here.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <UseCaseCard
            icon={<PiRepeatLight />}
            title="Automations"
            description="Connect various apps with each other via APIs and safe tons of time"
          />
          <UseCaseCard
            icon={<PiFlowArrowLight />}
            title="Workflows"
            description="Create systematic approaches to your daily tasks, easy to follow routines for your employees"
          />
          <UseCaseCard
            icon={<PiFileCloudLight />}
            title="Digitization"
            description="Get rid of pen and paper, make every information accessible to all your team"
          />
          <UseCaseCard
            icon={<PiAlienLight />}
            title="AI Generation"
            description="Build in chat bots generating the content you need, generate images and videos"
          />
        </div>
      </section>

      <section>{/* TODO: Add blog preview */}</section>

      <section className="py-16 sm:py-32 px-4 bg-base-100 grid grid-cols-2 gap-12">
        <div className="flex flex-col col-span-2 lg:col-span-1">
          <h2 className="text-3xl sm:text-4xl leading-relaxed font-semibold mb-12">
            We seamlessly build and launch automation solutions
          </h2>
          <CheckedText description="In case you need an automation hand take a look at our tailored services" />
          <Link className="w-fit mt-8" href="/">
            <button className="btn btn-primary">Solutions</button>
          </Link>
        </div>
        <div
          className="tooltip tooltip-neutral col-span-2 lg:col-span-1 place-self-center"
          data-tip="Prompt: Hagrid from Harry Potter, full body from a distance in a dynamic position in a mystical forest, wearing sunglasses, surrounded by neon green lighting. He casts a spell that creates an army of small robots behind him, inspired by transformers."
        >
          <Image
            className="h-auto rounded-lg border-4 border-transparent hover:border-primary"
            src="/images/ai-hagrid-robots.webp"
            alt="Ai generated image of Hagrid casting robots"
            width={600}
            height={400}
          />
        </div>
      </section>

      <section className="py-16 sm:py-32 px-4 bg-base-100 grid grid-cols-2 gap-12">
        <div className="flex flex-col col-span-2 lg:col-span-1">
          <h2 className="text-3xl sm:text-4xl leading-relaxed font-semibold mb-12">
            Hear from our clients
          </h2>
          <p className="leading-relaxed">
            How our clients have transformed their business with us,
            digitalized, automated and so on.
          </p>
          <Link className="w-fit mt-8" href="/">
            <button className="btn btn-primary">About us</button>
          </Link>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <div className="grid sm:grid-cols-2 gap-4">
            <ReviewCard
              description="That is the best way to do it. So awesome. I can 100% recommend these guys. Helped me a lot in my business. Paperless is a game changer."
              avatarURL="/images/placeholder.webp"
              name="Michael Baylor"
              position="Chief Technology Officer"
            />
            <ReviewCard
              description="That is the best way to do it. So awesome. I can 100% recommend these guys. Helped me a lot in my business. Paperless is a game changer."
              avatarURL="/images/placeholder.webp"
              name="Michael Baylor"
              position="Chief Technology Officer"
            />
            <ReviewCard
              description="That is the best way to do it. So awesome. I can 100% recommend these guys. Helped me a lot in my business. Paperless is a game changer."
              avatarURL="/images/placeholder.webp"
              name="Michael Baylor"
              position="Chief Technology Officer"
            />
            <ReviewCard
              description="That is the best way to do it. So awesome. I can 100% recommend these guys. Helped me a lot in my business. Paperless is a game changer."
              avatarURL="/images/placeholder.webp"
              name="Michael Baylor"
              position="Chief Technology Officer"
            />
          </div>
        </div>
      </section>

      <section id="newsletter" className="py-16 sm:py-32 px-4 bg-base-100">
        <div className="grid grid-cols-3 gap-20 xl:gap-40 bg-secondary rounded-lg p-8 sm:p-12">
          <div className="col-span-3 md:col-span-2">
            <h2 className="text-3xl sm:text-4xl leading-relaxed font-semibold mb-8">
              Be the first to receive our industry specific trends
            </h2>
            <p className="leading-relaxed mb-8">
              Our goal is to help small and medium sized businesses to profit
              from the current wave of technology in the automation space and to
              make use of artificial intelligence
            </p>
            <div className="flex flex-col gap-4 mb-8">
              <CheckedText description="Never miss news, trends and special offers" />
              <CheckedText description="Bonus: get our guide for free" />
            </div>
            <EmailSignup />
          </div>
          <div className="col-span-3 md:col-span-1 place-self-center">
            <div className="rounded-lg border-primary border-2 shadow-xl bg-neutral px-8 py-32 relative">
              <p className="uppercase text-center font-bold">
                10 must have automation tools and how to use them
              </p>
              <PiPlusSquareFill className="text-5xl text-primary absolute -top-8 -left-8" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
