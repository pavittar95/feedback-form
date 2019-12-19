import axios from "axios";
const endPoint = "http://api.dotpe.in/api";

export default class RestClient {
  static get(url) {
    return axios
      .get(`${endPoint}/${url}`)
      .then(response => {
        // handle success
        console.log(response);
        return response;
      })
      .catch(error => {
        // handle error
        console.log(error);
        return error;
      });
  }

  static post(url, body) {
    axios
      .post(`${endPoint}/${url}`, body)
      .then(response => {
        // handle success
        console.log(response);
        return response;
      })
      .catch(error => {
        // handle error
        console.log(error);
        return error;
      });
  }
}
