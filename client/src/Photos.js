import bbymutha from "./assets/photography";
import margielatabi from "./assets/margielatabi";
import ImageModal from "./ImageModal";
import styled from "styled-components";

const Photos = () => {
  return (
    <Wrapper>
      <FirstColumn>
        <ImageModal photography={bbymutha[0]} />
      </FirstColumn>
      <SecondColumn>
        <ImageModal photography={margielatabi[0]} />
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

const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2% 5% 2% 5%;
`;

export default Photos;
