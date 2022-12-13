import styled from "styled-components";

const Modal = ({ work }) => {
  return (
    <Wrapper>
      <Image src={work} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 60%;
`;

export default Modal;
