export interface DiscoverCardProps {
  icon: JSX.Element;
  title: string;
}

export const DiscoverCard = ({ icon, title }: DiscoverCardProps) => {
  return (
    <div className="card w-48 rounded-lg bg-neutral shadow-xl hover:bg-primary hover:text-neutral">
      <div className="card-body justify-center items-center">
        <span className="icon text-5xl text-primary">{icon}</span>
        <h3 className="card-title uppercase text-lg mt-4">{title}</h3>
      </div>
    </div>
  );
};
