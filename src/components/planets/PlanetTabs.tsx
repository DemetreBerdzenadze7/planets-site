import { tabs } from "./planetType";

const PlanetTabs = () => {
  return (
    <div className="flex items-center justify-between px-6 md:hidden">
      {tabs.map((tab) => (
        <button
          key={tab}
          className="text-[12px] font-bold leading-[2.75] tracking-[2px] opacity-[0.5] text-white uppercase"
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default PlanetTabs;
