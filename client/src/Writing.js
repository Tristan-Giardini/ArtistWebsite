import React from "react";
import styled from "styled-components";
import writing from "./assets/writing";
import { useNavigate } from "react-router-dom";

const Writing = () => {
  const navigate = useNavigate();
  console.log(writing);

  return (
    <Wrapper>
      <Intro>
        <Description>
          {writing.map((work) => {
            return (
              <div onClick={() => navigate(`/writing/${work.title}`)}>
                {work.title}
              </div>
            );
          })}
        </Description>
      </Intro>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 98vw;
`;

const Intro = styled.div`
  padding: 2%;
  font-size: 150%;
  margin: 2% 0% 2% 0%;
  display: flex;
  flex-direction: row;
`;

const Description = styled.div`
  font-family: var(--secondary-font);
  /* padding-top: 1%; */
  font-size: 80%;
  div {
    padding-bottom: 4%;
    :hover {
      cursor: pointer;
    }
  }
`;

export default Writing;
