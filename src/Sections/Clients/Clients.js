import styled from "styled-components";
import ClientCard from "../../Components/ClientCard";
import { Heading2 } from "../../Components/Headings/Heading2";
import { ClientsData } from "../../data/ClientsData";

const Heading2Center = styled(Heading2)`
  @media (min-width: 1440px) {
    text-align: center;
  }
`;

const ClientsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 343px;
  @media (min-width: 1440px) {
    width: auto;
  }
`;

const ClientsCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

const Clients = () => {
  return (
    <ClientsSection>
      <Heading2Center>Hear success stories from our clients</Heading2Center>
      <ClientsCardsWrapper>
        {ClientsData.map((item) => (
          <ClientCard
            key={item.id}
            name={item.name}
            age={item.age}
            location={item.location}
            rate={item.rate}
            photo={item.photo}
            comment={item.comment}
          />
        ))}
      </ClientsCardsWrapper>
    </ClientsSection>
  );
};

export default Clients;
