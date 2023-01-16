# Assignment 6

## code working steps:

1. render body component with shimmer component
2. goto useEffect and call API function , runs fetch for given path, convets to json and setState to data
3. again render component with API data.

## featured done in file

1. added live data from swiggy
2. used image from cloudinary data
3. converted search to lowercase
4. return correct data in card component

## Best place to call API

- in useEffect
- 2 ways we can call API.

- 1st way : Load >> API call >> update UI with API data
- 2nd way: Load >> render UI with initial data / shimmer data >> API call >> update UI again using API data

## 2nd way is best because:

- 1st it renders component using initial/default data
- then it makes API call using useEffect once
- in useEffect state is updated.
- then it renders UI again with API data
