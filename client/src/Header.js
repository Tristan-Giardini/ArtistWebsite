import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Name>Rebecca Storm</Name>
        <div>painting</div>
        <div>photography</div>
        <div>writing</div>
      </Wrapper>
      <Gradient></Gradient>
    </Container>
  );
};

const Container = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 4000;
  background-color: transparent;
`;

const Wrapper = styled.div`
  padding: 2% 2% 0% 2%;
  display: flex;
  justify-content: space-between;
  font-family: var(--secondary-font);
  background-color: white;
`;

const Name = styled.div`
  font-size: 150%;
  font-family: var(--font);
`;

const Gradient = styled.div`
  height: 3rem;
  background: linear-gradient(to bottom, white, transparent);
`;

export default Header;
