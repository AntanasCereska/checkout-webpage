import styled from "styled-components";

const ButtonSection = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 343px;
  background-color: #ff9b4e;
  border-radius: 8px;
`;

const ButtonText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

const Button = () => {
  return (
    <ButtonSection>
      <ButtonText>Get your plan</ButtonText>
    </ButtonSection>
  );
};

export default Button;
