import {
  PiCheckCircleLight,
  PiInfoLight,
  PiWarningCircleLight,
} from 'react-icons/pi';

export interface PricingCardProps {}

export const PricingCard = ({}: PricingCardProps) => {
  return (
    <div className="card max-w-md bg-neutral rounded-lg shadow-md border-4 border-primary">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h3 className="card-title text-3xl text-primary">
            The Paperless System
          </h3>
          <div className="badge badge-error w-fit sm:w-40 h-fit">
            Only 2 seats left
          </div>
        </div>
        <p className="py-4">Perfect to get started</p>
        <div className="flex w-fit gap-2 items-center">
          <p className="text-4xl font-semibold">$---</p>
          <div className="flex flex-col">
            <p className="text-xl line-through text-neutral-400 font-semibold">
              $----
            </p>
            <p className="text-error">Beta phase 80% off</p>
          </div>
        </div>
        <p className="text-base">One-time payment</p>
        <div className="flex flex-col gap-2 pt-4">
          <div className="flex items-center gap-2 w-fit">
            <PiCheckCircleLight className="text-primary" />
            <p>Paperless installed on US or EU server</p>
            <PiInfoLight className="text-info" />
          </div>
          <div className="flex items-center gap-2 w-fit">
            <PiCheckCircleLight className="text-primary" />
            <p>Integration of your scanner</p>
            <PiInfoLight className="text-info" />
          </div>
          <div className="flex items-center gap-2">
            <PiCheckCircleLight className="text-primary" />
            <p>30 day full support</p>
          </div>
          <div className="flex items-center gap-2">
            <PiCheckCircleLight className="text-primary" />
            <p>Full video tutorial included</p>
          </div>
          <div className="flex items-center gap-2">
            <PiCheckCircleLight className="text-primary" />
            <p>Access to exclusive mastermind</p>
          </div>
          <div className="flex items-center gap-2">
            <PiCheckCircleLight className="text-primary" />
            <p>10% coupon on all tools</p>
          </div>
          <div className="flex items-center gap-2">
            <PiWarningCircleLight className="text-warning" />
            <p>Not included: server costs (ca. $--/month)</p>
          </div>
        </div>
      </div>
      <div className="card-actions justify-center px-4 pb-4">
        <button className="btn btn-primary capitalize w-full">
          Launching soon
        </button>
      </div>
    </div>
  );
};
