import Image from 'next/image';

export interface ReviewCardProps {
  description: string;
  avatarURL: string;
  name: string;
  position: string;
}

export const ReviewCard = ({
  description,
  avatarURL,
  name,
  position,
}: ReviewCardProps) => {
  return (
    <div className="flex flex-col bg-neutral rounded-lg shadow-md p-4">
      <p className="text-base mb-4">{description}</p>
      <div className="flex items-center">
        <Image
          className="rounded-full mr-4 w-auto"
          src={avatarURL}
          alt={`Avatar of ${name}`}
          width={40}
          height={40}
        />
        <div className="flex flex-col">
          <p className="font-bold">{name}</p>
          <p className="text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};
