import styled from "styled-components";
import { useState } from "react";
import PlanCardOn from "../../Components/PlanCards/PlanCardOn";
import PlanCardOff from "../../Components/PlanCards/PlanCardOff";
import Button from "../../Components/Button";
import BottomMessage from "./BottomMessage";

import { PlansData } from "../../data/PlansData";

const Program1Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 343px;
`;

const Program1Heading = styled.h3`
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
`;

const PlanCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Program1 = () => {
  const [selectedPlan, setSelectedPlan] = useState(0);

  const togglePlan = (i) => {
    if (selectedPlan === i) {
      return setSelectedPlan(i);
    }
    setSelectedPlan(i);
  };

  return (
    <Program1Section>
      <Program1Heading>
        Choose your plan and get
        <span
          style={{
            color: "#FF9B4E",
          }}
        >
          {" "}
          7 days free trial{" "}
        </span>
      </Program1Heading>

      {/* this is not the best way to do a conditional rendering*/}
      {/*  better way would be just to apply different styles by passing state to child component*/}
      <PlanCards>
        {PlansData.map((item, i) => {
          if (selectedPlan === i) {
            return (
              <div onClick={() => togglePlan(i)}>
                <PlanCardOn
                  key={item.id}
                  heading={item.heading}
                  discount={item.discount}
                  priceMonthly={item.priceMonthly}
                  oldFullPrice={item.oldFullPrice}
                  newFullPrice={item.newFullPrice}
                  billedTerm={item.billedTerm}
                />
              </div>
            );
          } else {
            return (
              <div onClick={() => togglePlan(i)}>
                <PlanCardOff
                  key={item.id}
                  heading={item.heading}
                  discount={item.discount}
                  priceMonthly={item.priceMonthly}
                  oldFullPrice={item.oldFullPrice}
                  newFullPrice={item.newFullPrice}
                  billedTerm={item.billedTerm}
                />
              </div>
            );
          }
        })}
      </PlanCards>
      <Button />
      <BottomMessage />
    </Program1Section>
  );
};

export default Program1;
