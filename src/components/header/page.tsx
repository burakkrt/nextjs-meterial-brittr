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
    return (
      <Image src="/images/Next.js-logo.png" alt="Company Logo" fill quality={100} sizes="56vw" />
    );
  }

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}>
      <Box sx={{ backgroundColor: '#B31312' }}>
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
                <Typography variant="subtitle2" component="span">
                  +90 555 555 55 55
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
                  href="/"
                  color="white"
                  sx={{ ':hover': { textDecoration: 'underline' } }}
                  variant="subtitle2">
                  info@firmadi.com.tr
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: { sm: 'block', md: 'none' } }}>
              {<SelectLanguage locale={locale} pathname={pathname} color={'white'} />}
            </Box>
          </Box>
        </Container>
      </Box>
      <Toolbar disableGutters>
        <Container
          maxWidth="xl"
          sx={{
            borderBottom: '1px solid rgba(0,0,0,0.2)',
            padding: '0.5rem 0',
            [theme.breakpoints.up('sm')]: {
              padding: '1rem 0',
            },
          }}>
          <Box sx={{ color: '#191919', display: 'flex' }}>
            <Box
              sx={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                display: { xs: 'none', md: 'flex' },
              }}>
              <Box sx={{ width: '68px', height: '48px', position: 'relative' }}>
                {companyLogo()}
              </Box>
              <Typography
                variant="h4"
                noWrap
                component="a"
                href={`/${locale ?? locale}`}
                sx={{
                  fontWeight: 900,
                  color: 'inherit',
                  textDecoration: 'none',
                  fontFamily: 'Macondo',
                }}>
                FİRMA ADI
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
                  sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none',
                  }}>
                  FİRMA ADI
                </Typography>
              </Box>

              {/* Only Mobile Visible */}
              <Box sx={{ display: { xs: 'flex', md: 'none' }, position: 'relative' }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handlerToggleMenu(true)}
                  color="inherit">
                  <MenuIcon />
                </IconButton>

                <Drawer anchor="right" open={mobileRightMenu} onClose={handlerToggleMenu(false)}>
                  <Box
                    className="header-navigation-list-mobile"
                    sx={{ width: 250, backgroundColor: '#BF3131', height: '100%' }}
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
                        sx={{
                          fontWeight: 900,
                          color: 'white',
                          textDecoration: 'none',
                          fontFamily: 'Macondo',
                        }}>
                        FİRMA ADI
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
                            <Typography variant="h6" component="span" sx={{ paddingLeft: 2 }}>
                              <Link href={`/${locale}/${page.path}`} style={{ color: 'inherit' }}>
                                {page.label}
                              </Link>
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
                    justifyContent: 'center',
                  },
                }}
                className="header-navigation-list">
                {pages.map((page, index) => (
                  <Typography key={index} variant="body1" noWrap component="span">
                    <Link
                      className="header-navigation-list-text"
                      key={index}
                      href={'/' + (locale && locale) + page.path}
                      onClick={() => mobileRightMenu && handlerToggleMenu(false)}
                      style={{ color: '#352F44' }}
                      title={page.label}>
                      {page.label.toLocaleUpperCase('tr-TR')}
                    </Link>
                  </Typography>
                ))}
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
