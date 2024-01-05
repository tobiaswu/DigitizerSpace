import { PiChecksLight } from 'react-icons/pi';

export interface CheckedTextProps {
  description: string;
  isDark?: boolean;
}

export const CheckedText = ({
  description,
  isDark = false,
}: CheckedTextProps) => {
  return (
    <div className="flex gap-4 items-center">
      <div
        className={`${
          !isDark && 'bg-neutral'
        } rounded-lg p-4 flex items-center justify-center`}
        data-theme="darkTheme"
      >
        <PiChecksLight className="text-3xl text-primary" />
      </div>
      <p className="text-left">{description}</p>
    </div>
  );
};
