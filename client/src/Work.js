import styled from "styled-components";
import ModalImage from "react-modal-image";
import ImageModal from "./ImageModal";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useContext } from "react";
import { MobileContext } from "./MobileContext";
import boat from "../src/assets/boat.jpeg";

const Work = ({ data }) => {
  const boatImg = [[{ img: boat }]];
  const { isMobile } = useContext(MobileContext);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return isMobile ? (
    <>
      {data.map((object, index) => {
        return (
          <Wrapper key={index} data-aos="fade-up">
            <Image>
              <ModalImage
                small={object.work}
                large={object.work}
                hideZoom={true}
                hideDownload={true}
              />
            </Image>
            <Credits>
              <Title>
                {object.title}
                <Year>{object.year}</Year>
              </Title>
              <div>{object.medium}</div>
              <Description>{object.description}</Description>
              <Time>{object.time}</Time>
            </Credits>
          </Wrapper>
        );
      })}
      <BackToTop>
        <div
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Back to top
        </div>
      </BackToTop>
    </>
  ) : (
    <>
      {data.map((object, index) => {
        return (
          <Wrapper key={index} data-aos="fade-up">
            <Credits>
              <Title>
                {object.title}
                <Year>{object.year}</Year>
              </Title>
              <div>{object.medium}</div>
              <Description>{object.description}</Description>
              <Time>{object.time}</Time>
            </Credits>
            <Image>
              <ImageModal photography={boatImg[0]} />
            </Image>
          </Wrapper>
        );
      })}
      <BackToTop>
        <div
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Back to top
        </div>
      </BackToTop>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10% 2% 10% 2%;
  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.div`
  width: 35%;
  @media (max-width: 390px) {
    width: 90%;
  }
`;

const Credits = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  font-family: var(--font);
  font-size: 80%;
  div {
    padding-bottom: 2.5%;
  }
  @media (max-width: 390px) {
    font-size: 150%;
    width: 80%;
    padding-top: 2.5%;
  }
`;

const Title = styled.div`
  font-family: var(--font);
  font-size: 125%;
  @media (max-width: 390px) {
    font-size: 150%;
  }
`;

const Year = styled.span`
  font-size: 70%;
  font-style: italic;
  position: relative;
  top: 15%;
  left: 1%;
`;

const Description = styled.div`
  font-size: 75%;
`;

const Time = styled.div`
  font-size: 70%;
`;

const BackToTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100%;
  font-family: var(--font);
  :hover {
    cursor: pointer;
  }
  padding-bottom: 2%;
`;

export default Work;
