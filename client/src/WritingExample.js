import styled from "styled-components";
import { useParams } from "react-router-dom";
import writing from "./assets/writing";

const WritingExample = () => {
  const { piece } = useParams();
  const work = writing
    .filter((item) => item.title === piece)
    .map((item) => item.work);

  return (
    <Wrapper>
      <div>{<p dangerouslySetInnerHTML={{ __html: work }}></p>}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 2% 30% 2% 30%;
  font-family: var(--secondary-font);
  font-size: 100%;
`;

export default WritingExample;
