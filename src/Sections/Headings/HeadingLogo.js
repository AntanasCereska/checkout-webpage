import styled from "styled-components";

//Whole section
const HeadingLogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  background: #ffffff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
  @media (min-width: 1440px) {
    height: 72px;
  }
`;

const LogoIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoIcon = styled.img`
  width: 73.34px;
  height: 32.08px;
`;

const HeadingLogo = () => {
  return (
    <HeadingLogoSection>
      <LogoIconWrapper>
        <LogoIcon src={require(`../../images/others/logo.png`).default} />
      </LogoIconWrapper>
    </HeadingLogoSection>
  );
};

export default HeadingLogo;
