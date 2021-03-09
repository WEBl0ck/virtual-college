import React from 'react';
import { Layout, AppBar, MenuItemLink } from 'react-admin';
import SettingsIcon from '@material-ui/icons/Settings';
import CustomUserMenu from '../_admin/CustomUserMenu';

const MainLayout = (props) => {
  return <Layout {...props} appBar={MyAppBar} />;
};

const MyAppBar = (props) => {
  return <AppBar {...props} userMenu={<MyUserMenu />} />;
};

const MyUserMenu = (props) => {
  return (
    <CustomUserMenu {...props}>
      <MenuItemLink to="/configuration" primaryText="Configuration" leftIcon={<SettingsIcon />} />
    </CustomUserMenu>
  );
};

export default MainLayout;
