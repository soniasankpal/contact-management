import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';


import contacts_file from './contacts_file.json';



@Injectable({
  providedIn: 'root'
})

export class BackendService implements InMemoryDbService  {

  constructor() { }
  createDb()
  {
    

    let contact_list:{  
      EmailAddress:string,
      Relatedname:"",
      HomeAddress2:"",
      Anniversary:"",
      FirstName:"",
      BusinessAddress2:"",
      Department:"",
      DisplayName:string,
      HomeState:"",
      BusinessCountry:"",
      HomeStreet:"",
      Birthday:"",
      HomeCountry:"",
      Pager:"",
      Categories:"",
      HomeCity:"",
      Email3Address:"",
      HomeFax:"",
      Gender:"",
      Notes:"",
      CountryCode:"",
      JobTitle:"",
      BusinessAddress:"",
      WebPage2:"",
      MobilePhone:"",
      Organization:"",
      HomePhone:"",
      Email2Address:"",
      LastName:"",
      Nickname:"",
      BusinessFax:"",
      HomePostalCode:"",
      BusinessPhone:"",
      BusinessPostalCode:"",
      WebPage:"",
      BusinessCity:"",
      BusinessState:""}[]=contacts_file;
     
      return contact_list;
}
}
