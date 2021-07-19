# Hahow recruit project

## How to use
```bash
git clone https://github.com/shanpig/hahow-recruit.git
cd hahow-recruit
npm install
npm run start
```

## Project structure
![project structure](https://user-images.githubusercontent.com/31932700/126054541-fe90548e-9c4e-43b5-a988-a794f7bc93fc.png)

1. **api/**
  Handles all the data fetching from hahow backend apis.
2. **fonts/**
  Stores all local fonts that are not served from a font provider.
3. **hooks/**
  Stores all the custom hooks that manipulates data (from api).
4. **pages/**
  Stores all the page components and index.js as the main entry point.
5. **utils/**
  Miscellaneous utility functions, currently has only debounce function.
6. **index.css**
  Includes normalize.css, font imports, and few default styling settings.
7. **variables.js**
  Contains all common variables used across different components. e.g. page width, tablet width, mobile width (for RWD puporses).

## Used third party library
1. **@testing-library, Jest**
  A library contains testing utilities for various use cases. Including developing with difference frameworks, firing events, testing function inputs/outputs, and so on.
2. **prop-types**
  A separated library from react since v15.5. It gives the ability to check datatypes of the props a component receives, thereby reducing the possible mistakes in data-passing
3. **react, react-dom**
  The core library of the react framework. **react** contains all the feature of react except for DOM accessibility, which is separated from react as **react-dom**. This gives the oppurtunity to reuse most of the similar usages between **react** and **react-native**.
4. **react-loading-icons**
  A small library contains several designful icons for loading.
5. **react-router, react-router-dom**
  Popular router library for react. Similar to react and react-dom, it separates the DOM manipulating part from the core to give advantage to react-native.
6. **react-scripts**
  Contains the cli commands for running/testing/building/ejecting the project.
7. **styled-components**
  A popular CSS-in-JS library. It creates components with class names that has a unique hash as a prefix to mitigate the class name collision problem. Also supports SASS/SCSS syntax, dynamic props passing, theming and various other use cases.
8. **web-vitals**
  A light-weight (~144kB) web performance report tools integrates to react that checks the vital signs of the web performance. Including : 
    1. **CLS (cumulative layout shift)**
    The total shift caused by other content that is rendered on the page flow later on. This might triggers an unpleasant reading experience while content is pushed down by newly rendered element.
    2. **FID (first interaction/input delay)**
    The delay before the page is interactable. Sometimes the eventListeners don't kick in immediately after page load, which is not ideal for user experience.
    3. **FCP (first contentful paint)**
    This refers to the first non white content that is painted on the webpage, which may indicate users that the page is almost done.
    4. **LCP (largest contentful paint)**
    The largest text block or image loaded into the viewport. This is a simplified solution to indicate meaningful paint to user, due to FMP(first meaningful paint) is often too complex to determine.
    5. **TTFB (time to first byte)**
    The delay before the first data return from the server. According to [web.dev](https://web.dev/time-to-first-byte/), a delay less than 600ms is better.

    <br/>
    These indicates the web performance and directly affects user experience.
    <br/><br/>
9. **Eslint**
  An code style checking library for enabling type checks, finding and fixing possible syntax problems, unifying team coding styles, etc. It is a convenient tool for checking consistency and maintain quality of your coding habits. There are many addons to integrate linting with various frameworks and styles. I use eslintint with react frameworks and airbnb styles with some self-disabled rules.
10. **sweetAlert2, sweetAlert2-react-contents**
  A responsive alert popup library for easy and elegant popup message. It is originally used in vanilla JS, but can be integrated with react with sweetalert-react-contents to provide styled components as alert title.


## When I will write comment
According to ***Clean code : A handbook of agile software craftsmanship***, the code could be and should always be ***self-explainable***, by creating naming convention, coding formality, programming mentality, and maintaining readability. 

Additionally, in a fast developing state, writing comments could be a burden : it implicitly means that dev team needs to not only maintain the code but also maintain the comments to keep up with the newest version. If not handled properly, the out-of-date comments might even cause more confusion.

If carefully follow the clean code logic, there are seldom chances that one needs to write comment. Therefore, as a firm believer of clean code, there is nearly no comments in my project most of the time. The reasons I might write comment are listed below :
1. For specifying known yet unsolved bugs.
2. For specifying project author or version.

## Difficulties and interesting problems I've met
  #### 1. CSP on github dev console
  While reading the hahow requirements document on github, I tested the api via dev console. What I received was a CSP policy violation error.
  ![image](https://user-images.githubusercontent.com/31932700/126056777-a18094ef-812d-4d62-bbe8-aa93d4c2a8e5.png)
  After some investigation, I found out this is not an error from hahow server, yet from github itself. 
  
  CSP (content security policy) specifies whether an origin can actively fetch other origin's resource. This prevents XSS attacks in a different way from the good old CORS policy, which prevents data being fetched by untrusted origin.
  
  The solution is rather simple (not even a problem to begin with). You cannot fetch any apis -- other than those approved by github -- within github origin, even in dev console.

  #### 2. Custom hooks
  Within my personal project, there was quite a lot of data manipulating within components. It was quite annoying when trying to refactor code, since the data manipulation was often not coupled with the data rendering.
  
  React custom hook actually solved the problem. 

  It acts like a stateful object, and exposes only neccessary informations and utility functions to be reused. 

  As for this project, the data is only shared within the same page, thus I didn't use ```useContent``` to provide cross-route data sharing. But if that is the case, then custom hook can also be implemented with ```useContent``` to create separate data flow, which in my mind resembles a simplified redux usage.

  #### 3. Implement debounce for repetitive animation
  There was a small animation added to the skillpoint value whenever the value changes. However, user can change the value very quickly (consecutive clicks on the increment/decrement button). This caused the animation to be a little bit buggy.

  A debounce function solves this problem : it only triggers the event handler only when user stops calling the debounced function for a certain amount of time.
