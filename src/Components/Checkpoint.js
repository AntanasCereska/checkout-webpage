import styled from "styled-components";

const CheckpointSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone1SectionPro = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const Phone1SectionProImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

const Phone1SectionProImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Phone1SectionProText = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #424242;
`;

const Checkpoint = ({ advantage }) => {
  return (
    <CheckpointSection>
      <Phone1SectionPro>
        <Phone1SectionProImageWrapper>
          <Phone1SectionProImage
            src={require(`../images/icons/check.png`).default}
          />
        </Phone1SectionProImageWrapper>
        <Phone1SectionProText>{advantage}</Phone1SectionProText>
      </Phone1SectionPro>
    </CheckpointSection>
  );
};

export default Checkpoint;
