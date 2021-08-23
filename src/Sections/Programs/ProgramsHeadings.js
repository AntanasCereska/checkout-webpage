import styled from "styled-components";
import { Heading1 } from "../../Components/Headings//Heading1";

const ProgramHeadingsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 343px;
  gap: 8px;
  @media (min-width: 1440px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const SmallParagraphHeading = styled.h4`
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #22222c;
  @media (min-width: 1440px) {
    text-align: center;
  }
`;

const ProgramHeadings = () => {
  return (
    <ProgramHeadingsSection>
      <SmallParagraphHeading>
        Over <span style={{ fontWeight: "bold" }}>52 147</span> plans ordered.
      </SmallParagraphHeading>
      <Heading1>Get access to your yoga program now!</Heading1>
    </ProgramHeadingsSection>
  );
};

export default ProgramHeadings;
