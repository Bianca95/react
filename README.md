# React JS

React JS first project

## Getting Started

Some good starting tutorials for intermmediate level would be the [Comprehensive React.js Guide](https://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/) in parallel with the [Official React Tutorial](https://facebook.github.io/react/tutorial/tutorial.html) and for more in-depth coding exercises, [Tutorials Point ReactJS Tutorial](https://www.tutorialspoint.com/reactjs/index.htm).

### Prerequisites
##### Ubuntu 16.04

#### Install node and npm

```
sudo apt-get update && sudo apt-get -y upgrade
```  
```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Install react

```
npm i -s react
```  
short for 
```
npm install --save react
```  
#### Create a new app  

Navigate to desired location for your project and run  
```
npm install -g create-react-app
create-react-app app-name
``` 

#### Directory layout

The created app will contain a *node_modules* folder that should stay where it is together with the *public* folder and *package.json* file. Create a *components* folder in the *src* folder to keep all the components in. Now the directory should look like this:  

app-name ->  
  node_modules -> etc  
  public ->  
    index.html  
  src ->  
    index.css  
    index.html  
    index.js  
    components ->  
      component.js

#### Create a component

When creating a component, you can either do it like this:

```
var Component = React.createClass({
  render: function(){
    return (
      <div>
        Hello World!
      </div>
    )
  }
});
```  
Or like this:  
```
class Component extends React.Component {
   render() {
      return (
         <div>
            Hello World!
         </div>
      );
   }
}
```

## Running the tests

To test your app locally, run  
```
cd app-name 
npm start
```