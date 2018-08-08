/**
 * Function to execute an HTTP GET Ajax request
 * 
 * url {string} URL to which Ajax call is to be made
 * cb {function} Callback function which is called when HTTP call resulted in successful response or failure. The callback is passed the error as first argument (or null if no error) and response as second argument - in case of error, the underlying XMLHttpRequest object is passed. The response is assumed to be in JSON format and is parsed and sent.
 */
function get(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', event => {
      handleRequest(event.target, resolve, reject);     
    });
  
    xhr.open('GET', url, true);
    xhr.send();
  });
}

function handleRequest(response, resolve, reject) {
  if(response.readyState === 4) {
    if(response.status >= 200 && response.status < 300) {
      resolve(JSON.parse(response.responseText));
    } else {
      console.log('Server response:', response);
      reject(new Error('Server request failed.'));
    }
  }
}
