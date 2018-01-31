import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { ApplicationState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { SelectContactAction, UpdateContactAction } from '../state/contacts/contacts.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  // we need to initialize since we can't use ?. operator with ngModel
  contact: Contact = <Contact>{ address: {}};
  contact$: Observable<any>;

  constructor(private contactsService: ContactsService,
              private router: Router,
              private route: ActivatedRoute,
              private store: Store<ApplicationState>) {}

  ngOnInit() {
    let contactId = this.route.snapshot.paramMap.get('id');
    
    this.store.dispatch(new SelectContactAction(+contactId));
  
    this.contact$ = this.store.select(state => {
      let id = state.contacts.selectedContactId;
      let contact = state.contacts.list.find(contact =>
        contact.id == id);
      return Object.assign({}, contact);
    });
    
    this.contactsService.getContact(contactId)
                        .subscribe(contact =>  this.contact = contact);
    
    
  }

  cancel(contact: Contact) {
    this.goToDetails(contact);
  }

  save(contact: Contact) {  
   this.contactsService.updateContact(contact)
                       .subscribe(() => this.goToDetails(contact));
  this.store.dispatch(new UpdateContactAction(contact));
  }

  private goToDetails(contact: Contact) {
    this.router.navigate(['/contact', contact.id ]);
  }
}

