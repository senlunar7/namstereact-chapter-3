// Chapter-3 
import React from "react";
import ReactDOM from "react-dom/client";
// -- This is a JSX -----//
// const heading = <h1 id="title" key="h1">hellow world</h1>

//---This is a functional component i.e. Title component---//
const Title = () => {
 return <h2>this is title</h2>
};
const sum=12

// This is a reactElement and is returned below in the HeaderComponent
const heading1 = (
  <h1 id="title" key="h1" className="headings">Hellow ...</h1>
);
console.log("heading1")

// this is a component which is returned in HeaderComponent as a component and as a function
const Heading1 = () => {
  return <h1 id="title" key="h1" className="headings">Hellow from Heading1</h1>
};
const HeaderComponent = ()=> {
  return (
  <div>
    {/* calling heading1 react element */}
    {heading1}

      {/* calling Heading1 react element */}
    <Heading1/>

      {/* calling Heading1 as js function */}
    {Heading1()}
      {/* calling Title component as function  */}
    {Title()}
      {/* normal JS work */}
    {sum+123}
    <h1> hellow world</h1>
    </div>
  );
  
};


const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<HeaderComponent/>);

