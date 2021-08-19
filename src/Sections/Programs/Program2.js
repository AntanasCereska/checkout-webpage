import styled from "styled-components";
import ProgramCard from "../../Components/ProgramCard";
import { ProgramsData } from "../../data/ProgramsData";

const Program2Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 343px;
  @media (min-width: 1440px) {
    gap: 48px;
  }
`;

const Program1Heading = styled.h3`
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
`;

const ProgramCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Program2 = () => {
  return (
    <Program2Section>
      <Program1Heading>What's in my program?</Program1Heading>

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
