import styled from "styled-components";
import Checkpoint from "../../Components/Checkpoint";
import { Heading3 } from "../../Components/Headings/Heading3";
import { YogaAdvantagesData } from "../../data/YogaAdvantagesData";

const PhoneApp1Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CheckpointsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PhoneApp1 = () => {
  return (
    <PhoneApp1Section>
      <Heading3>Is Positive Yoga right for me?</Heading3>
      <CheckpointsWrapper>
        {YogaAdvantagesData.map((item) => (
          <Checkpoint index={item.id} advantage={item.advantage} />
        ))}
      </CheckpointsWrapper>
    </PhoneApp1Section>
  );
};

export default PhoneApp1;
