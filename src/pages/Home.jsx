import React from 'react';
import { Cases, Contact, Container, Footer, HeroSection, VideoContainer } from '../components';

export const Home = () => {
  return (
    <Container>
      <HeroSection />
      <Cases />
      <VideoContainer />
      <Contact />
      <Footer />
    </Container>
  );
};
