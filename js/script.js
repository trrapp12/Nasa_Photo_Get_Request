(() => {
  window.addEventListener('load', ()=> {
    // initializes http request variable
    var httpRequest;
    // testing log to make sure file is connecting
    console.log("line 3: entered script.js file");
    // creates a random number between 1 and 100
    var randInt = Math.floor((Math.random() * 11) + 1);
    // creates count parameter
    var countParam = "&count=" + randInt.toString();

    // initializes the api_key NOTE THIS IS A HUGE SECURITY RISK.  WELL, NOT REALLY SINCE THE API IS ONLY TO NASA TO GET PHOTOS, BUT THIS WHOLE REPOSITORY SHOULD BE SECURED LATER USING git-remote-gcrypt
    var api_key = "gQBHOwp1QgftmdeZ3bO3KTnskprBBUwud1vmWgRz";
    var requestURL = "https://api.nasa.gov/planetary/apod?api_key=gQBHOwp1QgftmdeZ3bO3KTnskprBBUwud1vmWgRz" + countParam;

    // adds event listener to the button going to make the call
    var requestButton = document.getElementById('makeRequestButton').addEventListener('click', makeRequest);

    function displayJSON (json) {
      var displayJSON = document.getElementById('json-display').innerHTML = json
    };

    // function displayParsedJSON (json) {
    //   console.log("line 24: entering displayParsedJSON().  Value for json is: " + json + "type of json is: " + typeof json);
    //   var firstParse = JSON.parse(json);
    //   var secondParse = function forInJSON (json) {
    //     for (var key in json) {
    //
    //     }
    //   }
    //   console.log("line 26: firstParse is: " + firstParse + " type of firstParse is: " + typeof firstParse)
    //   var parsedJSON = document.getElementById('json-parsed').innerHTML = firstParse;
    // };


    function makeRequest() {
      console.log("line 16: entering makeRequest()");
       httpRequest = new XMLHttpRequest();

      if (!httpRequest) {
        console.log("giving up, not a xmlhttprequest");
        return false;
      } else {
        console.log("line 23: entering makeRequest() else statement");
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', requestURL, true);
        httpRequest.send();
      }
    }
    // function to handle the request
    function alertContents () {
      console.log("line 31: entering alertContents(), httpRequest is: " + httpRequest);
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        // FIRST CHECK: everything is good, continue
        if (httpRequest.status === 200) {
          console.log("line 35: passed second condition, 200 validation occurred.  status is: " + httpRequest.status)
          // SECOND CHECK: everything is good, continue
          displayJSON(httpRequest.responseText);
          // displayParsedJSON(httpRequest.responseText)
        } else {
          console.log("line 40: failed alertContents() second condition")
          // FAIL SECOND CHECK: there's a problem with status
        }
      } else {
        console.log("line 44: failed alertContents() readyState condition. readyState is: " + httpRequest.readyState)
        // FAIL FIRST CHECK: there is a problem with the ready state
      }

      return httpRequest.responseText;
    }


    // function to open the information
  });
})();
