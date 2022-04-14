
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { AppBar, Divider, IconButton, Link, Toolbar, Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
import NextLink from 'next/link';
import { useContext } from 'react'
import { UIContext } from '../../context/ui';



export const Navbar = () => {

  const { openSideMenu, swThemeChange, swTheme } = useContext(UIContext);

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton size='large' edge='start' onClick={openSideMenu}>
          <MenuOutlinedIcon color='action' />
        </IconButton>
        <NextLink href='/' passHref >
          <Link underline='none' color='currentcolor'>
            <Typography variant='h6'> OpenJira</Typography>
          </Link>
        </NextLink>
        <Divider
          
          style={{
            border: "none",
            height: 2,
            margin: 0,
          }}
          
          component='div' sx={{ flexGrow: 1 }} ></Divider>
        <Switch
          checked={swTheme}
          onChange={swThemeChange}
          name='theme'
          color='primary'
          />
      </Toolbar>
    </AppBar>
  )
}
