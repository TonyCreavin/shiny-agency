import '../../App.css';
import home from '../../assets/home-illustration.svg';
import styled from 'styled-components';
import colors from '../../utils/style/color';

const StyledButton = styled.button`
  color: white;
  padding: 10px;
  max-width: 200px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 30px;
  background-color: ${colors.primary};
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
`;

const StyledDiv1 = styled.div`
  display: flex;
background-color: ${colors.backgroundLight}
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const StyledH1 = styled.h1`
  height: 200px;
  font-size: 40px;
`;

const StyleImg = styled.img`
  margin-top: 100px;
`;

function Home() {
  return (
    <StyledDiv1>
      <StyledDiv>
        <StyledH1>
          Repérez vos besoins, on s'occupe du reste, avec des meilleurs talents
        </StyledH1>
        <StyledButton>Faire le test</StyledButton>
      </StyledDiv>
      <StyledDiv>
        <StyleImg src={home} alt="icon" />
      </StyledDiv>
    </StyledDiv1>
  );
}

export default Home;
