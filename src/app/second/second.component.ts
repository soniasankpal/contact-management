import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../contact.service';
import { HttpClient } from '@angular/common/http';
import * as fs from 'fs';
import { NgModule } from '@angular/core';

import { AppModule } from '../app.module';
import { CATCH_STACK_VAR } from '@angular/compiler/src/output/abstract_emitter';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit  {
  contact: any;
 
  constructor(private contactService: ContactService, private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {
    
    
    this.route.paramMap.subscribe(params => {
     let name =params.get('DisplayName')
     this.contact=this.contactService.getContact(name)
     
    })
  }

  uname :string; 
  updateName(uname):void
  {
  
    this.route.paramMap.subscribe(params => {
      let name =params.get('DisplayName')
      this.contact=this.contactService.getContact(name)
      
     })
    this.contact.DisplayName=uname;
   
    
     var updatedContact=this.contact;

     const fs = require('fs');
     (async () => {
      //...
    })()
     var contacts = require("../contacts_file.json"); 
     var theJSON = JSON.stringify(updatedContact);
     contacts.push(updatedContact);
    // //write JSON string to a file
     fs.writeFile('../contacts_file.json', theJSON, function(err)  {
     if (err) {
      throw err;
     }
      console.log("JSON data is saved.");
    });
    
    
    return this.contact;
  }


  unumber:number;
  updateNumber(unumber):void{
    console.log(unumber);
    this.route.paramMap.subscribe(params => {
      let name =params.get('DisplayName')
      this.contact=this.contactService.getContact(name)
    
     })

     this.contact.HomePhone=unumber;
    
    
     var updatedContact=this.contact;

     const fs = require('fs');
     (async () => {
      //...
    })()
     var contacts = require("../contacts_file.json"); 
     var theJSON = JSON.stringify(updatedContact);
     contacts.push(updatedContact);
    // //write JSON string to a file
     fs.writeFile('../contacts_file.json', theJSON, function(err)  {
     if (err) {
      throw err;
     }
      console.log("JSON data is saved.");
    });
    
    
    return this.contact;
  }
  

 
}
