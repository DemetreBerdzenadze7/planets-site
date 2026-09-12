import { tabs } from "./planetType";

const PlanetTabs = () => {
  return (
    <>
      <div className="flex items-center justify-between md:flex-col md:items-stretch md:gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className="text-[12px] font-bold leading-[2.75] tracking-[2px] opacity-[0.5] cursor-pointer text-white uppercase md:border md:border-white/25 md:px-6 md:py-2 md:text-left md:hover:bg-white/10"
          >
            {tab}
          </button>
        ))}
      </div>
      <hr className="border-white opacity-[0.2] mt-1.5 -mx-6 md:hidden" />
    </>
  );
};

export default PlanetTabs;
