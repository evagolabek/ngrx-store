import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Thing } from './../models/thing.model';

//actions are types in form of a string
export const ADD_THING = '[THING] Add'
export const REMOVE_THING = '[THING] Remove'

//you don't need the constructor if you don't pass any type of data
export class AddThing implements Action {
  readonly type = ADD_THING

  constructor(public payload: Thing) {}
}

export class RemoveThing implements Action {
  readonly type = REMOVE_THING

  constructor(public payload: number) {}
}

//this allows you to access those actions in the reducers
export type Actions = AddThing | RemoveThing