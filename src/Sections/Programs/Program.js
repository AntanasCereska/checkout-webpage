import { useState } from "react";

import styled from "styled-components";
import ProgramHeading from "./ProgramHeading";
import Program1 from "./Program1";
import Program2 from "./Program2";

const ProgramSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  overflow: hidden;
  @media (min-width: 1440px) {
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
      <ProgramHeading />
      <Program1Program2Wrapper>
        <Program1 />
        <Program2 />
      </Program1Program2Wrapper>
    </ProgramSection>
  );
};

export default Program;
