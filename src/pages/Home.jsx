import React from 'react';
import { Container, Header, HeroSection, Cases, VideoContainer, Contact, Footer } from '../components';
import { Modal } from '../components/Ui/Modal';

export const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <HeroSection />
        <Cases />
        <VideoContainer />
        <Contact />
        <Footer />
      </Container>
      <Modal />
    </>
  );
};
