const axios = require('axios');

async function poll() {
  try {
    const response = await axios.get('http://localhost:3001/poll');
    console.log(response.data);
    setTimeout(poll, 500);  // wait for half a second before next poll
  } catch (error) {
    console.error(error);
    setTimeout(poll, 5000);  // wait for 5 seconds before next poll in case of an error
  }
}

poll();  // start polling
