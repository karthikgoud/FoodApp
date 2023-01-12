# Assignment 5

## questions

1. What is diffrence between Named export , default export and \* as export

- Named export uses no default word
  ex:
  const export sum = ()=>{
  }
  const export name= "xur"

  we import using { } like. Named export should be destructured while importing
  import {sum, name} from "./sum.js"

- You can create named exports two ways. In-line individually, or all at once at the bottom.

  export const name = "Jesse"
  export const age = 40

  or

  const name = "Jesse"
  const age = 40

  export { name, age }

- Default export
  We use default export when only one item in exported from file

  ex:
  const sum = ()=>{}
  export default sum

  we import as
  import sum from "./sum.js"

- as altName from "path" is used to export all items from file and can be used as object

  ex: altName.sum()

2. what is importance of config.js file in react

- config.js file is used to store hard coded data so that it can used in many locations just by importing it

  ex:
  config.js / constants.js

  const restaurantList = [{
  name:"KFC",
  place:"bangalore",
  rating:"4"
  },{
  name:"KFC",
  place:"bangalore",
  rating:"4"
  },{
  name:"KFC",
  place:"bangalore",
  rating:"4"
  }]

  import {restaurantList} from "path"

3. what are React hooks?

- Hooks are functions that let you “hook into” React state and lifecycle features from function components.
- A Hook is a special function that lets you “hook into” React features.

4. why do we need a useState hook

- It lets us add local state to React function components.
- It declares a “state variable”
- useState is a new way to use the exact same capabilities that this.state provides in a class.
- Normally, variables “disappear” when the function exits but state variables are preserved by React.

- The only argument to the useState() Hook is the initial state.

- It returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState().
