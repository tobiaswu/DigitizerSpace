import Link from 'next/link';

export interface ContactOptionProps {
  icon: JSX.Element;
  optionLabel: string;
  optionText: string;
  url?: string;
}

export const ContactOption = ({
  icon,
  optionLabel,
  optionText,
  url,
}: ContactOptionProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-neutral rounded-lg p-4 flex items-center justify-center">
        <span className="text-5xl text-primary">{icon}</span>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-base text-secondary">{optionLabel}</p>
        {url ? (
          <Link
            className="hover:text-primary underline underline-offset-8"
            href={url}
          >
            <p>{optionText}</p>
          </Link>
        ) : (
          <p>{optionText}</p>
        )}
      </div>
    </div>
  );
};
