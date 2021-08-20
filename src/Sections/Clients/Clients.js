import styled from "styled-components";
import ClientCard from "../../Components/ClientCard";
import { ClientsData } from "../../data/ClientsData";

const ClientsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 343px;
@media(min-width: 1440px){
  width: auto;
}
`;

const ClientsSectionHeader = styled.h2`
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: #22222c;
  text-align: center;
  @media (min-width: 1440px) {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
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
      <ClientsSectionHeader>
        Hear success stories from our clients
      </ClientsSectionHeader>
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
