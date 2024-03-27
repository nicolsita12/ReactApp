import axios from 'axios';
const ApiDelivery = axios.create({
baseURL: 'http://192.168.2.11:3001/api',
headers: {
'Content-Type': 'application/json'
}
});
export {ApiDelivery};