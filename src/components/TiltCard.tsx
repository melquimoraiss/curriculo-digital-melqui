import React, { PropsWithChildren } from "react";
import { useTilt } from "../hooks/useTilt";

interface TiltCardProps {
  className?: string;
}

const TiltCard: React.FC<PropsWithChildren<TiltCardProps>> = ({
  children,
  className = "",
}) => {
  const tiltRef = useTilt();

  return (
    <div ref={tiltRef} className={`box ${className}`}>
      {children}
    </div>
  );
};

export default TiltCard;
