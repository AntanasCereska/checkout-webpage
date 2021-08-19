import styled from "styled-components";
import Checkpoint from "../../Components/Checkpoint";

const PhoneApp1Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 343px;
`;

const PhoneApp1SectionHeading = styled.h2`
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

const CheckpointsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PhoneApp1 = () => {
  return (
    <PhoneApp1Section>
      <PhoneApp1SectionHeading>
        Is Positive Yoga right for me?
      </PhoneApp1SectionHeading>
      <CheckpointsWrapper>
        <Checkpoint />
        <Checkpoint />
      </CheckpointsWrapper>
    </PhoneApp1Section>
  );
};

export default PhoneApp1;
