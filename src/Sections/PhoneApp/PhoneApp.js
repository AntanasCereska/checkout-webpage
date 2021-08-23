import styled from "styled-components";
import PhoneApp1 from "./PhoneApp1";
import PhoneApp2 from "./PhoneApp2";
import Accent from "../../images/others/accent.png";

const PhoneAppSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 343px;
  @media (min-width: 1440px) {
    width: 734px;
    flex-direction: row;
    gap: 32px;
    flex-direction: row-reverse;
  }
`;

const PhoneApp2PhotoWrapper = styled.div`
  background-image: url(${Accent});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media (min-width: 1440px) {
    background: none;
  }
`;

const PhoneApp = () => {
  return (
    <PhoneAppSection>
      <PhoneApp1 />
      <PhoneApp2PhotoWrapper>
        <PhoneApp2 />
      </PhoneApp2PhotoWrapper>
    </PhoneAppSection>
  );
};

export default PhoneApp;
