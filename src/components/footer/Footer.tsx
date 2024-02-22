import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IFooterProps } from './types';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Footer: React.FC<IFooterProps> = ({ pages, locale }) => {
  const t = useTranslations('Footer');

  const routeToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <div className="footer" id="footer">
        <Container maxWidth="xl">
          <Grid container columnSpacing={8}>
            <Grid item xs={12} md={6} className="footer-content">
              <h3 className="footer-content-company-name">{t('brandName')}</h3>
              <p className="footer-content-company-desc">{t('text')}</p>
              <div>
                <Grid container columnSpacing={4}>
                  <Grid item xs={12} lg={6}>
                    <div className="footer-content-contacts">
                      <div className="footer-content-contacts-item">
                        <h5>
                          <EmailIcon />
                          {t('mailTitle')}
                        </h5>
                        <Typography
                          component="a"
                          href="mailto:info@briterrainc.com"
                          color="white"
                          sx={{ ':hover': { textDecoration: 'underline' } }}
                          variant="subtitle2">
                          info@briterrainc.com
                        </Typography>
                      </div>
                      <div className="footer-content-contacts-item">
                        <h5>
                          <LocalPhoneIcon />
                          {t('phoneTitle')}
                        </h5>
                        <Typography
                          component="a"
                          href="tel:+0212 458 02 09"
                          variant="subtitle2"
                          color="white">
                          +90 212 458 02 09
                        </Typography>
                      </div>
                      <div className="footer-content-contacts-item">
                        <h5>
                          <FmdGoodIcon />
                          {t('addressTitle')}
                        </h5>
                        <span>
                          Avrupa Konutları Ataköy 7-8-9-10. Kısım Mah Çobançeşme E-5 Yan Yol Cad.1
                          No: 8/1 D:74 Bakırköy-İstanbul-Türkiye
                        </span>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} lg={6} className="footer-content-right">
                    <div className="footer-content-socials">
                      <div className="footer-content-socials-item">
                        <LinkedInIcon />
                        <span>Linkedin</span>
                      </div>
                      <div className="footer-content-socials-item">
                        <InstagramIcon />
                        <span>Instagram</span>
                      </div>
                      <div className="footer-content-socials-item">
                        <FacebookIcon />
                        <span>Facebook</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} md={6} className="footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.5146785383226!2d28.827325962599094!3d40.992106871233446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa36459f2959f%3A0xe457932c06176d29!2sAvrupa%20Residence%20%26%20Office%20Atak%C3%B6y!5e0!3m2!1str!2str!4v1707847180681!5m2!1str!2str"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Grid>
          </Grid>
          <Grid container className="footer-bottom">
            <Grid item xs={12} sm={6} className="footer-bottom-pages">
              {pages?.map((page, index) => (
                <Link key={index} href="#">
                  {page.label}
                </Link>
              ))}
            </Grid>
            <Grid item xs={12} sm={6} className="footer-bottom-copyright">
              {new Date().getFullYear()} © Briterra INC | {t('copyright')}
            </Grid>
          </Grid>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
