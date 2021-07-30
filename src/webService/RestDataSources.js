//import {RestUrls } from '../config/path'
import Axios from "axios";

export class RestDataSource {
  statusReq;
  constructor(url) {
    // Axios.defaults.withCredentials = true;
    this.URL = url;
  }

  async sendRequest(methode, url, callback, data) {
    callback(
      (
        await Axios.request({
          method: methode,
          url: url,
          data: data,
          headers: {
            'Content-Type': 'application/json'
          }
        })
      ).data
    );

  }
  async getStatus(url) {

    Axios(url)
      .then(resp => this.statusReq = resp.status);
    console.log(this.statusReq)
  }

  async getOne(id, callback) {
    this.SendRequest("get", `${this.URL}/${id}`, callback);
  }
  async getData(callback) {
    try {
      this.sendRequest("get", this.URL, callback);
    } catch (error) {
      console.log(error)
    }

  }
  async Post(data) {
    return await Axios.request({
      method: "post",
      url: this.URL,
      data: data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  async Login(data) {
    return Axios.post(this.URL, {
      "data": data

    })
  }
  async Delete(id) {
    await Axios.request({
      method: "delete",
      url: `${this.URL}/${id}`
    })
  }
  async Update(id) {
    await Axios.request({
      method: "update",
      url: `${this.URL}/${id}`
    })
  }


}