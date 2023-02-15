import Card from '../../components/Card';
import DefaultPicture from '../../assets/profile.png';
import styled from 'styled-components';

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture,
  },
];

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyledH1 = styled.h1`
  font-size: 1.7em;
`;
const StyledH2 = styled.h2`
  font-size: 1em;
  color: grey;
  padding-bottom: 10vh;
  padding-top: 5vh;
`;
function Freelances() {
  return (
    <PageContainer>
      <StyledH1>Trouvez votre prestataire</StyledH1>
      <StyledH2>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </StyledH2>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </PageContainer>
  );
}

export default Freelances;
