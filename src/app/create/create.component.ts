import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Thing } from './../models/thing.model';
import { AppState } from './../app.state';

//you dispatching an action here so you need actions but you don't need an Observable
import * as ThingActions from './../actions/thing.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  //as previously you want to access the store
  constructor(private store: Store<AppState>) { }

  //you want to call a method 
  addThing(name, url) {
    this.store.dispatch(new ThingActions.AddThing({name: name , url: url}))
  }

  ngOnInit() {
  }

}
