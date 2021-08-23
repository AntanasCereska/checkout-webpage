import styled from "styled-components";
import HeadingDiscount from "./HeadingDiscount";
import HeadingLogo from "./HeadingLogo";

const HeadingsSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Headings = () => {
  return (
    <HeadingsSection>
      <HeadingDiscount />
      <HeadingLogo />
    </HeadingsSection>
  );
};

export default Headings;
