import styled from "styled-components";
import ModalImage from "react-modal-image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useContext } from "react";
import ImageModal from "./ImageModal";
import random from "./assets/random";
import portraits from "./assets/portraits";
import bbymutha from "./assets/photography";
import margielatabi from "./assets/margielatabi";
import { MobileContext } from "./MobileContext";
import boat from "./assets/boat.jpeg";
import child from "./assets/child.jpeg";
import woods from "./assets/woods.jpeg";

const Photography = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 1000 });
  // }, []);
  return (
    <>
      <Container>
        <Wrapper>
          <ColumnOne>
            <ImageModal photography={bbymutha[0]} />
            <ImageModal photography={margielatabi[0]} />
          </ColumnOne>
          <ColumnTwo>
            <ImageModal photography={portraits[0]} />
          </ColumnTwo>
          <ColumnThree>
            <ImageModal photography={random[0]} />
          </ColumnThree>
          {/* <ColumnOne>
            <div data-aos="fade-up">
              <ModalImage
                small={boat}
                large={boat}
                hideZoom={true}
                hideDownload={true}
                alt="My Photo, 2023"
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={child}
                large={child}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={woods}
                large={woods}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={boat}
                large={boat}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={child}
                large={child}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={woods}
                large={woods}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={boat}
                large={boat}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={child}
                large={child}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={woods}
                large={woods}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={boat}
                large={boat}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={child}
                large={child}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={woods}
                large={woods}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={boat}
                large={boat}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={child}
                large={child}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={woods}
                large={woods}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
          </ColumnOne>
          <ColumnTwo>
            <div data-aos="fade-up">
              <ModalImage
                small={woods}
                large={woods}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={boat}
                large={boat}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={child}
                large={child}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={woods}
                large={woods}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={boat}
                large={boat}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={child}
                large={child}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={woods}
                large={woods}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={boat}
                large={boat}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={child}
                large={child}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={woods}
                large={woods}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={boat}
                large={boat}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={child}
                large={child}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={woods}
                large={woods}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={boat}
                large={boat}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={child}
                large={child}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
          </ColumnTwo>
          <ColumnThree>
            <div data-aos="fade-up">
              <ModalImage
                small={boat}
                large={boat}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={child}
                large={child}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={woods}
                large={woods}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={boat}
                large={boat}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={child}
                large={child}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={woods}
                large={woods}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={boat}
                large={boat}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={child}
                large={child}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={woods}
                large={woods}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={boat}
                large={boat}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={child}
                large={child}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={woods}
                large={woods}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={boat}
                large={boat}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={child}
                large={child}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
            <div data-aos="fade-up">
              <ModalImage
                small={woods}
                large={woods}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
          </ColumnThree> */}
        </Wrapper>
      </Container>
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin: 2% 2% 2% 2%;
  max-width: 80%;
`;

const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    max-width: 100%;
    padding-bottom: 1%;
  }
`;

const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1% 0 1%;
  div {
    max-width: 100%;
    padding-bottom: 1%;
  }
`;

const ColumnThree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    max-width: 100%;
    padding-bottom: 1%;
  }
`;

const BackToTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 150%;
  font-family: var(--font);
  :hover {
    cursor: pointer;
  }
  padding-bottom: 2%;
`;

export default Photography;
