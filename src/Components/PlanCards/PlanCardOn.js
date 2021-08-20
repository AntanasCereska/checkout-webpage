import styled from "styled-components";

const PlanCardSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 16px;
  padding: 16px;
  border: 2px solid #ff9b4e;
  width: 100%;
  cursor: pointer;
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

const PlanCardSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlanCardSectionRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PlanCardSectionRightCheckboxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

const PlanCardSectionRightCheckbox = styled.img`
  width: 24px;
  height: 24px;
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
      <PlanCardSectionLeft>
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
          ${priceMonthly}
          <span style={{ fontSize: "14px", fontWeight: "normal" }}>
            {" "}
            / month
          </span>
        </PlanCardPrice>
        <PlanCardDiscountFlat>
          <span style={{ textDecoration: "line-through" }}>
            {oldFullPrice ? <>{oldFullPrice}&nbsp;</> : null}
          </span>
          {newFullPrice ? (
            <span style={{ color: "#FF9B4E", fontWeight: "bold" }}>
              ${newFullPrice}&nbsp;
            </span>
          ) : null}
          {billedTerm ? <>{billedTerm}</> : null}
        </PlanCardDiscountFlat>{" "}
      </PlanCardSectionLeft>
      <PlanCardSectionRight>
        <PlanCardSectionRightCheckboxWrapper>
          <PlanCardSectionRightCheckbox
            src={require(`../../images/icons/check_on.png`).default}
          />
        </PlanCardSectionRightCheckboxWrapper>
      </PlanCardSectionRight>
    </PlanCardSection>
  );
};

export default PlanCard;
