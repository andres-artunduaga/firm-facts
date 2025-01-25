"use client"
import React from "react";
import "./FirmFacts.scss";
import {Card} from "../Card/Card";
import Button from "../Button/Button";

const FirmFacts: React.FC = () => {
  const BASE_CLASS = "firm-facts";

  return (
    <div className={`${BASE_CLASS}`}>
      <div className={`${BASE_CLASS}__title`}>
        <span className={`${BASE_CLASS}__title-text`}>Firm Facts</span>
      </div>
      <div className={`${BASE_CLASS}__cards`}>
        <Card
          variant="default"
          style={{
            gridArea: "1 / 1 / 3 / 2",
            justifyContent: "center",
          }}
        >
          <Button variant="icon">This is a two line button
          that terminates with elipsis</Button>
        </Card>
        <Card
            variant="default"
            style={{
                gridArea: "1 / 2 / 2 / 3",
                justifyContent: "center",
            }}
        >
            <Button variant="icon">This is a two line button
            that terminates with elipsis</Button>
        </Card>
        <Card
            variant="default"
            style={{
                gridArea: "1 / 3 / 2 / 4",
                justifyContent: "center",
            }}
        >
            <Button >This is a one line button</Button>
        </Card>
        <Card
            variant="default"
            style={{
                gridArea: "1 / 4 / 2 / 5",
                justifyContent: "center",
            }}
        >
            <Button variant="icon">This is a two line button
            that terminates with elipsis</Button>
        </Card>
        <Card
            variant="default"
            style={{
                gridArea: "2 / 2 / 3 / 3",
            }}
        >
            <Button variant="icon">This is a two line button
            that terminates with elipsis</Button>
            <span className="label">
                Initial
            </span>
        </Card>
        <Card
            variant="default"
            style={{
                gridArea: "2 / 3 / 3 / 4",
            }}
        >
            <Button variant="icon" disabled>This is a two line button
            that terminates with elipsis</Button>
            <span className="label">
                Disabled
            </span>
        </Card>
        <Card
            variant="border"
            style={{
                gridArea: "2 / 4 / 3 / 5",
            }}
        >
            <Button variant="icon">This is a two line button
            that terminates with elipsis</Button>
            <span className="label">
                Hover
            </span>
        </Card>
      </div>
    </div>
  );
};

export default FirmFacts;
