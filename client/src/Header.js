import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MobileContext } from "./MobileContext";

const Header = () => {
  const { isMobile } = useContext(MobileContext);
  return isMobile ? (
    <Container>
      <Wrapper>
        <Name to="/">Rebecca Storm</Name>
        <SubNav>
          <StyledNav to="/painting">painting</StyledNav>
          <StyledNav to="/photography">photography</StyledNav>
          <StyledNav to="writing">writing</StyledNav>
        </SubNav>
      </Wrapper>
      <Gradient></Gradient>
    </Container>
  ) : (
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
  @media (max-width: 390px) {
    flex-direction: column;
  }
`;

const SubNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 150%;
  padding: 6% 0 3% 0;
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
    font-size: 200%;
  }
`;

const Gradient = styled.div`
  height: 3rem;
  background: linear-gradient(to bottom, white, transparent);
`;

export default Header;
