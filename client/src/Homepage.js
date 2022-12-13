import styled from "styled-components";
import data from "./assets/data";
import Work from "./Work";

const Homepage = () => {
  return (
    <Wrapper>
      <Intro>
        <Underline>Rebecca Storm:</Underline>
        <Description>
          <div>CV - rebeccastorm@email.com</div>
          <Italic>whatever whatever whatever</Italic>
          <div>Other accolades: something</div>
          <div>Something else</div>
        </Description>
      </Intro>
      <SelectedWork>
        <Underline>Selected Work:</Underline>
        <div>
          <Work data={data} />
        </div>
      </SelectedWork>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 98vw;
  height: 100vh;
`;

const Intro = styled.div`
  padding: 2%;
  font-size: 150%;
  margin: 3% 0% 3% 0%;
  display: flex;
  flex-direction: row;
`;

const Underline = styled.div`
  font-family: var(--font);
  text-decoration: underline;
`;

const Description = styled.div`
  font-family: var(--secondary-font);
  padding-left: 10%;
  font-size: 80%;
  div {
    padding-bottom: 7%;
  }
`;

const Italic = styled.div`
  font-style: italic;
`;

const SelectedWork = styled.div`
  padding: 2%;
  font-size: 150%;
  display: flex;
  flex-direction: column;
`;

export default Homepage;