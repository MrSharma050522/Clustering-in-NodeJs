const schedule = require('node-schedule');
const axios = require('axios');
console.log("hitted");

const hitTestApi = async () => {
    try {
        const apiEndpoint = `http://localhost:8080` // Localhost
        // const apiEndpoint = `http://65.0.23.165:5003/api/query/updateVirtualPaymentsInDB` //Test
        //const apiEndpoint = `http://13.233.26.162:5003/api/query/updateVirtualPaymentsInDB` //Prod
        // const apiEndpoint = `https://quotationerp.decorpot.com/api/query/updateVirtualPaymentsInDB` //Prod
        const apiPayload = {}

        const response = await axios.get(apiEndpoint)

        console.log("Response From Cluster", response.data)

    }
    catch (error) {
        console.log('Error -> ', error)
        console.error(error)
    }
}
setInterval(async () => {
    const date = new Date().toLocaleString();
    console.log("Hitting api at: ", date);
    await hitTestApi();
}, 500); 

// schedule.scheduleJob('*/15 * * * *', async () => {
//     const date =( new Date()).toDateString(0);

//     console.log("Hitting api at: ", date);
//     await hitTestApi();
// });