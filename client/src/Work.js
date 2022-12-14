import styled from "styled-components";
import ModalImage from "react-modal-image";

const Work = ({ data }) => {
  return (
    <>
      {data.map((object, index) => {
        return (
          <Wrapper key={index}>
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
              <ModalImage small={object.work} large={object.work} />
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
`;

const Image = styled.div`
  width: 35%;
`;

const Credits = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  font-family: var(--secondary-font);
  font-size: 80%;
  div {
    padding-bottom: 2.5%;
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

const BackToTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font);
  :hover {
    cursor: pointer;
  }
`;

export default Work;
