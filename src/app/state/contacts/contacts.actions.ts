import { Action } from '@ngrx/store';
import { Contact } from '../../models/contact';

export enum ContactsActionTypes {
    LOAD_CONTACTS_SUCCESS = '[Contacts] Load success',
    LOAD_CONTACTS_FAIL = '[Contacts] Load fail'
}

export class LoadContactsSuccessAction implements Action {
    readonly type = ContactsActionTypes.LOAD_CONTACTS_SUCCESS;
    constructor(public payload: Array<Contact>) { }
  }
  

export type ContactsActions = LoadContactsSuccessAction;