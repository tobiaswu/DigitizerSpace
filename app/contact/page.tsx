import { ContactForm } from '@/components/ContactForm';
import { ContactOption } from '@/components/ContactOption';
import {
  PiEnvelopeLight,
  PiMapPinLineLight,
  PiPhoneCallLight,
} from 'react-icons/pi';
import type { Metadata } from 'next';
import { MotionWrapper } from '@/components/MotionWrapper';
import {
  fadeInAnimationVariant,
  itemAnimationVariant,
  staggerAnimationVariant,
} from '@/utils/animation';

export const metadata: Metadata = {
  title: 'Contact DigitizerSpace today - we help you automating',
  description:
    '▷ Contact DigitizerSpace by email or contact form. Get immediate support with automating & digitalizing your project. ✓ Quick response time. ✓ Get in touch now!',
};

export default function Contact() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-12 px-4 py-16 min-h-screen place-items-center">
        <div className="col-span-2 lg:col-span-1 bg-blob-soft bg-cover lg:bg-contain bg-top">
          <MotionWrapper variants={itemAnimationVariant}>
            <h1 className="text-4xl sm:text-6xl font-bold mb-12 sm:leading-relaxed">
              Get in touch
            </h1>
          </MotionWrapper>
          <MotionWrapper variants={itemAnimationVariant}>
            <p className="leading-relaxed mb-8">
              Got a project in mind? Let&apos;s talk, we&apos;d love to hear
              from you. Choose a contact option below or simply fill in the form
              and one of the team will be in touch!
            </p>
          </MotionWrapper>
          <div className="flex flex-col gap-4">
            <MotionWrapper index={0} variants={staggerAnimationVariant}>
              <ContactOption
                icon={<PiEnvelopeLight />}
                optionLabel="Email"
                optionText="hello@digitizerspace.com"
                url="mailto:hello@digitizerspace.com"
              />
            </MotionWrapper>
            <MotionWrapper index={1} variants={staggerAnimationVariant}>
              <ContactOption
                icon={<PiPhoneCallLight />}
                optionLabel="Call"
                optionText="Schedule a call here"
                url="https://calendly.com/tobiaswu/1-1-meeting-clone"
              />
            </MotionWrapper>
            <MotionWrapper index={2} variants={staggerAnimationVariant}>
              <ContactOption
                icon={<PiMapPinLineLight />}
                optionLabel="Office"
                optionText="USA, Florida (global clients)"
              />
            </MotionWrapper>
          </div>
        </div>

        <MotionWrapper
          variants={fadeInAnimationVariant}
          className="col-span-2 lg:col-span-1 bg-neutral rounded-lg p-8 h-fit shadow-md"
        >
          <h2 className="text-2xl sm:text-4xl font-semibold text-center mb-8 sm:leading-normal">
            Tell us about your project
          </h2>
          <p className="text-center mb-8">
            How can DigitizerSpace help you? One of the team will be in touch
            after you submit this form.
          </p>
          <ContactForm />
        </MotionWrapper>
      </div>
    </div>
  );
}
