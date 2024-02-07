import { useState } from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useContext } from "react";

library.add(faCircleChevronLeft, faCircleChevronRight, faCircleXmark);

function ImageModal({ photography }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [disableArrows, setDisableArrows] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
    document.body.style.overflow = "hidden";
    if (photography.length === 1) {
      setDisableArrows(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    document.body.style.overflow = "scroll";
    setDisableArrows(false);
  };

  const prevSlide = () => {
    setSlideNumber(
      slideNumber === 0 ? photography.length - 1 : slideNumber - 1
    );
  };

  const nextSlide = () => {
    setSlideNumber(
      slideNumber === photography.length - 1 ? 0 : slideNumber + 1
    );
  };

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      handleCloseModal();
    }
    if (e.key === "ArrowRight") {
      nextSlide();
    }
    if (e.key === "ArrowLeft") {
      prevSlide();
    }
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Container>
      <GalleryWrap>
        {openModal && (
          <SliderWrap>
            <CloseFontAwesomeIcon
              icon={faCircleXmark}
              className="btnClose"
              onClick={handleCloseModal}
            />
            <PrevFontAwesomeIcon
              icon={faCircleChevronLeft}
              className="btnPrev"
              onClick={prevSlide}
              disabled={disableArrows}
            />
            <NextFontAwesomeIcon
              icon={faCircleChevronRight}
              className="btnNext"
              onClick={nextSlide}
              disabled={disableArrows}
            />
            <FullScreenImage>
              <img src={photography[slideNumber].img} />
            </FullScreenImage>
          </SliderWrap>
        )}

        {photography &&
          photography.map((slide, index) => {
            return (
              <Single key={index} onClick={() => handleOpenModal(index)}>
                <img data-aos="fade-up" src={slide.img} alt="" />
              </Single>
            );
          })}
      </GalleryWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FullScreenImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  img {
    width: 35%;
    pointer-events: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GalleryWrap = styled.div``;

const Single = styled.div`
  width: 300px;
  cursor: pointer;
  img {
    max-width: 100%;
  }
`;

const SliderWrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4001;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const CloseFontAwesomeIcon = styled(FontAwesomeIcon)`
  position: fixed;
  cursor: pointer;
  opacity: 0.6;
  color: black;
  z-index: 9999;
  font-size: 300%;
  &:hover {
    opacity: 1;
  }
  top: 40px;
  right: 40px;
`;

const PrevFontAwesomeIcon = styled(FontAwesomeIcon)`
  position: fixed;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.0 : 0.6)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  color: black;
  z-index: 9999;
  top: 50%;
  transform: translateY(-50%);
  left: 40px;
  font-size: 300%;
  &:hover {
    opacity: 1;
  }
  &:disabled {
    cursor: default;
    opacity: 0.1;
  }
`;

const NextFontAwesomeIcon = styled(FontAwesomeIcon)`
  position: fixed;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.0 : 0.6)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  color: black;
  z-index: 9999;
  top: 50%;
  transform: translateY(-50%);
  right: 40px;
  font-size: 300%;
  &:hover {
    opacity: 1;
  }
  &:disabled {
    cursor: default;
    opacity: 0.1;
  }
`;

export default ImageModal;
