const bigButton = document.querySelector('#uwu')

const message = () => {
    alert('Whatever ya say boomer!!!')
}

bigButton.addEventListener('click', message)


var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'e07644adba114a18935ae6b3dd14bf3c',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");


try {blah()} 
catch{bad} rollbar.critical(err)