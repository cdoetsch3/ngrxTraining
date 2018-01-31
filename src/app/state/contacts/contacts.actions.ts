import { Action } from '@ngrx/store';
import { Contact } from '../../models/contact';

export enum ContactsActionTypes {
    LOAD_CONTACTS_SUCCESS = '[Contacts] Load success',
    LOAD_CONTACTS_FAIL = '[Contacts] Load fail',
    SELECT_CONTACT = '[Contacts] Select Contact',
    UPDATE_CONTACT = '[Contacts] Update Contact'

}

export class LoadContactsSuccessAction implements Action {
    readonly type = ContactsActionTypes.LOAD_CONTACTS_SUCCESS;
    constructor(public payload: Array<Contact>) { }
  }
  
export class SelectContactAction implements Action {
    readonly type = ContactsActionTypes.SELECT_CONTACT;
    constructor(public payload: Number) { }
  }
  
 export class UpdateContactAction implements Action {
    readonly type = ContactsActionTypes.UPDATE_CONTACT;
    constructor(public payload: Contact) { }
  }
  
  export type ContactsActions = LoadContactsSuccessAction
    | SelectContactAction | UpdateContactAction;
