import errorPic from '../../assets/404.svg';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: between;
  margin-top: 30px;
  align-items: center;
`;
const StyleImg = styled.img`
  width: 70vw;
  align-self: center;
`;

function Error() {
  return (
    <StyledDiv>
      <h1>Oups...</h1>
      <StyleImg src={errorPic} alt="error pic" />
      <h1>Oups 🙈 Cette page n'existe pas</h1>
    </StyledDiv>
  );
}

export default Error;
