import styled from "styled-components";
import { Heading5 } from "./Headings/Heading5";

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
  width: 48px;
`;

const ProgramCardText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProgramCardParagraph = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: #22222c;
  opacity: 0.64;
`;

const ProgramCard = ({ index, heading, paragraph, image }) => {
  return (
    <ProgramCardSection>
      <ProgramCardLogoWrapper>
        <ProgramCardLogo
          src={require(`../images/program_icons/${image}.png`).default}
        />
      </ProgramCardLogoWrapper>
      <ProgramCardText>
        <Heading5>{heading}</Heading5>
        <ProgramCardParagraph>{paragraph}</ProgramCardParagraph>
      </ProgramCardText>
    </ProgramCardSection>
  );
};

export default ProgramCard;
