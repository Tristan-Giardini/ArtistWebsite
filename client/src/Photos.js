import bbymutha from "./assets/photography";
import margielatabi from "./assets/margielatabi";
import random from "./assets/random";
import ImageModal from "./ImageModal";
import styled from "styled-components";

const Photos = () => {
  return (
    <Wrapper>
      <FirstColumn>
        <Container>
          <ImageModal photography={bbymutha[0]} />
        </Container>
        <Container>
          <ImageModal photography={margielatabi[0]} />
        </Container>
      </FirstColumn>
      <SecondColumn>
        <Container>
          <ImageModal photography={random[0]} />
        </Container>
      </SecondColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2% 5% 2% 5%;
`;

const Container = styled.div`
  margin-bottom: 10%;
`;

const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2% 5% 2% 5%;
`;

export default Photos;
