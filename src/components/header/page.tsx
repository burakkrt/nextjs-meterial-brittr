'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IRootParams } from './types';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import SelectLanguage from '@components/select-language';
import { useTheme } from '@mui/material/styles';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const HeaderPage = ({ locale, langHeader: pages }: IRootParams) => {
  const [mobileRightMenu, setMobileRightMenu] = React.useState<boolean>(false);
  const pathname = usePathname();
  const theme = useTheme();

  const routeToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    if (mobileRightMenu) {
      handlerToggleMenu(false);
    }
  };

  const handlerToggleMenu = (state: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setMobileRightMenu(state);
  };

  function companyLogo() {
    return <Image src="/images/logo.png" alt="Company Logo" fill quality={100} sizes="100%" />;
  }

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}>
      <Box sx={{ backgroundColor: '#001B79' }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              minHeight: '50px',
              [theme.breakpoints.down('sm')]: {
                padding: '0.5rem 0',
              },
            }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.1rem',
                [theme.breakpoints.up('sm')]: {
                  gap: '2rem',
                  flexDirection: 'row',
                },
              }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'start',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                <LocalPhoneIcon />
                <Typography
                  component="a"
                  href="tel:+0212 458 02 09"
                  variant="subtitle2"
                  color="white">
                  +90 212 458 02 09
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'start',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                <EmailIcon />
                <Typography
                  component="a"
                  href="mailto:info@briterrainc.com"
                  color="white"
                  sx={{ ':hover': { textDecoration: 'underline' } }}
                  variant="subtitle2">
                  info@briterrainc.com
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Typography component="span" className="header-top-brand">
                Briterra INC
              </Typography>
            </Box>
            <Box sx={{ display: { sm: 'block', md: 'none' } }}>
              {<SelectLanguage locale={locale} pathname={pathname} color={'white'} />}
            </Box>
          </Box>
        </Container>
      </Box>
      <Toolbar disableGutters className="header-nav-content">
        <Container
          maxWidth="xl"
          sx={{
            padding: '0.5rem 0',
            [theme.breakpoints.up('sm')]: {
              padding: '1rem 0',
            },
          }}>
          <Box sx={{ color: 'white', display: 'flex' }}>
            <Box
              sx={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                display: { xs: 'none', md: 'flex' },
              }}>
              <Box sx={{ width: '60px', height: '44px', position: 'relative' }}>
                {companyLogo()}
              </Box>
              <Typography
                variant="h4"
                noWrap
                component="a"
                href={`/${locale ?? locale}`}
                className="brand-text">
                briterra
              </Typography>
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                [theme.breakpoints.up('sm')]: {
                  position: 'relative',
                },
              }}>
              {/* Only Mobile Visible */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'flex', md: 'none' },
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Box sx={{ width: '56px', height: '42px', position: 'relative' }}>
                  {companyLogo()}
                </Box>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href={`/${locale ?? locale}`}
                  className="brand-text">
                  briterra
                </Typography>
              </Box>

              {/* Only Mobile Visible */}
              <Box sx={{ display: { xs: 'flex', md: 'none' }, position: 'relative' }}>
                <IconButton
                  className="hamburger-menu"
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handlerToggleMenu(true)}>
                  <MenuIcon />
                </IconButton>

                <Drawer anchor="right" open={mobileRightMenu} onClose={handlerToggleMenu(false)}>
                  <Box
                    className="header-navigation-list-mobile"
                    sx={{ width: 250, backgroundColor: '#001B79', height: '100%' }}
                    role="presentation"
                    onClick={handlerToggleMenu(false)}
                    onKeyDown={handlerToggleMenu(false)}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 2,
                        marginBottom: 1,
                        marginRight: 2,
                      }}>
                      <Box sx={{ width: '48px', height: '36px', position: 'relative' }}>
                        {companyLogo()}
                      </Box>
                      <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href={`/${locale ?? locale}`}
                        className="mobile-brand-text">
                        Briterra INC
                      </Typography>
                    </Box>
                    <List sx={{ height: '60%', overflow: 'auto', marginTop: 3 }}>
                      {pages.map((page, index) => (
                        <ListItem
                          key={index}
                          disablePadding
                          sx={{
                            width: '100%',
                            color: 'white',
                            marginBottom: 1,
                          }}>
                          <ListItemButton sx={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                            <Typography
                              variant="h6"
                              component="span"
                              sx={{ paddingLeft: 2 }}
                              title={page.label}
                              onClick={() => routeToSection(page.path)}
                              style={{ cursor: 'pointer' }}>
                              {page.label}
                            </Typography>
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Drawer>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                  gap: 3,
                  [theme.breakpoints.up('sm')]: {
                    justifyContent: 'flex-end',
                    marginRight: 14,
                  },
                }}
                className="header-navigation-list">
                {pages.map((page, index) => {
                  return (
                    <Typography key={index} variant="body1" noWrap component="span">
                      <span
                        className="header-navigation-list-text"
                        key={index}
                        onClick={() => routeToSection(page.path)}
                        title={page.label}>
                        {page.label.toLocaleUpperCase('tr-TR')}
                      </span>
                    </Typography>
                  );
                })}
              </Box>

              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                {<SelectLanguage locale={locale} pathname={pathname} color={'black'} />}
              </Box>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderPage;
