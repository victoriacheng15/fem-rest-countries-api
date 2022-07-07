import React from 'react';
import InputElement from '../search/InputElement';
import Dropdown from '../search/Dropdown';

function Main() {
  return (
    <main className="min-h-screen py-7 bg-lightGray-800 dark:bg-darkBlue-800">
      <div className="w-11/12 mx-auto">
        <section className="flex flex-col gap-12">
          <InputElement />
          <Dropdown />
        </section>
        <section>{/* <h2>country card gallary</h2> */}</section>
      </div>
    </main>
  );
}

export default Main;
