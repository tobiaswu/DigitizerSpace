import Link from 'next/link';

export interface SolutionCardProps {
  icon: JSX.Element;
  description: string;
  url?: string;
}

export const SolutionCard = ({ icon, description, url }: SolutionCardProps) => {
  return (
    <>
      {url ? (
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <div className="bg-neutral rounded-lg h-full w-full flex flex-col justify-center gap-8 p-8 border-4 border-transparent hover:border-primary">
            <span className="text-3xl text-primary">{icon}</span>
            <p className="font-semibold">{description}</p>
          </div>
        </Link>
      ) : (
        <div className="bg-neutral rounded-lg h-full w-full flex flex-col justify-center gap-8 p-8">
          <span className="text-3xl text-primary">{icon}</span>
          <p className="font-semibold">{description}</p>
        </div>
      )}
    </>
  );
};
