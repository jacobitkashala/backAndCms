//import {RestUrls } from '../config/path'
import Axios from "axios";

export class RestDataSource{
 
    constructor(base_url) {
        this.BASE_URL = base_url;
      }
    
      async sendRequest(methode, url, callback,data) {
        callback(
          (
            await Axios.request({
              method: methode,
              url: url,
              body:JSON.stringify(data) ,
              headers:{
                'Content-Type':'application/json'
              }
            })
          ).data
        );
        //this.getStatus();
      }
      getStatus(){
        (async () => {
        const reponse = Axios(this.BASE_URL);
          return reponse
        
      })();
      }  
      async getOne(id, callback) {
        this.SendRequest("get", `${this.BASE_URL}/${id}`, callback);
      }
      getData(callback) {
        try {
           this.sendRequest("get", this.BASE_URL, callback);
        } catch (error) {  
          console.log(error)
        }
       
      }
      async Create(data, callback) {
        this.SendRequest("post", this.BASE_URL, callback, data)
      }
      async Update(data, callback) {
        this.SendRequest("put", `${this.BASE_URL}/${data.id}`, callback, data);
      }
      async Delete(data, callback) {
        this.SendRequest("delete", `${this.BASE_URL}/${data.id}`, callback, data);
      }
      
}