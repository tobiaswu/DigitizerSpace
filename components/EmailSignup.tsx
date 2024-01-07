'use client';

import { RouteId } from '@/utils/route';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PiCheckCircleLight, PiWarningCircleLight } from 'react-icons/pi';
import { ZodError, z } from 'zod';

const schema = z.object({
  email: z.string().email().min(5),
});

export const EmailSignup = () => {
  const [message, setMessage] = useState<string>();
  const [error, setError] = useState<string>();

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get('email') as string;

    const parsed = schema.safeParse({
      email: email,
    });

    if (!parsed.success) {
      const msg: ZodError[] = JSON.parse(parsed.error.message);
      msg.forEach((item: ZodError) => {
        setError(item.message);
      });
    } else {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((data) => setMessage(data.message))
        .catch((err) => setError(err.error));
    }
  };

  useEffect(() => {
    if (message && error) {
      setError(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
  useEffect(() => {
    if (message && error) {
      setMessage(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <div>
      <form action={handleSubmit} className="sm:join">
        <input
          type="email"
          name="email"
          required
          className="input input-bordered input-primary w-full sm:w-72 join-item mb-4 sm:mb-0"
          placeholder="Email"
        />
        <button
          type="submit"
          className="btn btn-primary w-full sm:w-fit join-item"
        >
          Subscribe
        </button>
      </form>
      {message && (
        <div className="alert alert-info w-fit mt-4">
          <PiCheckCircleLight className="text-2xl" />
          <span>{message}</span>
        </div>
      )}
      {error && (
        <div className="alert alert-error w-fit mt-4">
          <PiWarningCircleLight className="text-2xl" />
          <span>{error}</span>
        </div>
      )}
      <p className="text-sm pt-8">
        By subscribing you agree with our&nbsp;
        <Link href={RouteId.privacy}>Privacy Policy</Link>&nbsp;and provide
        consent to receive updates from our company.
      </p>
    </div>
  );
};
