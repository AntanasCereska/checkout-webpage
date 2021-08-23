import styled from "styled-components";
import { ParagraphSmall } from "./Paragraphs/ParagraphSmall";

const CheckpointSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 343px;
`;

const Pros = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

const Checkbox = styled.img`
  width: 24px;
  height: 24px;
`;

const Checkpoint = ({ advantage }) => {
  return (
    <CheckpointSection>
      <Pros>
        <CheckboxWrapper>
          <Checkbox src={require(`../images/icons/check.png`).default} />
        </CheckboxWrapper>
        <ParagraphSmall>{advantage}</ParagraphSmall>
      </Pros>
    </CheckpointSection>
  );
};

export default Checkpoint;
