import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import { FC, useContext } from "react";
import { UIContext } from "../../context/ui";
import { Navbar, Sidebar } from "../ui";
import { darkTheme, lightTheme } from '../../themes';



interface Props { title?: string; };

export const Layout: FC<Props> = ({ title = 'OpenJira', children }) => {
  const { swTheme } = useContext( UIContext );
  return (
    <ThemeProvider theme={ !swTheme ? lightTheme : darkTheme }>
    <CssBaseline/>  
    <Box sx={{ flexFlow: 1 }}>

        <Head>
            <title>{title}</title>
        </Head>

        <Navbar/>
        <Sidebar/>
        <Box sx={{ padding: '10px 20px' }}>
            {children}
        </Box>

    </Box>
    </ThemeProvider>
  )
}
