import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { SelectContactAction } from '../state/contacts/contacts.actions';
import { ApplicationState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {

  contact: Contact;
  contact$: Observable<any>;

  constructor(private contactsService: ContactsService, 
    private route: ActivatedRoute,
    private store: Store<ApplicationState>) {}

  ngOnInit() {
    let contactId = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new SelectContactAction(+contactId));
    this.contact$ = this.store.select (state =>
       { let id = state.contacts.selectedContactId;
      return state.contacts.list.find(contact=>contact.id===id)})

    // this.contact$ = this.store.select(state => {
    //   let id = state.contacts.selectedContactId;
    //   let contact = state.contacts.list.find(contact =>
    //     contact.id == id);
    //   return Object.assign({}, contact);
    // });
    
    // this.contactsService.getContact(this.route.snapshot.paramMap.get('id'))
    //                     .subscribe(contact => this.contact = contact);
  }
}
