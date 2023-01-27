import React from 'react';
import BgObscure from '../../components/BgObscure/BgObscure';
import ContactGlass from '../../components/ContactGlass/ContactGlass';
import {Helmet} from 'react-helmet-async';
import Footer from '../../components/footer/Footer';
import BgOrbLeft from '../../components/BgOrbLeft/BgOrbLeft';
import GenericSubtitle from '../../components/Generics/GenericSubtitle/GenericSubtitle';
import GenericHeader from '../../components/Generics/GenericHeader/GenericHeader';
import SmokeSection from '../../components/Layout/SmokeSection/SmokeSection';

const Contact = () => {
  return (
    <> 
    <Helmet>
        <title> contac titulo</title>
        <meta name="description" content="palabras clave referentes a contact ver redes sociales"/>
    </Helmet>
      <BgObscure>
        <BgOrbLeft/>
        <ContactGlass/>
          <SmokeSection>
            <GenericHeader headerText='Contact'/>
            <GenericSubtitle subtitleText="djjd uicn nsjud jgiej huw uer"/>
          </SmokeSection>
      </BgObscure>
      <Footer/>
    </>
  )
}

export default Contact