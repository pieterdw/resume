export interface ISectionProps {
  title: string;
  children?: React.ReactNode;
}

export const Section: React.FC<ISectionProps> = ({ title, children }) => {
  return (
    <>
      <h2 className="mt-12 print:mt-8 text-l font-semibold text-cyan-700 uppercase tracking-wide pb-4 border-b-[1px] border-slate-200">
        {title}
      </h2>
      <div className="mt-2 mb-4">{children}</div>
    </>
  );
};
