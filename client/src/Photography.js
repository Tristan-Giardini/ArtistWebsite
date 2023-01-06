import styled from "styled-components";
import ModalImage from "react-modal-image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useContext } from "react";
import { MobileContext } from "./MobileContext";
import boat from "./assets/boat.jpeg";
import child from "./assets/child.jpeg";
import woods from "./assets/woods.jpeg";

const Photography = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Container>
      <Wrapper>
        <ColumnOne>
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
        </ColumnThree>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
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
    padding: 1%;
  }
`;

const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    max-width: 100%;
    padding: 1%;
  }
`;

const ColumnThree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    max-width: 100%;
    padding: 1%;
  }
`;

export default Photography;
