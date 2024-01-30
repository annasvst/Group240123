import styled from 'styled-components';
import Typography from '@mui/material/Typography';

const StyledCard = styled.div`
  color: var(--color-primary);
  text-align: center;
  background-color: var(--color-lighter);
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
`;

const StyledParagraph = styled(Typography)`
  color: var(--color-default);  
`;


export const StyledComponentsExample = () => {
  return (
    <StyledCard>
      <h1>This is Styled Components Example component</h1>
      <StyledParagraph variant='body1'>If you're into the JavaScript-in-CSS vibe, this is for you. Styled components let you write actual CSS in your JavaScript file, using tagged template literals. It's like merging styles and components into one, which can be really powerful for component-based designs.</StyledParagraph>
    </StyledCard>
  );
};