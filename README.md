# MyApp
This project is PoC for having a functional Vue widget on an Angular environment
## Environment setup
This demo comes bundled with Angular 7.1.4
* Clone the repo.
* Install dependencies `npm install`
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/heroes` to see the demo.
The app will automatically reload if you change any of the Angular source files.
##  Vue Transpilation
Vue code needs to be transpiled to be integrated into the Angular project.
To transpile Vue code we rely on `vue-loader` and `babel-loader`, this is already configured on `webpack.config.js`.
In case of any modifications to the Vue components, it is necessary to run `npx webpack` to rebuild the transpiled Vue code
## How to easily include this code into an existing Angular Project
Copy `transpiled.js` file on the desired location and reference it as usual