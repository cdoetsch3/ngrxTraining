import { Contact } from '../../models/contact';
import { ContactsActions, ContactsActionTypes } from './contacts.actions';

export interface ContactsState {
  list: Array<Contact>;
  selectedContactId: Number;
}

const INITIAL_STATE: ContactsState = {
  list: [],
  selectedContactId: 0
}

export function contactsReducer(
    state = INITIAL_STATE,
    action: ContactsActions
  ) 
  {
    switch (action.type) {
        case ContactsActionTypes.LOAD_CONTACTS_SUCCESS:
            return {...state,list: action.payload }

        case ContactsActionTypes.SELECT_CONTACT:
            console.log('Selected contact ' + action.payload)
            return {...state,selectedContactId: action.payload }

        case ContactsActionTypes.UPDATE_CONTACT:
            console.log('Updated contact ' + action.payload.id)
            let updatedList = state.list.map(contact => {
                return contact.id == action.payload.id
                    ? { ...contact, ...action.payload }
                    : contact;
                  });
            return { ...state, list: updatedList };
    }
    
    return state;
  }