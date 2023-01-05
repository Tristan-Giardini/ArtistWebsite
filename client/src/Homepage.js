import styled from "styled-components";
import data from "./assets/data";
import Work from "./Work";

const Homepage = () => {
  return (
    <Wrapper>
      <Intro>
        <Description>
          <div>CV - rebeccastorm@email.com</div>
          <Italic>whatever whatever whatever</Italic>
          <div>Other accolades: something</div>
          <div>Something else</div>
        </Description>
      </Intro>
      <SelectedWork>
        <Underline>Selected Work:</Underline>
        <Work data={data} />
      </SelectedWork>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 98vw;
`;

const Intro = styled.div`
  padding: 2%;
  font-size: 150%;
  margin: 1% 0% 1% 0%;
  display: flex;
  flex-direction: row;
`;

const Description = styled.div`
  font-family: var(--secondary-font);
  /* padding-top: 1%; */
  font-size: 80%;
  div {
    padding-bottom: 4%;
  }
`;

const Underline = styled.div`
  font-family: var(--font);
  text-decoration: underline;
  padding: 2%;
  @media (max-width: 390px) {
    font-size: 200%;
  }
`;

const Italic = styled.div`
  font-style: italic;
`;

const SelectedWork = styled.div`
  font-size: 150%;
  display: flex;
  flex-direction: column;
  @media (max-width: 390px) {
    font-size: 75%;
  }
`;

export default Homepage;
