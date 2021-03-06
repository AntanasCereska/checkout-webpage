import styled from "styled-components";

const FreeTrialMessageSection = styled.p`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Paragraph = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #39353c;
`;

const CheckoutImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  width: 100%;
`;

const CheckoutImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Hyperlink = styled.a`
  text-decoration: none;
`;

const BottomMessage = () => {
  return (
    <FreeTrialMessageSection>
      <Paragraph>
        Your free trial will automatically become a paid subscription on the 8th
        day after you begin your trial. To cancel your subscription, please
        contact us at least 24 hours before the end of the trial period.
      </Paragraph>
      <Paragraph>
        By choosing a payment method you agree to the
        <Hyperlink href="_"> T&Cs </Hyperlink>
        and <Hyperlink href="_">Privacy Policy</Hyperlink>
      </Paragraph>
      <CheckoutImageWrapper>
        <CheckoutImage
          src={require(`../../images/others/checkout.png`).default}
        />
      </CheckoutImageWrapper>
    </FreeTrialMessageSection>
  );
};

export default BottomMessage;
