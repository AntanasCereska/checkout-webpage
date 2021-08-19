import styled from "styled-components";
import StarIcon from "../images/icons/star.png";

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
`;

const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClientName = styled.h3`
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.4px;
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

const StarsWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

const Star = styled.img`
  background: url(${StarIcon}) no-repeat center;
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

const ClientComment = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #22222c;
`;

const ClientCard = ({ name, age, location, rate, photo, comment, heading }) => {
  return (
    <ClientCardSection>
      <ClientInfo>
        <ClientName>
          {name}, {age}
        </ClientName>
        <ClientLocation>{location}</ClientLocation>
      </ClientInfo>
      <ClientRating>
        <StarsWrapper>
          <Star />
        </StarsWrapper>
      </ClientRating>
      <ClientPhotoWrapper>
        <ClientPhoto src={require(`../images/clients/${photo}.png`).default} />
      </ClientPhotoWrapper>
      <ClientComment>{comment}</ClientComment>
    </ClientCardSection>
  );
};

export default ClientCard;
