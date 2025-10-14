# namaste react

https://parceljs.org/

- package manager -> npm
- bundler -> parcel (node package) dev buiold, local server, HMR (hot module replacement), File watching algo in c++, faster build due to caching (.parcel-cache folder), img optimazation, minification, bundling, compressing, differential bundling for older browsers versions support, https support
- executor -> npx -> executes npm packages

```
npm init -y # quick init no questions asked
npm install -D parcel # install as dev dependency
echo "/node_modules" > .gitignore
```

```
npm install react react-dom
npx parcel index.html # execute parcel passing the starting point of our app: index.html (in dist folder)

npx parcel build index.html # build for production (in dist folder)
```


https://browserslist.dev/

browserlist -> for multiple browser versions to support, it will guarantee your app support for the versions mentioned in your config (package.json).


Script shortcuts
```
# replace npx parcel index.html
npm run start
or
npm start

# replace npx parcel build index.html
npm run build
```

https://babeljs.io/

A library to convert JSX syntaxed expressions to react elements. 
ie. give
```
<h1 id="heading">Namaste react using JSX</h1>
```
to babel's website playground.





### 2 Types of Export
- Default -> export default MyList
  Import MyList from '...'
- Named -> export const MYLIST = [...]
  Import {MYLIST} from '...'



### React Hooks
Normal JS functions (facebook devs created that inside react)

- useState - state variables ie. const [listOfRestaurants, setListOfRestaurants] = useState(RESTAURANT_LIST);
  It uses Reconcilication Algorithm (aka ReactFiber)
- useEffect - runs after rendering of the component
  - if no dependency array its called on every render
  - if dependency array = [] its called on init render
  - if dependency array contains dependencies ie.btnName its called on init render and every time the btnName changes


Read about js optional chaining json?.data?.data[0]...


shimmer ui -> show loading signs
https://www.npmjs.com/package/react-shimmer-effects


react.router-dom
https://reactrouter.com/home

npm i react-router-dom


2 types of routing
- Client side routing
- Server side routing
  