"use client";
import React, { FC, PropsWithChildren } from "react";
import "./Container.scss";

interface ContainerProps {
  variant?: "default" | "fluid";
}

const Container: FC<PropsWithChildren<ContainerProps>> = ({ children }) => {
  const BASE_CLASS = "container";

  return <div className={`${BASE_CLASS}`}>{children}</div>;
};

export default Container;
