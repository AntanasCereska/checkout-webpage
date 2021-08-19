import styled from "styled-components";
import ClientCard from "../../Components/ClientCard";
import { ClientsData } from '../../data/ClientsData'

const ClientsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

const Clients = () => {
  return (
    <ClientsSection>

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


    </ClientsSection>
  );
};

export default Clients;
