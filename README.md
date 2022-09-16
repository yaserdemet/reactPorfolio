


![Animation](https://user-images.githubusercontent.com/99739515/185923125-9b95c63b-d886-4ff3-a0e9-4c5bb8068b59.gif)


[📍 click here to check my personel website](https://react-porfolio-peach.vercel.app)

##### In this project i have inspired popular react project in Github repos, adapt it according to myself and added new features.
### What i used;
👉 React Router Dom

👉 Props and Component Logic

👉 Conditional Rendering

👉 React Hooks

👉 3rd party libraries

👉 React icons

👉 Js iteration methods.

👉 Sass Css

👉 Css animation

👉 Bootstrap 

👉 TypeWriter and Github Calendar 

👉 Deployment with Vercel and Netlify



## To make animation writing first; 
- import Typewriter from "typewriter-effect"


```
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
       
          "your message here"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

````

## To use Github Calendar first;
- import GitHubCalendar from "react-github-calendar"

```
 <GitHubCalendar
        username="your accountName of Github"
        blockSize={15}
        blockMargin={5}
        color="green"
        fontSize={16}
      />

```
