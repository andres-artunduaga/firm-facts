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
          }}
        >
          <Button variant="default">This is a one line button</Button>
        </Card>
        <Card
            variant="default"
            style={{
                gridArea: "1 / 2 / 2 / 3",
            }}
        >
            Card
        </Card>
        <Card
            variant="default"
            style={{
                gridArea: "1 / 3 / 2 / 4",
            }}
        >
            <Button variant="default">This is a one line button</Button>
        </Card>
        <Card
            variant="default"
            style={{
                gridArea: "1 / 4 / 2 / 5",
            }}
        >
            <Button variant="default">This is a one line button</Button>
        </Card>
        <Card
            variant="default"
            style={{
                gridArea: "2 / 2 / 3 / 3",
            }}
        >
            <Button variant="default">This is a one line button</Button>
        </Card>
        <Card
            variant="default"
            style={{
                gridArea: "2 / 3 / 3 / 4",
            }}
        >
            <Button variant="default">This is a one line button</Button>
        </Card>
        <Card
            variant="default"
            style={{
                gridArea: "2 / 4 / 3 / 5",
            }}
        >
            <Button variant="default">This is a one line button</Button>
        </Card>
      </div>
    </div>
  );
};

export default FirmFacts;
