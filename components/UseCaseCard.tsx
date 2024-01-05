export interface UseCaseCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const UseCaseCard = ({ icon, title, description }: UseCaseCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg p-4 items-center text-center glass">
      <div className="flex items-center justify-center p-4">
        <span className="text-3xl text-primary">{icon}</span>
      </div>
      <h3 className="text-3xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
};
