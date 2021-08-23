import styled from "styled-components";

//Whole section
const HeadingDiscountSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 56px;
  background-color: #90caf9;
`;

const PricetagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

const PricetagIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const DiscountText = styled.p`
  font-size: 15px;
  color: #ffffff;
`;

const HeadingDiscount = () => {
  return (
    <HeadingDiscountSection>
      <PricetagWrapper>
        <PricetagIcon
          src={require(`../../images/icons/pricetag.png`).default}
        />
      </PricetagWrapper>
      <DiscountText>50% discount only valid for 00:15:49</DiscountText>
    </HeadingDiscountSection>
  );
};

export default HeadingDiscount;
