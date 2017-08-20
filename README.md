# React JS

React JS first project

## Getting Started

Some good starting tutorials for intermmediate level would be the [Comprehensive React.js Guide](https://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/) in parallel with the [Official React Tutorial](https://facebook.github.io/react/tutorial/tutorial.html) and for more in-depth coding exercises, [Tutorials Point ReactJS Tutorial](https://www.tutorialspoint.com/reactjs/index.htm).

### Prerequisites
##### Ununtu 16.04

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

The created app will contain a *node_modules* folder that should stay where it is together with the *package.json* file. The *public* folder can be deleted after moving the *index.html* file in the *src* folder. Now the *src* folder should look like this:  

src ->  
⋅⋅⋅index.css  
⋅⋅⋅index.html  
⋅⋅⋅js ->  
⋅⋅⋅⋅⋅⋅index.js  
⋅⋅⋅⋅⋅⋅components ->  
⋅⋅⋅⋅⋅⋅⋅⋅⋅component.js

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
#### index.html

Your index.html should look something like this:  
```
<!DOCTYPE html>
<html lang = "en">

   <head>
      <meta charset = "UTF-8">
      <title>React App</title>
   </head>

   <body>
      <div id = "app"></div>
      <script src = "js/index.js"></script>
   </body>

</html>
```  
Setting *div id* to *app* as root element for the app and adding the *index.js* script referencing to the app file.
```

## Running the tests

To test your app locally, run  
```
cd app-name 
npm start
```

<!-- ## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc -->
