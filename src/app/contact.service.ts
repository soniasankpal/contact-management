import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  

  API_URL: string = "/api/";
  constructor(private backendService:BackendService,private httpClient: HttpClient) { }
 
  getContacts(){    
   let contacts=this.backendService.createDb();
  // console.log(contacts)
   return contacts;
  }
  getContact(contactName){
    let contacts=this.backendService.createDb();
    let data;
    for(let i=0;i<contacts.length;i++)
    {
      
      if(contacts[i].DisplayName == contactName) {
        data= contacts[i]
        break;
        }
    }
    //console.log(data)
    return data;

  }
   

}
