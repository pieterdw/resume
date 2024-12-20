export interface IProjectFilterButtonProps {
  text: string;
  onClick: () => void;
  isActive: boolean;
}

export const ProjectFilterButton: React.FC<IProjectFilterButtonProps> = ({
  text,
  onClick,
  isActive,
}) => {
  let className =
    "px-3 py-1 mr-2 mb-2 text-sm rounded-2xl whitespace-nowrap cursor-pointer select-none ";
  if (isActive) {
    className += "bg-slate-200";
  } else {
    className += "bg-slate-50 hover:bg-slate-200 hover:text-slate-800";
  }
  return (
    <a onClick={onClick} className={className}>
      {text}
    </a>
  );
};
