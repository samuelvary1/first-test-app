import axios from 'axios';
import config from 'config';
import { auth } from 'auth';


class Client {
  constructor(url='', headers={}) {
    this.url = url;
    this.headers = headers;
  }

  async get(slug='', params={}) {
    const response = await axios.get(`${this.url}${slug}`, { params, ...this.headers });
    return response
  }

  async post(slug='', data={}, params={}) {
    const response = await axios.post(`${this.url}${slug}`, data, this.headers, params);
    return response
  }

  async put(slug='', data={}, params={}) {
    const response = await axios.put(`${this.url}${slug}`, data, this.headers, params);
    return response
  }

  async del(slug='', params={}) {
    const response = await axios.del(`${this.url}${slug}`, { params, ...this.headers });
    return response
  }
}

class ConsoleApi extends Client {
  /* Put stuff here

	e.g.
  
  async getTacticAsset(params) {
     const response = await super.get('/native_advertising/buy_side/creative', params);
     return response.data;
   }

  */
}

// const ApiService = new ConsoleApi(config.CONSOLE_API_URL, { headers: auth.getToken() });
// const DruidService = new DruidApi(config.DRUID_URL, { headers: { Authorization: `Basic ${config.DRUID_TOKEN}` } });

export default Client;
export { 
  ConsoleApi,
  // ApiService,
  // DruidService
};
