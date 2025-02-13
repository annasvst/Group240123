import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';

interface StyledPaperProps {
  className?: string;
  dataTestid?: string;
  children: React.ReactNode;
}

export const StyledPaper = ({className, dataTestid, children}: StyledPaperProps) => {
  const theme = useTheme();

  return (
    <Paper data-testid={dataTestid} elevation={10} className={className} sx={
      { padding: theme.spacing(2),
        width: '100vw',
        maxWidth: '600px',
        margin: '0 auto',
      }
    } >{children}</Paper>
  )
};