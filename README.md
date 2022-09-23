# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - REST Countries API with color theme switcher solution](#frontend-mentor---rest-countries-api-with-color-theme-switcher-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
        - [Overall showcase](#overall-showcase)
        - [Click on Country Card](#click-on-country-card)
        - [Click on one of border countries](#click-on-one-of-border-countries)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
      - [Links to the PRs](#links-to-the-prs)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- [x] See all countries from the API on the homepage with pagination
- [x] Search for a country using an `input` field
- [x] Filter countries by region
- [x] Click on a country to see more detailed information on a separate page
- [x] Click through to the border countries on the detail page
- [x] Toggle the color scheme between light and dark mode

### Screenshot

##### Overall showcase
<details close>
<summary>See the gif</summary>

![chrome_9P6ClJGS7X](https://user-images.githubusercontent.com/35031228/192046277-d99a403e-00f0-447d-8853-8b1a519e55ef.gif)

</details>

##### Click on Country Card
<details close>
<summary>See the gif</summary>

![chrome_hPrIbgFHI8](https://user-images.githubusercontent.com/35031228/192046501-9aab5cf4-3b93-4418-99c8-82e0011d6207.gif)

</details>

##### Click on one of border countries
<details close>
<summary>See the gif</summary>

![chrome_B7hmXk7BNL](https://user-images.githubusercontent.com/35031228/192047067-c37947d5-4b7f-452c-b6dd-0b6aee68f3d6.gif)

</details>

### Links

- [Add solution URL here](https://your-solution-url.com)
- [Live Site](https://fem-rest-countries-api-vc.vercel.app/)

## My process

### Built with

- [React](https://reactjs.org/)
- [React Router - v6](https://reactrouter.com/en/v6.3.0)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite](https://vitejs.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### What I learned

I learned about `use development branch`, `useReducer` and `useContext` hooks.

`use development branch` - I was involved in a group project with Chingu where I learned about using development branch to develop/revise the codebase and avoid push any changes to `main` branch. I found this workflow is neat, and I can check to make sure the code is work properly before pushing to `main` branch. I decided to implement this workflow in this project. The commit history looks a bit messy since I made a few mistakes here and there.

A few things that I could improve:
- Keep one type fix in one PR 😅
- Remember to check which branch, main or development when open pull request
  - I merged the change to `main` instead of `development` accidentally
- Try to remember add type and a clear message:
  - e.g. `fix: something` (see `Commit Message Format` in resources below)

<hr>

`useReducer` - this hook is pretty interested to use. I have not gone deep on this hook yet, but I tried this little trick and use `darkMode` as example. With `useState` hook, it needs to have 2 lines of code to make the button toggle-able. While, `useReducer` hook only needs 1 line of code. Since it has a few lines of code and don't really see huge different. I did this for curiosity. However, if the codebase has many `useState` hooks, I think it definitely is worth to use `useReducer` instead. 

<details close>
<summary>useState version</summary>

```js
const [darkMode, setDarkMode] = useState(false);
const setMode = () => setDarkMode(!darkMode);

<HeaderBar onClick={setMode} isDark={darkMode} />

// the button
<button
  type="button"
  onClick={onClick}
>
  {isDark ? <DarkTheme /> : <LightTheme />}
</button>
```
</details>

<details close>
<summary>useReducer version</summary>

```js
const [darkMode, setDarkMode] = useReducer((prevMode) => !prevMode, false);

<HeaderBar onClick={setMode} isDark={darkMode} />

// the button
<button
  type="button"
  onClick={onClick}
>
  {isDark ? <DarkTheme /> : <LightTheme />}
</button>
```
</details>

<hr>

`useConext` - this hook is pretty awesome and nice. You can move your `useState` hooks and functions to context file(s), and keep the codebase clean in the component files. This helps me to avoid props drilling and I sometimes get confused about names that I pass through props. I also attached 2 links to the pull request that I moved `useState` hooks and functions to context folder. 

I originally had everything in one context file - `CountriesContext.jsx`, but the codebase doesn't look pretty due to long list inside value and mixed of countries and pagination related `useState` hooks. I decided to move `Pagination` related `useState` and `functions` to `PaginationConext.jsx`.

<details close>
<summary>the Pagination codebase - before</summary>

```js
function Pagination() {
  const [countriesPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(5);

  const idxOfLastCountries = currentPage * countriesPerPage;
  const idxOfFirstCountries = idxOfLastCountries - countriesPerPage;
  const currentCountries = list.slice(idxOfFirstCountries, idxOfLastCountries);

  const totalPages = Math.ceil(list.length / countriesPerPage); // 21
  const pageNumbers = [...new Array(totalPages + 1).keys()].slice(1);
  const displayPages = pageNumbers.slice(startPage, endPage);

  const handleNext = (page) => {
    const FIVE = displayPages.length;
    const condition = page <= Math.floor(FIVE / 2);
    if (condition) {
      setCurrentPage(page + 1);
      setStartPage(0);
      setEndPage(5);
    } else {
      setCurrentPage(page >= totalPages ? totalPages : page + 1);
      setStartPage(page >= totalPages - 2 ? totalPages - 5 : startPage + 1);
      setEndPage(page >= totalPages ? totalPages : endPage + 1);
    }
  };

  const handlePrev = (page) => {
    const condition = page > totalPages - 2;
    if (condition) {
      setCurrentPage(page - 1);
      setStartPage(condition ? totalPages - 5 : startPage - 1);
      setEndPage(condition ? totalPages : endPage - 1);
    } else {
      setCurrentPage(page <= 1 ? 1 : page - 1);
      setStartPage(startPage <= 0 ? 0 : startPage - 1);
      setEndPage(endPage <= 5 ? 5 : endPage - 1);
    }
  };

  return (
    <section className="flex items-center justify-center gap-4">
      {/* remove for display purpose */}
    </section>
  );
}
```

</details>

<details close>
<summary>the Pagination codebase - after</summary>

```js
import React, { useContext } from 'react';
import PaginationContext from '../../context/PaginationContext';

function Pagination() {
  const { currentPage, displayPages, handleNext, handlePrev } =
    useContext(PaginationContext);

  return (
    <section className="flex items-center justify-center gap-4">
      {/* remove for display purpose */}
    </section>
  );
}
```

</details>

#### Links to the PRs

- [Main.jsx - pre-context (pull request #19)](https://github.com/victoriacheng15/fem-rest-countries-api/pull/19/files)
- [Pagination.jsx - pre-context (pull request #29)](https://github.com/victoriacheng15/fem-rest-countries-api/pull/29)

### Continued development

A couple of things that I would like to add for the future:
-  Add React Testing Library
-  Add `try and catch` to handle if there is an error
-  Add a favicon icon

### Useful resources

- [useReducer is BETTER than useState By Dave Gray](https://www.youtube.com/watch?v=26ogBZXeBwc&list=PL0Zuz27SZ-6PSdiQpSxO9zxvB0ns6m3ta&index=4&t=3s) 
  - This helps me to see how I can combine `useState` hooks into one `useReducer`
- [Commit Message Format](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)
  - This has helped me how to organize my commit messages based on the type (e.g. build, feat, docs, fix...etc.)


## Author

- Frontend Mentor - [@victoriacheng15](https://www.frontendmentor.io/profile/victoriacheng15)
- Github - [@victoriacheng15](https://github.com/victoriacheng15)
- Twitter - [@viktoriacheng15](https://twitter.com/viktoriacheng15)



## Acknowledgments

As always, a huge thank you to Frontend Mentor for providing this opportunity to allow me to practice `React` and went deep div into `React Router` and `useContext` hook.

