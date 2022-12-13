import styled from "styled-components";
import Modal from "./Modal";
import { useState } from "react";
import ModalImage from "react-modal-image";

const Work = ({ data }) => {
  // const [image, setImage] = useState({ selectedImage: null });

  // const handleImageClick = (image) => {
  //   setImage({ selectedImage: image });
  // };

  return (
    <>
      {data.map((object, index) => {
        return (
          <Wrapper key={index}>
            {/* {!isModal ? null : <Modal work={object.work} />} */}
            {/* <Image src={object.work} /> */}
            <Image>
              <ModalImage small={object.work} large={object.work} />
            </Image>
            {/* {image.selectedImage ? (
              <Modal>
                <img src={image.selectedImage} />
              </Modal>
            ) : null} */}
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
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10% 0% 10% 0%;
`;

const Image = styled.div`
  width: 35%;
`;

const Credits = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-left: 15%;
  width: 35%;
  font-family: var(--secondary-font);
  font-size: 80%;
  div {
    padding: 2.5%;
  }
`;

const Title = styled.div`
  font-family: var(--font);
  font-size: 125%;
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

export default Work;
