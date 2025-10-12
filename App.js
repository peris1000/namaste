import React from 'react';
import ReactDOM from 'react-dom/client';

// React element
const elemheading = React.createElement(
  'h1',
  { id: 'heading' },
  'Namaste react'
);
console.log(elemheading);

// JSX - converted to react element - transpiled to js by parcel - babel compiler
const heading = (
  <h1 id="heading" tabIndex="1">
    Namaste react using JSX
  </h1>
);
console.log(heading);

const fn1 = () => true;

const fn2 = () => {
  return true;
};

// React component - name should start by capital letter

// class-based component - old (js classes)

// functional component - new (js functions) => Returns JSX (a react element)
// To render it babel needs to be like "<ReactComponent />"
const Title = () => (
  <h1 id="head" tabIndex="1">
    Namaste react using component
  </h1>
);
const number = 10000;
const title = (
  <h1 id="head" tabIndex="1">
    simple react element
  </h1>
);
const HeadingComponent = () => (
  <div id="container">
    <Title />
    {Title()}
    {title}
    <h2>{number}</h2>
    <h1 className="heading">Namaste functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(<HeadingComponent />);
