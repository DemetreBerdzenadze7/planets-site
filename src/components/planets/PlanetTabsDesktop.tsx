import { tabs } from "./planetType";

const PlanetTabsDesktop = () => {
  return (
    <div className="flex flex-col gap-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className="py-2 px-5 text-white text-[9px] font-bold font-menu leading-[2.75] tracking-[2px] uppercase border border-white/15 cursor-pointer lg:text-[13px] hover:bg-txt/25 "
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default PlanetTabsDesktop;
