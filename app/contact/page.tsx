'use client';

import { ContactForm } from '@/components/ContactForm';
import { ContactOption } from '@/components/ContactOption';
import { motion } from 'framer-motion';
import {
  PiEnvelopeLight,
  PiMapPinLineLight,
  PiPhoneCallLight,
} from 'react-icons/pi';
import transitions from '@/public/transitions.json';

export default function Contact() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-12 px-4 py-16 min-h-screen place-items-center">
        <div className="col-span-2 lg:col-span-1 bg-blob-soft bg-cover lg:bg-contain bg-top">
          <motion.h1
            variants={transitions.item}
            initial="hidden"
            whileInView="show"
            className="text-4xl sm:text-6xl font-bold mb-12 sm:leading-relaxed"
          >
            Get in touch
          </motion.h1>
          <motion.p
            variants={transitions.item}
            initial="hidden"
            whileInView="show"
            className="leading-relaxed mb-8"
          >
            Got a project in mind? Let&apos;s talk, we&apos;d love to hear from
            you. Choose a contact option below or simply fill in the form and
            one of the team will be in touch!
          </motion.p>
          <motion.div
            variants={transitions.container}
            initial="hidden"
            whileInView="show"
            className="flex flex-col gap-4"
          >
            <ContactOption
              icon={<PiEnvelopeLight />}
              optionLabel="Email"
              optionText="hello@digitizerspace.com"
              url="mailto:hello@digitizerspace.com"
            />
            <ContactOption
              icon={<PiPhoneCallLight />}
              optionLabel="Call"
              optionText="Schedule a call here"
              url="https://calendly.com/tobiaswu/1-1-meeting-clone"
            />
            <ContactOption
              icon={<PiMapPinLineLight />}
              optionLabel="Office"
              optionText="USA, Florida (global clients)"
            />
          </motion.div>
        </div>

        <motion.div
          variants={transitions.fadeIn}
          initial="hidden"
          whileInView="show"
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
        </motion.div>
      </div>
    </div>
  );
}
