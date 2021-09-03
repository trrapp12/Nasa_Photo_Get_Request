(() => {
  window.addEventListener('load', ()=> {
    console.log("line 3: entered script.js file");
    // initializes http request variable
    var httpRequest;
    // adds event listener to the button going to make the call
    var requestButton = document.getElementById('makeRequestButton').addEventListener('click', makeRequest);

    // make request

    // receive response


  })
})();
