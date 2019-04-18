import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';

const STORAGE_KEY = 'Data';


@Injectable({
  providedIn: 'root'
})
export class OnlineDataServiceService {


  constructor(public http: HttpClient, @Inject(LOCAL_STORAGE)private localStorage: StorageService ) { }

  public getOnlineData(){

    let promise = new Promise((resolve, reject) => {
      let url = 'https://randomuser.me/api/?results=10';
      this.http.get(url).subscribe(res =>{
        this.localStorage.set(STORAGE_KEY, res)
        resolve(res)
      });
    });
    return promise;

  }

  public getCachedData(){

    let promise = new Promise((resolve, reject) => {
      resolve(this.localStorage.get(STORAGE_KEY))
    });

    return promise;
  }

  public getCachedUser(uuid){

    let promise = new Promise((resolve, reject) => {

      let users =  this.localStorage.get(STORAGE_KEY)['results'];
      let user = users.find( x => x.login.uuid == uuid );
      resolve(user)
    });

    return promise;
  }


}
