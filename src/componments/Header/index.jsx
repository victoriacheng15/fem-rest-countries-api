import React from 'react';
import { DarkTheme, LightTheme } from './Theme';
import { MaxWidthContainer } from '../../layouts';
import { Button } from '..';

function HeaderBar({ onClick, isDark }) {
  return (
    <header className="bg-lightGray-700 py-12 text-darkBlue-900 dark:bg-darkBlue-700 dark:text-lightGray-700 md:py-8">
      <MaxWidthContainer compClass="flex items-center justify-between">
        <h1
          data-testid="heading"
          className="text-[20px] font-bold md:text-[30px]"
        >
          Where in the world?
        </h1>
        <Button onClick={onClick} typeBtn="themeBtn">
          {isDark ? <DarkTheme /> : <LightTheme />}
        </Button>
      </MaxWidthContainer>
    </header>
  );
}

export default HeaderBar;
