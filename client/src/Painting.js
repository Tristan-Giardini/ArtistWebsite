import styled from "styled-components";
import boat from "./assets/boat.jpeg";
import child from "./assets/child.jpeg";
import woods from "./assets/woods.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useContext } from "react";

const Painting = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <Container>
        <Pieces data-aos="fade-up">
          <img src={child}></img>
          <Title>A Baby Crying</Title>
          <SubText>Acrylic on canvas (34" by 24")</SubText>
          <Year>2022</Year>
        </Pieces>
        <Pieces data-aos="fade-up">
          <img src={woods}></img>
          <Title>Woods</Title>
          <SubText>Acrylic on canvas (34" by 24")</SubText>
          <Year>2022</Year>
        </Pieces>
        <Pieces data-aos="fade-up">
          <img src={boat}></img>
          <Title>A Boat and Men</Title>
          <SubText>Acrylic on canvas (34" by 24")</SubText>
          <Year>2022</Year>
        </Pieces>
        <Pieces data-aos="fade-up">
          <img src={child}></img>
          <Title>A Baby Crying</Title>
          <SubText>Acrylic on canvas (34" by 24")</SubText>
          <Year>2022</Year>
        </Pieces>
        <Pieces data-aos="fade-up">
          <img src={woods}></img>
          <Title>Woods</Title>
          <SubText>Acrylic on canvas (34" by 24")</SubText>
          <Year>2022</Year>
        </Pieces>
        <Pieces data-aos="fade-up">
          <img src={boat}></img>
          <Title>A Boat and Men</Title>
          <SubText>Acrylic on canvas (34" by 24")</SubText>
          <Year>2022</Year>
        </Pieces>
        <Pieces data-aos="fade-up">
          <img src={child}></img>
          <Title>A Baby Crying</Title>
          <SubText>Acrylic on canvas (34" by 24")</SubText>
          <Year>2022</Year>
        </Pieces>
        <Pieces data-aos="fade-up">
          <img src={woods}></img>
          <Title>Woods</Title>
          <SubText>Acrylic on canvas (34" by 24")</SubText>
          <Year>2022</Year>
        </Pieces>
        <Pieces data-aos="fade-up">
          <img src={boat}></img>
          <Title>A Boat and Men</Title>
          <SubText>Acrylic on canvas (34" by 24")</SubText>
          <Year>2022</Year>
        </Pieces>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
`;

const Container = styled.div`
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 3% 0 3% 0;
  /* scroll-snap-type: y mandatory;
  overflow-y: scroll; */
`;

const Pieces = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 8% 0 25% 0;
  /* scroll-snap-align: start; */
  img {
    max-width: 25%;
  }
`;

const Title = styled.div`
  padding: 2% 0 1% 0;
  font-family: var(--font);
  font-size: 150%;
`;

const SubText = styled.div`
  font-family: var(--secondary-font);
  font-size: 125%;
  font-style: italic;
  padding-bottom: 1%;
`;

const Year = styled.div`
  font-family: var(--secondary-font);
`;

export default Painting;
