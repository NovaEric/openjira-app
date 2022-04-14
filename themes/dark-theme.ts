import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const darkTheme = createTheme({

    palette: {
        mode: 'dark',
        secondary: { main: '#C0C0C0' },
        error: { main: red.A400 }
    },

    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    backgroundColor: '#29877e'
                }
            }
        }
    }
});