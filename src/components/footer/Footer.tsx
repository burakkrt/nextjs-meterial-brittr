import { Container, Grid } from '@mui/material';
import React from 'react';

import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <Container maxWidth="xl">
          <Grid container columnSpacing={8}>
            <Grid item xs={6} className="footer-content">
              <h3 className="footer-content-company-name">Firma Adı</h3>
              <p className="footer-content-company-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aliquid, quidem est
                assumenda nulla aliquam labore provident itaque. Impedit dignissimos expedita,
                veniam vel nobis quos! Ducimus ad nemo et quibusdam.
              </p>
              <div>
                <Grid container columnSpacing={4}>
                  <Grid item xs={6}>
                    <div className="footer-content-contacts">
                      <div className="footer-content-contacts-item">
                        <h5>
                          <EmailIcon />
                          Mail
                        </h5>
                        <span>info@firmadı.com</span>
                      </div>
                      <div className="footer-content-contacts-item">
                        <h5>
                          <LocalPhoneIcon />
                          Phone
                        </h5>
                        <span>+212 000 00 00</span>
                      </div>
                      <div className="footer-content-contacts-item">
                        <h5>
                          <FmdGoodIcon />
                          Adress
                        </h5>
                        <span>
                          Ataköy 7-8-9-10. Kısım Mah. Çobançeşme E-5 Yanyol Cad Avrupa, 34000
                          Bakırköy/İstanbul
                        </span>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6} className="footer-content-right">
                    <div className="footer-content-socials">
                      <div className="footer-content-socials-item">
                        <LinkedInIcon />
                        <span>Linkedin</span>
                      </div>
                      <div className="footer-content-socials-item">
                        <InstagramIcon />
                        <span>İnstagram</span>
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
            <Grid item xs={6} className="footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.8885068325!2d28.847376128934485!3d41.00546324248513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1707211656489!5m2!1str!2str"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Grid>
          </Grid>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;