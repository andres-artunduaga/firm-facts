"use client";
import React, { createContext, PropsWithChildren, useContext } from "react";
import "./Card.scss";

interface CardProps {
  variant?: "default" | "border";
  style?: React.CSSProperties;
  disabled?: boolean;
}

interface CardContextProps {
  isHovered?: boolean;
  isDisabled?: boolean;
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
  disabled = false,
  children,
}) => {
  const BASE_CLASS = "card";
  const [isHovered, setIsHovered] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(false);

  React.useEffect(() => {
    setIsDisabled(disabled);
  }, [disabled]);

  const handleMouseEnter = () => {
    if (isDisabled) return;
    setIsHovered(true);
  };

  const handleOnMouseLeave = () => {
    if (isDisabled) return;
    setIsHovered(false);
  };

  return (
    <div
      style={style}
      className={`${BASE_CLASS} ${ !isDisabled ? variant : ''} ${isHovered ? "hovered" : ""} ${
        isDisabled ? "disabled" : ""
      }
    `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <CardContext.Provider value={{ isHovered }}>
        {children}
      </CardContext.Provider>
    </div>
  );
};
