import { Contact } from "../models/contact";
import { ActionReducerMap } from "@ngrx/store";
import { ContactsState, contactsReducer } from "./contacts/contacts.reducer";


export interface ApplicationState {
    contacts: ContactsState;
  }

export const ROOT_REDUCER 
    : ActionReducerMap<ApplicationState> = {
      contacts: contactsReducer
}