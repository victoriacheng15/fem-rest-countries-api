import React from 'react';
import { Github, Twitter, Linkedin } from './Socials';
import { MaxWidthContainer } from '../../layouts';

function Footer() {
  return (
    <footer className="bg-lightGray-800 py-4 text-darkBlue-900 dark:bg-darkBlue-800 dark:text-lightGray-800">
      <MaxWidthContainer compClass="flex items-center justify-center">
        <p className="flex items-center gap-2">
          Coded by Victoria | <Github /> | <Linkedin /> | <Twitter />
        </p>
      </MaxWidthContainer>
    </footer>
  );
}

export default Footer;
