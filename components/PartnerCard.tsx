import Image from 'next/image';

export interface PartnerCardProps {
  src: string;
  alt: string;
}

export const PartnerCard = ({ src, alt }: PartnerCardProps) => {
  return (
    <div className="bg-neutral p-4 rounded-lg h-40 w-40 flex items-center justify-center">
      <Image
        className="grayscale w-auto"
        src={src}
        alt={alt}
        width={80}
        height={80}
      />
    </div>
  );
};
