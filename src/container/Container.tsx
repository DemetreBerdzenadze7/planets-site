import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={` w-full max-w-300 mx-auto px-6 py-4 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
