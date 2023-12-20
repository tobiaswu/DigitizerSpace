export interface UseCaseCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const UseCaseCard = ({ icon, title, description }: UseCaseCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg hover:bg-neutral p-4 items-center text-center">
      <div className="flex items-center justify-center bg-neutral rounded-lg p-2 w-14 h-14">
        <span className="text-3xl text-primary">{icon}</span>
      </div>
      <h3 className="text-3xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
};
