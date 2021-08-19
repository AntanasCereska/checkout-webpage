import styled from "styled-components";
import PlanCard from "../../Components/PlanCard";
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
  return (
    <Program1Section>
      <Program1Heading>
        Choose your plan and get{" "}
        <span
          style={{
            color: "#FF9B4E",
          }}
        >
          7 days free trial
        </span>
      </Program1Heading>

      <PlanCards>
        {PlansData.map((item) => (
          <PlanCard
            key={item.id}
            heading={item.heading}
            discount={item.discount}
            priceMonthly={item.priceMonthly}
            oldFullPrice={item.oldFullPrice}
            newFullPrice={item.newFullPrice}
            billedTerm={item.billedTerm}
          />
        ))}
      </PlanCards>

      <Button />

      <BottomMessage />
    </Program1Section>
  );
};

export default Program1;
