import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const List_Rest_Url = 'http://localhost:3000/resturants';
@Injectable({
  providedIn: 'root',
})
export class ListRestService {
  constructor(private _httpClient: HttpClient) {}

  // return list of resturants
  getAllRest() {
    return this._httpClient.get(List_Rest_Url);
  }

  // add resturants
  addResturant(data) {
    return this._httpClient.post(List_Rest_Url,data)
  }

  // delete resturant 
  deleteResturant(id){
    console.log("Service ID "+id)
    return this._httpClient.delete(`${List_Rest_Url}/${id}`)
  }
  // get one record on the basis of userId
  getById(id){
    return this._httpClient.get(`${List_Rest_Url}/${id}`)
  }
  // update record
  updateRest(id,data){
    return this._httpClient.put(`${List_Rest_Url}/${id}`,data)
  }
}
