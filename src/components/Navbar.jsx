import { Interests, Mail, Notifications } from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Box,
  InputBase,
  Badge,
  Avatar,
} from '@mui/material';
import React from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  [theme.breakpoints.up('sm')]: { display: 'flex' },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  [theme.breakpoints.up('sm')]: { display: 'none' },
}));

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          SOCIAL APP
        </Typography>
        <Interests sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder='Search...'></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <Notifications />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src='https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            />
          </Badge>
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          />
          <Typography variant='span'>Jane</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
