import { Component,OnInit } from '@angular/core';
import contacts from './contacts.json';
import { ContactService } from './contact.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'contact-management-app';
  
  contacts: any[] = [];
  constructor(private contactService: ContactService,private router: Router) { }
  
 
    ngOnInit() {
      this.contacts=this.contactService.getContacts()
      
      }

      DisplayName="";
      aa:boolean=false;

      setIndex(ii){
        this.aa=ii;
        console.log(this.aa)
      }

     
}          
  

  


