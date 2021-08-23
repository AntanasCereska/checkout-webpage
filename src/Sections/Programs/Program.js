import styled from "styled-components";
import Program1 from "./Program1";
import Program2 from "./Program2";
import ProgramHeadings from "./ProgramsHeadings";

const ProgramSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  overflow: hidden;
  width: 343px;
  @media (min-width: 1440px) {
    width: 729px;
    gap: 32px;
  }
`;

const Program1Program2Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }
`;

const Program = () => {
  return (
    <ProgramSection>
      <ProgramHeadings />
      <Program1Program2Wrapper>
        <Program1 />
        <Program2 />
      </Program1Program2Wrapper>
    </ProgramSection>
  );
};

export default Program;
