import styled from "styled-components";

import Headings from "./Sections/Headings/Headings";
import Program from "./Sections/Programs/Program";
import Clients from "./Sections/Clients/Clients";
import Button from "./Components/Button";
import PhoneApp from "./Sections/PhoneApp/PhoneApp";
import FAQ from "./Sections/FAQ/FAQ";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-bottom: 64px;
  @media (min-width: 1440px) {
    gap: 48px;
  }
`;


//render all components here
function App() {
  return (
    <div className="App">
      <Content>
        <Headings />
        <Program />
        <Clients />
        <Button />
        <PhoneApp />
        <FAQ />
        <Button />
        <Program />
      </Content>
    </div>
  );
}

export default App;

//HOW I WOULD IMRPOVE THIS PROJECT

// 1. make constant styles (for example header styles or
// containers for sections wrapped by flexboxes)
// OR
// Make headers components (for H1, H2, etc) instead of constant styles

// 2. program section at the top and program section at the bottom
// should update selected plan at the same time

// 3. constant styles for colors, screen sizes
//(for example instead of @media(min-width:1440px) it could be @media(min-width:mobileScreen))

// 4. use SVG instead of png for ultra mega quality resolutions

// 5. make clients section as carousel for mobile screens

// 6. maybe it was worth to make styles as seperate files. Not sure.

// 7. write more comments

//--------------------------------------------------------------------------------------------

//also, as always i struggled a bit with structuring my file directiories,

//if you think this code is a mess... i had to write it... ¯\_(ツ)_/¯
//have a good day

