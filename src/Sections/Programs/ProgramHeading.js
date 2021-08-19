import styled from "styled-components";

const ProgramHeadingSection = styled.div`
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

const PlansOrdered = styled.h3`
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
`;

const ProgramMessageHeading = styled.h1`
  font-weight: 800;
  font-size: 28px;
  line-height: 36px;
  @media (min-width: 1440px) {
    font-weight: 800;
    font-size: 40px;
    line-height: 56px;
  }
`;

const ProgramHeading = () => {
  return (
    <ProgramHeadingSection>
      <PlansOrdered>Over <span style={{ fontWeight: "bold" }}> 52 147 </span>plans ordered.</PlansOrdered>
      <ProgramMessageHeading>
        Get access to your yoga program now!
      </ProgramMessageHeading>
    </ProgramHeadingSection>
  );
};

export default ProgramHeading;
