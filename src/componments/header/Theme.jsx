import React from 'react';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';

export function DarkTheme() {
  return (
    <>
      <IoMoonOutline /> <span>dark mode</span>
    </>
  );
}

export function LightTheme() {
  return (
    <>
      <IoMoon /> <span>light mode</span>
    </>
  );
}
