import Container from "../../../container/Container";

const Navigation = () => {
  return (
    <nav>
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="text-white uppercase text-[28px] leading-[1.3] tracking-[-1px]">
            the planets
          </h1>
          <button className="cursor-pointer">
            <img src="/images/icon-hamburger.svg" alt="Menu" />
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
