import React, { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
import HomeIcon from '@mui/icons-material/Home'
import BusinessIcon from '@mui/icons-material/Business'
import WorkIcon from '@mui/icons-material/Work'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { SlCalender } from 'react-icons/sl'
import { IoIosNotifications } from 'react-icons/io'
import { logout } from '../../../Redux/Actions/authAction'
import logo from '../../../assets/geulogo.png'

const drawerWidth = 240

const openedMixin = theme => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closedMixin = theme => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}))

const SideNavbar = () => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const logoutHandler = () => {
    // navigate('/logout')
    dispatch(logout(navigate))
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position='fixed' open={open}>
        <Toolbar className='bg-[#000] '>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' })
            }}
          >
            <MenuIcon style={{ color: '#feb21a' }} />
          </IconButton>
          <Typography
            variant='h5'
            noWrap
            component='div'
            className='font-extrabold  bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%] text-transparent bg-clip-text'
          >
            <div className='flex  items-center  '>
              <img src={logo} alt='logo' className='w-[100%] h-[70px] py-2 ' />
              <span> | ERP Portal</span>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: '#000',
            color: '#fedb28'
          }
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon style={{ color: '#feb21a' }} />
            ) : (
              <ChevronLeftIcon style={{ color: '#feb21a' }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => navigate('/admin/home')}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center'
                }}
              >
                <HomeIcon style={{ color: '#feb21a' }} />
              </ListItemIcon>
              <ListItemText primary='Home' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => navigate('/admin/placement/dashboard')}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center'
                }}
              >
                <DashboardIcon style={{ color: '#feb21a' }} />
              </ListItemIcon>
              <ListItemText
                primary='Dashboard'
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => navigate('/admin/placement/students')}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center'
                }}
              >
                <PersonIcon style={{ color: '#feb21a' }} />
              </ListItemIcon>
              <ListItemText primary='Students' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => navigate('/admin/placement/companies')}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center'
                }}
              >
                <BusinessIcon style={{ color: '#feb21a' }} />
              </ListItemIcon>
              <ListItemText
                primary='Companies'
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => navigate('/admin/placement/jobpostings')}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center'
                }}
              >
                <WorkIcon style={{ color: '#feb21a' }} />
              </ListItemIcon>
              <ListItemText
                primary='Job Posting'
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => navigate('/admin/placement/application')}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center'
                }}
              >
                <InsertDriveFileIcon style={{ color: '#feb21a' }} />
              </ListItemIcon>
              <ListItemText
                primary='Applications'
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => navigate('/admin/placement/drive')}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center'
                }}
              >
                <SlCalender size={24} style={{ color: '#feb21a' }} />
              </ListItemIcon>
              <ListItemText
                primary='Placement Drive'
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => navigate('/admin/placement/placedstudents')}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center'
                }}
              >
                <PersonIcon style={{ color: '#feb21a' }} />
              </ListItemIcon>
              <ListItemText
                primary='Placed Students'
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => navigate('/admin/placement/notice')}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center'
                }}
              >
                <IoIosNotifications size={24} style={{ color: '#feb21a' }} />
              </ListItemIcon>
              <ListItemText primary='Notice' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={logoutHandler}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center'
                }}
              >
                <LogoutIcon style={{ color: '#feb21a' }} />
              </ListItemIcon>
              <ListItemText primary='Logout' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  )
}

export default SideNavbar
