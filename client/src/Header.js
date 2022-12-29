import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Name to="/">Rebecca Storm</Name>
        <StyledNav to="/painting">painting</StyledNav>
        <StyledNav to="/photography">photography</StyledNav>
        <StyledNav to="writing">writing</StyledNav>
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

const StyledNav = styled(NavLink)`
  font-size: 100%;
  text-decoration: none;
  color: black;
  @media (max-width: 390px) {
    font-size: 50%;
  }
`;

const Name = styled(NavLink)`
  font-size: 150%;
  color: black;
  text-decoration: none;
  font-family: var(--font);
  @media (max-width: 390px) {
    font-size: 80%;
  }
`;

const Gradient = styled.div`
  height: 3rem;
  background: linear-gradient(to bottom, white, transparent);
`;

export default Header;
