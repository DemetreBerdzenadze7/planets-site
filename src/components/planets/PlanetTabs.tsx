import { usePlanet } from "../../context/Context";
import { tabs } from "./planetType";

const PlanetTabs = () => {
  const { activeTab, setActiveTab } = usePlanet();
  return (
    <>
      <div className="flex items-center justify-between md:flex-col md:items-stretch md:gap-4">
        {tabs.map((tab) => (
          <button
            onClick={() => setActiveTab(tab)}
            key={tab}
            className={
              activeTab === tab
                ? "text-[12px] font-bold leading-[2.75] tracking-[2px] opacity-[0.5] md:bg-earth cursor-pointer text-white uppercase md:border md:border-white/25 md:px-6 md:py-2 md:text-left "
                : "text-[12px] font-bold leading-[2.75] tracking-[2px] opacity-[0.5] cursor-pointer text-white uppercase md:border md:border-white/25 md:px-6 md:py-2 md:text-left md:hover:bg-white/10"
            }
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
