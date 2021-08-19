import styled from "styled-components";
import Check from "../images/icons/check.png";


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

  width: 24px;
  height: 24px;
`;

const Phone1SectionProImage = styled.img`
  background: url(${Check}) no-repeat center;
  width: 100%;
  height: 100%;
`;

const Phone1SectionProText = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #424242;
`;


const Checkpoint = () => {
    return (
        <CheckpointSection>
            <Phone1SectionPro>
                <Phone1SectionProImageWrapper>
                    <Phone1SectionProImage />
                </Phone1SectionProImageWrapper>
                <Phone1SectionProText>
                    Each program adapts to your age or fitness level
                </Phone1SectionProText>
            </Phone1SectionPro>
        </CheckpointSection>
    )
}

export default Checkpoint
