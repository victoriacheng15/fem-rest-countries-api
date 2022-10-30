import React from 'react';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';

export function DarkTheme() {
  return (
    <>
      <IoMoon /> <span>dark mode</span>
    </>
  );
}

export function LightTheme() {
  return (
    <>
      <IoMoonOutline /> <span>light mode</span>
    </>
  );
}
