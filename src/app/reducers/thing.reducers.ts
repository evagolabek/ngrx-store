//reducer is what takes the incoming action and decides what to do with it, take the previous state and returns a new state based on the payload/data 
import {Action} from '@ngrx/store';
import { Thing } from './../models/thing.model';
import * as ThingActions from './../actions/thing.actions';

//eg. to create initial state with some sort of data
const initialState: Thing = {
  name: 'Initial Thing',
  url: 'http://google.com'
}

//creating a reducer, take current state and actions from * actions
//use a switch to determine what type of actions 
export function reducer(state: Thing[] = [initialState], action: ThingActions.Actions){
 switch(action.type){
  case ThingActions.ADD_THING:
    return [...state, action.payload];
  case ThingActions.REMOVE_THING:
    state.splice(action.payload, 1)
    return [...state, action.payload];
  default:
    return state;
 }
}