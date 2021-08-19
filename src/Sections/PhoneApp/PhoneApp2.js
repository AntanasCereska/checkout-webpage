import styled from "styled-components";
import PhoneAppImage from "../../images/others/phone_app.png";

const PhoneApp2Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 343px;
`;

const PhoneApp2SectionHeading = styled.h2`
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: #22222c;
  @media (min-width: 1440px) {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
  }
`;

const PhoneApp2PhotoWrapper = styled.div`
  width: 343px;
  height: 366px;
`;

const PhoneApp2Photo = styled.img`
  background: url(${PhoneAppImage}) no-repeat center;
  width: 100%;
  height: 100%;
`;

const PhoneApp2 = () => {
  return (
    <PhoneApp2Section>
      <PhoneApp2SectionHeading>
        Start your yoga journey now!
      </PhoneApp2SectionHeading>
      <PhoneApp2PhotoWrapper>
        <PhoneApp2Photo />
      </PhoneApp2PhotoWrapper>
    </PhoneApp2Section>
  );
};

export default PhoneApp2;
