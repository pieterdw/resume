export interface ISectionProps {
  title: string;
  children?: React.ReactNode;
}

export const Section: React.FC<ISectionProps> = ({ title, children }) => {
  return (
    <>
      <h2 className="mt-6 text-l font-semibold text-cyan-700 uppercase tracking-wide pb-2 border-b-[1px] border-slate-200">
        {title}
      </h2>
      <div className="my-2">{children}</div>
    </>
  );
};
