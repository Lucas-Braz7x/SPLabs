import React from 'react';
import { Container, Header, HeroSection, Cases, VideoContainer, Contact, Footer } from '../components';

export const Home = () => {
  return (
    <Container>
      <Header />
      <HeroSection />
      <Cases />
      <VideoContainer />
      <Contact />
      <Footer />
    </Container>
  );
};
