import styled from "styled-components";
import { Heading5 } from "../Components/Headings/Heading5";
import { ParagraphRegular } from "./Paragraphs/ParagraphRegular";

const ClientCardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 343px;
  min-height: 607px;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(57, 53, 60, 0.08);
  border-radius: 16px;
  transition: 0.3s;
  :hover {
    box-shadow: 0px 8px 16px rgba(57, 53, 60, 0.16);
    transform: translateY(2px);
  }
`;

const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClientLocation = styled.h3`
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #22222c;
`;

const ClientRating = styled.div`
  display: flex;
  flex-direction: row;
`;

const StarWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

const Star = styled.img`
  width: 100%;
  height: 100%;
`;

const ClientPhotoWrapper = styled.div`
  width: 153px;
  height: 153px;
`;

const ClientPhoto = styled.img`
  width: 100%;
  height: 100%;
`;

const ClientCard = ({ name, age, location, rate, photo, comment, heading }) => {
  return (
    <ClientCardSection>
      <ClientInfo>
        <Heading5>
          {name}, {age}
        </Heading5>
        <ClientLocation>{location}</ClientLocation>
      </ClientInfo>
      <ClientRating>
        {/* show client's rating (stars)*/}
        {[...Array(rate)].map((elementInArray, index) => (
          <StarWrapper key={index}>
            <Star src={require(`../images/icons/star.png`).default} />
          </StarWrapper>
        ))}
      </ClientRating>
      <ClientPhotoWrapper>
        <ClientPhoto src={require(`../images/clients/${photo}.png`).default} />
      </ClientPhotoWrapper>
      <ParagraphRegular>{comment}</ParagraphRegular>
    </ClientCardSection>
  );
};

export default ClientCard;
