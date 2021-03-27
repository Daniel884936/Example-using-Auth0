# AuthApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

##--------------------------------------------------------Auth0--------------------------------------------

- You have to register in Auth0 and create an auth0 angular aplication 
- In this aplication you have to create a json config with this name: "auth_config.json" path: "AuthApp/"

json body: 
{
  "domain":"your current domin from auht0",
  "clientId": "your current clientId from auht0"
}

domain and clientId both are from Auth0

- execute `ng serve`


