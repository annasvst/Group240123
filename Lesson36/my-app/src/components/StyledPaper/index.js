import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';

export const StyledPaper = ({children}) => {
  const theme = useTheme();

  return (
    <Paper elevation={10} sx={
      {padding: theme.padding.lg,
        width: '100vw',
        maxWidth: '600px',
        margin: '0 auto',
        
        
      }
    } >{children}</Paper>
  )
};