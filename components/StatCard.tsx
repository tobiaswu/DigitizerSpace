export interface StatCardProps {
  icon: JSX.Element;
  title: string;
  value: string;
  description?: string;
}

export const StatCard = ({
  icon,
  title,
  value,
  description,
}: StatCardProps) => {
  return (
    <div className="stat glass rounded-lg">
      <div className="stat-figure text-primary text-3xl">{icon}</div>
      <div className="stat-title text-base-content">{title}</div>
      <div className="stat-value text-primary">{value}</div>
      <div className="stat-desc text-base-content">{description}</div>
    </div>
  );
};
