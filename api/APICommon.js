import axios from 'axios';

let jsonUrl = 'https://jsonkeeper.com/b/INHP';
class APICommon {
  constructor() {
    this.getAxiosRequest = async function getAxiosRequest() {
      const headers = {
        'Content-Type': 'application/json',
        accept: 'application/json',
      };
      return axios.create({
        baseURL: jsonUrl,
        timeout: 30000,
        headers: headers,
      });
    };
  }
}

export default APICommon;
