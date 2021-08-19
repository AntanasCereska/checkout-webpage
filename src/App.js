import styled from "styled-components";

import Headings from './Sections/Headings/Headings'
import Program from "./Sections/Programs/Program";
import Clients from "./Sections/Clients/Clients";
import Button from "./Components/Button";
import PhoneApp from "./Sections/PhoneApp/PhoneApp";

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;overflow: hidden;
@media (min-width: 1440px){
  gap: 48px;
}
`;

function App() {
  return (
    <div className="App">
      <Content>
        <Headings />
        <Program />
        <Clients />
        <Button />
        <PhoneApp />
      </Content>
    </div >
  );
}

export default App;
