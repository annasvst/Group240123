import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

export const theme = createTheme({
	palette: {
		primary: { main: orange[500] },
	},
  padding: {
    xs: '8px',
    s: '12px',
    md: '20px',
    lg: '24px'
  }
});
