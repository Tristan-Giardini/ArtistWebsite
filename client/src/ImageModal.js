import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

function ImageModal({ photography }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    document.body.style.overflow = "scroll";
  };
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(photography.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  const nextSlide = () => {
    slideNumber + 1 === photography.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
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
            />
            <NextFontAwesomeIcon
              icon={faCircleChevronRight}
              className="btnNext"
              onClick={nextSlide}
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
                <img src={slide.img} alt="" />
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

const GalleryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
  max-width: 620px;
  margin: 0 auto;
`;

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
  cursor: pointer;
  opacity: 0.6;
  color: black;
  z-index: 9999;
  top: 50%;
  transform: translateY(-50%);
  left: 40px;
  font-size: 300%;
  &:hover {
    opacity: 1;
  }
`;

const NextFontAwesomeIcon = styled(FontAwesomeIcon)`
  position: fixed;
  cursor: pointer;
  opacity: 0.6;
  color: black;
  z-index: 9999;
  top: 50%;
  transform: translateY(-50%);
  right: 40px;
  font-size: 300%;
  &:hover {
    opacity: 1;
  }
`;

export default ImageModal;
