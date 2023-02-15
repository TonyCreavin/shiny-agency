import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/color';
import logo from '../../assets/dark-logo.png';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 50px;

  justify-content: space-between;
  align-items: center;
`;
const StyledImg = styled.img`
  width: 220px;
  height: 80px;
`;
const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  margin-right: 30px;
  font-size: 18px;
  alight-self: bottom;

  ${(props) =>
    props.$isFullLink &&
    `color: white; padding:10px; border-radius: 30px; background-color: ${colors.primary};`}
`;

function Header() {
  return (
    <StyledNav>
      <div>
        <StyledImg src={logo} alt="light-logo" />
      </div>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Questionnaire
        </StyledLink>

        <StyledLink to="/freelances">Freelances</StyledLink>
      </div>
    </StyledNav>
  );
}

export default Header;
