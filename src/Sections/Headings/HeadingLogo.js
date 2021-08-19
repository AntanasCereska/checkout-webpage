import styled from "styled-components";

//Whole section
const HeadingLogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //box shadopw does not work for some reason
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.08);
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
