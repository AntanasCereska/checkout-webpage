import styled from "styled-components";

const PlanCardSection = styled.div`
  margin: auto;
  border-radius: 16px;
  padding: 16px;
  border: 2px solid #ff9b4e;
  width: 100%;
`;

const PlanCardTermWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  width: 100%;
`;

const PlanCardTerm = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const DisplayCardDiscountPercentagePersentageWrapper = styled.div`
  background-color: #ffe082;
  border-radius: 6px;
  font-weight: bold;
`;

const DisplayCardDiscountPercentage = styled.div`
  font-size: 15px;
  margin: 3px 8px;
`;

const PlanCardPrice = styled.p`
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
`;

const PlanCardDiscountFlat = styled.p`
  font-size: 14px;
`;

const PlanCard = ({
  id,
  heading,
  discount,
  priceMonthly,
  oldFullPrice,
  newFullPrice,
  billedTerm,
}) => {
  return (
    <PlanCardSection>
      <PlanCardTermWrapper>
        <PlanCardTerm>{heading}</PlanCardTerm>
        <DisplayCardDiscountPercentagePersentageWrapper>
          {discount ? (
            <DisplayCardDiscountPercentage>
              {discount}
            </DisplayCardDiscountPercentage>
          ) : null}
        </DisplayCardDiscountPercentagePersentageWrapper>
      </PlanCardTermWrapper>
      <PlanCardPrice>
        ${priceMonthly} <span style={{ fontSize: "14px", fontWeight: "normal" }}> / month</span>
      </PlanCardPrice>
      <PlanCardDiscountFlat>
        <span style={{ textDecoration: "line-through" }}>
          {oldFullPrice ? <>{oldFullPrice}</> : null}
        </span>
        {newFullPrice ? (
          <span style={{ color: "#FF9B4E", fontWeight: "bold" }}> ${newFullPrice} </span>
        ) : null}
        {billedTerm ? <>{billedTerm}</> : null}
      </PlanCardDiscountFlat>{" "}
    </PlanCardSection>
  );
};

export default PlanCard;
