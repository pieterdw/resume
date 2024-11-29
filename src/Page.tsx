export interface IPageProps {
  children?: React.ReactNode;
}

export const Page: React.FC<IPageProps> = ({ children }) => {
  return (
    <div className="md:mb-10 md:mx-5 lg:mb-20 lg:mx-auto lg:w-[1024px] md:rounded-2xl px-4 md:px-7 py-6 text-left text-slate-700 bg-white md:shadow-[5px_25px_80px_-15px_rgba(0,0,0,0.2)] print:shadow-none cursor-default print:p-0 print:mt-0 leading-relaxed print:leading-[1.35rem]">
      {children}
    </div>
  );
};
