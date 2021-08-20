import styled from "styled-components";
import PhoneApp1 from "./PhoneApp1";
import PhoneApp2 from "./PhoneApp2";

const PhoneAppSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 343px;
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
    flex-direction: row-reverse;
  }
`;

const PhoneApp = () => {
  return (
    <PhoneAppSection>
      <PhoneApp1 />
      <PhoneApp2 />
    </PhoneAppSection>
  );
};

export default PhoneApp;
