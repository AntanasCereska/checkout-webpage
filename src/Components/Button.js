import styled from "styled-components";

const ButtonSection = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 343px;
  background-color: #ff9b4e;
  border-radius: 8px;
  box-shadow: 0px 16px 32px rgba(255, 155, 78, 0.24);
  border: none;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    background-color: #ff7a15;
  }
  :active {
    box-shadow: 0px 4px 8px rgba(255, 155, 78, 0.72);
    transform: translateY(2px);
  }
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
