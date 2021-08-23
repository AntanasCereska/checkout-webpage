import styled from "styled-components";
import ProgramCard from "../../Components/ProgramCard";
import { ProgramsData } from "../../data/ProgramsData";
import { Heading3 } from "../../Components/Headings/Heading3";

const Program2Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 343px;
  @media (min-width: 1440px) {
    gap: 48px;
  }
`;

const ProgramCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Program2 = () => {
  return (
    <Program2Section>
      <Heading3>What's in my program?</Heading3>

      <ProgramCards>
        {ProgramsData.map((item) => (
          <ProgramCard
            key={item.id}
            heading={item.heading}
            paragraph={item.paragraph}
            image={item.image}
          />
        ))}
      </ProgramCards>
    </Program2Section>
  );
};

export default Program2;
