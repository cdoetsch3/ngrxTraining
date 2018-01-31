import { Contact } from '../../models/contact';
import { ContactsActions, ContactsActionTypes } from './contacts.actions';

export interface ContactsState {
  list: Array<Contact>;
}

const INITIAL_STATE: ContactsState = {
  list: [],
}

export function contactsReducer(
    state = INITIAL_STATE,
    action: ContactsActions
  ) 
  {
    switch (action.type) {
      case ContactsActionTypes.LOAD_CONTACTS_SUCCESS:
        return {
            ...state,
            list: action.payload
        }
    }
    
    return state;
  }