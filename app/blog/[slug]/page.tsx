import { BlogContentRef } from '@/components/BlogContentRef';
import { BlogPostAuthor } from '@/components/BlogPostAuthor';
import { BlogPostSectionTitle } from '@/components/BlogPostSectionTitle';
import { BlogPreviewSmall } from '@/components/BlogPreviewSmall';
import { PostShareButton } from '@/components/PostShareButton';
import Image from 'next/image';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <>
      <div className="relative">
        <div className="bg-neutral p-8">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="badge badge-secondary badge-lg rounded-lg mb-2">
                Trends
              </div>
              {/* TODO: add share modal */}
              <PostShareButton />
            </div>
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              The Paperless Office
            </h1>
            <p className="max-w-xl leading-relaxed">
              Summary about paperless, all you need to know to implement it
              successfully into your business operations. Learn how Chris F.
              digitalized his real estate business.
            </p>
            <div className="flex gap-8 mt-8 items-center">
              <p className="text-base self-end">Oct 19, 2023</p>
              <div className="badge badge-primary badge-md rounded-lg">
                5 mins read
              </div>
            </div>
          </div>
        </div>

        <Image
          className="container mx-auto md:absolute top-64 md:right-8 lg:right-16 xl:right-32 2xl:right-64 px-4 w-auto max-w-sm pt-8"
          src="https://docs.paperless-ngx.com/assets/logo_full_white.svg"
          alt="White logo of paperless-ngx"
          width={384}
          height={184}
          loading="lazy"
        />

        <div className="mx-auto max-w-4xl py-16 px-4">
          <h2 className="text-2xl font-semibold mb-4">Table of contents</h2>
          <ol className="list-decimal list-inside">
            <li>
              <BlogContentRef
                hash="section-1"
                title="What is paperless office?"
              />
            </li>
            <li>
              <BlogContentRef hash="section-2" title="What are the benefits?" />
            </li>
            <li>
              <BlogContentRef hash="section-3" title="Final thoughts" />
            </li>
          </ol>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4">
        <section id="section-1" className="pb-16">
          <BlogPostSectionTitle
            title="What is a paperless office?"
            hash="section-1"
          />
          <p className="mt-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </section>
        <section id="section-2" className="pb-16">
          <BlogPostSectionTitle
            title="What are the benefits?"
            hash="section-2"
          />
          <p className="mt-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <div className="flex flex-col py-4">
            <Image
              src="/images/ai-hagrid-robots.webp"
              alt="Placeholder image"
              width={600}
              height={200}
              className="rounded-lg"
            />
            <p className="text-sm text-neutral-400">Picture of ...</p>
          </div>
        </section>
      </div>

      <div className="flex gap-8 items-center justify-between mx-auto max-w-4xl px-4">
        <BlogPostAuthor
          name="Tobias Wupperfeld"
          avatarUrl="/images/founder-portrait.webp"
          twitterUrl="/"
          linkedinUrl="/"
        />
        {/* TODO: add post rating functionality */}
        {/* <BlogPostRating /> */}
      </div>

      {/* TODO: add comment section */}

      <div className="container mx-auto py-32 px-4">
        <BlogPreviewSmall />
      </div>
    </>
  );
}
