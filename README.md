

![Animation](https://user-images.githubusercontent.com/99739515/185765428-ae544d6b-a615-4572-a9e3-7967d588e7a3.gif)


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
