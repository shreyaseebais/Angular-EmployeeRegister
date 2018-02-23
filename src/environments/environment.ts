// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebaseConfig: {
    apiKey: "AIzaSyC6bo3bFC15hYnXJd2xJOl6YGjpTxDSFB8",
    authDomain: "employee-register-8e857.firebaseapp.com",
    databaseURL: "https://employee-register-8e857.firebaseio.com",
    projectId: "employee-register-8e857",
    storageBucket: "employee-register-8e857.appspot.com",
    messagingSenderId: "742765035050"
  }
};
console.log(environment);