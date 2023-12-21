import { ContactForm } from '@/components/ContactForm';
import { ContactOption } from '@/components/ContactOption';
import {
  PiChatDotsLight,
  PiMapPinLineLight,
  PiPhoneCallLight,
} from 'react-icons/pi';

export default function Contact() {
  return (
    <div className="container mx-auto bg-base-100">
      <div className="grid grid-cols-2 gap-12 px-4 py-16 min-h-screen place-items-center">
        <div className="col-span-2 lg:col-span-1">
          <h1 className="text-4xl sm:text-6xl font-bold leading-relaxed mb-12">
            Get in touch
          </h1>
          <p className="leading-relaxed mb-8">
            Got a project in mind? Let&apos;s talk, we&apos;d love to hear from
            you. Choose a contact option below or simply fill in the form and
            one of the team will be in touch!
          </p>
          <div className="flex flex-col gap-4">
            <ContactOption
              icon={<PiChatDotsLight />}
              optionLabel="Email"
              optionText="hello@aiaa.com"
              url="mailto:"
            />
            <ContactOption
              icon={<PiPhoneCallLight />}
              optionLabel="Call"
              optionText="Schedule a call here"
              url="https://calendly.com/tobiaswu"
            />
            <ContactOption
              icon={<PiMapPinLineLight />}
              optionLabel="Office"
              optionText="USA, Florida (global clients)"
            />
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1 bg-neutral rounded-lg p-8 h-fit">
          <h2 className="text-2xl sm:text-4xl leading-relaxed font-semibold text-center mb-8">
            Tell us about your project
          </h2>
          <p className="text-center mb-8">
            How can AIAA help you? One of the team will be in touch after you
            submit this form.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
