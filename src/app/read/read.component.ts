import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Thing } from './../models/thing.model';
import { AppState } from './../app.state';
 
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

//define a property 
  things: Observable<Thing[]>;

//access the store, where you pass appState 
//'thing' comes from AppModule where you bind it to the reducer
  constructor(private store: Store<AppState>) {
    this.things = store.select('thing');
   }

  ngOnInit() {
  }

}
