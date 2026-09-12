import { planetsNames } from "./menuTypes";
import { Link } from "react-router";

interface Menu {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ setMenu }: Menu) => {
  return (
    <div className="h-full max-w-3xl flex flex-col z-10 gap-6 p-6">
      {planetsNames.map((planet) => (
        <div key={planet.planetName}>
          <Link
            to={planet.planetName}
            onClick={() => setMenu(false)}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-6">
              <div className={`rounded-[50%] ${planet.color} w-5 h-5`}></div>
              <span className="text-white text-[15px] font-bold leading-[1.65] tracking-[1.35px] uppercase font-menu">
                {planet.planetName}
              </span>
            </div>
            <img src="/images/icon-chevron.svg" alt="Chevron" />
          </Link>
          <hr className="border-white opacity-[0.1] mt-5" />
        </div>
      ))}
    </div>
  );
};

export default Menu;
