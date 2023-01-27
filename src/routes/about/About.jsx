import React from 'react';
import BgObscure from '../../components/BgObscure/BgObscure';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import {Helmet} from 'react-helmet-async';
import Footer from '../../components/footer/Footer';
import BgOrbRight from '../../components/BgOrbRight/BgOrbRight';
import GenericSubtitle from '../../components/Generics/GenericSubtitle/GenericSubtitle';
import GenericParagraph from '../../components/Generics/GenericParagraph/GenericParagraph';
import AboutParagraph from '../../components/AboutParagraph/AboutParagraph';
import GenericHeader from '../../components/Generics/GenericHeader/GenericHeader';
import SmokeSection from '../../components/Layout/SmokeSection/SmokeSection';

const About = () => {
  return (
    <>
      <Helmet> 
        <title> About me - Nunes Bispo</title>
        <meta 
        name="description" 
        content="Learn about my experience as a frontend developer and advisor in private security,
         including my skills and past projects on this page"/>
      </Helmet> 
      <BgObscure>
        <BgOrbRight/>
        <SmokeSection>
          <GenericHeader headerText='About'/>
          <GenericSubtitle subtitleText="Let's talk about me"/>
          <GenericParagraph paragraphText={<AboutParagraph/>}/>
        </SmokeSection>
        <ProfileCard/>
      </BgObscure>
      <Footer/>
    </>
  )
}

export default About