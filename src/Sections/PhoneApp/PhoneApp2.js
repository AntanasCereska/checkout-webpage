import styled from "styled-components";
import { Heading3 } from "../../Components/Headings/Heading3";

const PhoneApp2Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 2;
`;

const PhoneApp2PhotoWrapper = styled.div`
  @media (min-width: 1440px) {
    background: none;
  }
`;

const PhoneApp2Photo = styled.img`
  width: 100%;
  height: 100%;
`;

const PhoneApp2 = () => {
  return (
    <PhoneApp2Section>
      <Heading3>Start your yoga journey now!</Heading3>
      <PhoneApp2PhotoWrapper>
        <PhoneApp2Photo
          src={require(`../../images/others/phone_app.png`).default}
        />
      </PhoneApp2PhotoWrapper>
    </PhoneApp2Section>
  );
};

export default PhoneApp2;
