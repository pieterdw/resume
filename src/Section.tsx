export interface ISectionProps {
  title: string;
  children?: React.ReactNode;
}

export const Section: React.FC<ISectionProps> = ({ title, children }) => {
  return (
    <>
      <h2 className="mt-10 text-l font-semibold text-cyan-700 uppercase tracking-wide pb-3 border-b-[1px] border-slate-200">
        {title}
      </h2>
      <div className="my-4">{children}</div>
    </>
  );
};
