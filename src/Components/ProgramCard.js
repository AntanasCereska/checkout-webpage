import styled from "styled-components";

const ProgramCardSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
`;

const ProgramCardLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
`;

const ProgramCardLogo = styled.img`
  height: 48px;
  width: 48px;`;

const ProgramCardText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProgramCardHeading = styled.h3`
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
`;

const ProgramCardParagraph = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
`;

const ProgramCard = ({ heading, paragraph, image }) => {
  return (
    <ProgramCardSection>
      <ProgramCardLogoWrapper>
        <ProgramCardLogo
          src={require(`../images/program_icons/${image}.png`).default}
        />
      </ProgramCardLogoWrapper>
      <ProgramCardText>
        <ProgramCardHeading>{heading}</ProgramCardHeading>
        <ProgramCardParagraph>{paragraph}</ProgramCardParagraph>
      </ProgramCardText>
    </ProgramCardSection>
  );
};

export default ProgramCard;
