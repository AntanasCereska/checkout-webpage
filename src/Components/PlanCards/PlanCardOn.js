import styled from "styled-components";
import { Heading2 } from "../../Components/Headings/Heading2";
import { Heading5 } from "../../Components/Headings/Heading5";

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

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeftDiscountWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  margin-bottom: 4px;
`;

const LeftDiscount = styled.div`
  background-color: #ffe082;
  border-radius: 6px;
  font-weight: bold;
`;

const DisplayCardDiscountPercentage = styled.div`
  font-size: 15px;
  margin: 3px 8px;
`;

const LeftDiscountFlat = styled.p`
  font-size: 14px;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

//Checkbox wrapper
const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

//checkbox image
const Checkbox = styled.img`
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
      <LeftSection>
        <LeftDiscountWrapper>
          <Heading5>{heading}</Heading5>
          <LeftDiscount>
            {discount ? (
              <DisplayCardDiscountPercentage>
                {discount}
              </DisplayCardDiscountPercentage>
            ) : null}
          </LeftDiscount>
        </LeftDiscountWrapper>
        <Heading2>
          ${priceMonthly}
          <span style={{ fontSize: "14px", fontWeight: "normal" }}>
            / month
          </span>
        </Heading2>
        <LeftDiscountFlat>
          <span style={{ textDecoration: "line-through" }}>
            {oldFullPrice ? <>{oldFullPrice}&nbsp;</> : null}
          </span>
          {newFullPrice ? (
            <span style={{ color: "#FF9B4E", fontWeight: "bold" }}>
              ${newFullPrice}&nbsp;
            </span>
          ) : null}
          {billedTerm ? <>{billedTerm}</> : null}
        </LeftDiscountFlat>{" "}
      </LeftSection>
      <RightSection>
        <CheckboxWrapper>
          <Checkbox src={require(`../../images/icons/check_on.png`).default} />
        </CheckboxWrapper>
      </RightSection>
    </PlanCardSection>
  );
};

export default PlanCard;
