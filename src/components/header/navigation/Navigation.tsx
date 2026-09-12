import Container from "../../../container/Container";
import { useState } from "react";
import Menu from "./menu/Menu";
import { planetsNames } from "./menu/menuTypes";
import { Link } from "react-router";

const Navigation = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <nav>
      <Container className="md:px-10">
        <div className="flex items-center justify-between md:flex-col lg:flex-row lg:justify-between">
          <h1 className="text-white uppercase text-[28px] leading-[1.3] tracking-[-1px]">
            the planets
          </h1>
          <button
            className="cursor-pointer md:hidden"
            onClick={() => setMenu(!menu)}
          >
            <img src="/images/icon-hamburger.svg" alt="Menu" />
          </button>
          <div className="hidden md:flex md:items-center md:justify-between md:w-full md:mt-8 lg:w-[50%] lg:mt-0">
            {planetsNames.map((planet) => (
              <Link
                key={planet.planetName}
                to={planet.planetName}
                className="text-white opacity-[0.75] font-menu text-[11px] font-bold leading-[2.25] uppercase tracking-[1px]"
              >
                {planet.planetName}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      {menu && (
        <div className="fixed inset-0 top-20 bg-[#070724] z-50 md:hidden">
          <Menu setMenu={setMenu} />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
