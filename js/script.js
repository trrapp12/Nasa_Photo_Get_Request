(() => {
  window.addEventListener('load', ()=> {
    // initializes http request variable
    var httpRequest;
    // testing log to make sure file is connecting
    console.log("line 3: entered script.js file");
    // initializes the api_key NOTE THIS IS A HUGE SECURITY RISK.  WELL, NOT REALLY SINCE THE API IS ONLY TO NASA TO GET PHOTOS, BUT THIS WHOLE REPOSITORY SHOULD BE SECURED LATER USING git-remote-gcrypt
    var api_key = "gQBHOwp1QgftmdeZ3bO3KTnskprBBUwud1vmWgRz";
    var requestURL = "https://api.nasa.gov/planetary/apod?api_key=gQBHOwp1QgftmdeZ3bO3KTnskprBBUwud1vmWgRz";

    // adds event listener to the button going to make the call
    var requestButton = document.getElementById('makeRequestButton').addEventListener('click', makeRequest);


    function makeRequest() {
      console.log("line 16: entering makeRequest()");
       httpRequest = new XMLHttpRequest();

      if (!httpRequest) {
        console.log("giving up, not a xmlhttprequest");
        return false;
      } else {
        console.log("line 23: entering makeRequest() else statement");
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', "https://api.nasa.gov/planetary/apod?api_key=gQBHOwp1QgftmdeZ3bO3KTnskprBBUwud1vmWgRz", true);
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
          alert("success! we contacted NASA" + httpRequest.responseText);

        } else {
          console.log("line 40: failed alertContents() second condition")
          // FAIL SECOND CHECK: there's a problem with status
        }
      } else {
        console.log("line 44: failed alertContents() readyState condition. readyState is: " + httpRequest.readyState)
        // FAIL FIRST CHECK: there is a problem with the ready state
      }
    }
    // function to open the information
  });
})();
