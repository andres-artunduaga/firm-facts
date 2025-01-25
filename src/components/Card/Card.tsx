"use client"
import React, { createContext, PropsWithChildren, useContext } from "react";
import "./Card.scss";

interface CardProps {
  variant?: "default" | "border";
  style?: React.CSSProperties;
}

interface CardContextProps {
  isHovered?: boolean;
}

const CardContext = createContext<CardContextProps | undefined>(undefined);

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};

export const Card: React.FC<PropsWithChildren<CardProps>> = ({
  variant,
  style,
  children,
}) => {
  const BASE_CLASS = "card";
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleOnMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <div style={style} className={`${BASE_CLASS} ${variant}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleOnMouseLeave}>
      <CardContext.Provider value={{ isHovered }}>
        {children}
      </CardContext.Provider>
    </div>
  );
};
