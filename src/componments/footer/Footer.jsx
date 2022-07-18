import React from 'react';
import { Github, Twitter, Linkedin } from './Socials';

function Footer() {
  return (
    <footer className="py-4 bg-lightGray-800 text-darkBlue-900 dark:bg-darkBlue-800 dark:text-lightGray-800">
      <div className="flex items-center justify-center w-11/12 mx-auto">
        <p className="flex items-center gap-2">
          Coded by Victoria | <Github /> | <Linkedin /> | <Twitter />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
