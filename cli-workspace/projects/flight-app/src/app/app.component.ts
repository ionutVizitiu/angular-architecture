import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from './+state/index';
import { CounterIncrementAction } from './+state/app/app.actions';
import * as fromApp from './+state/app/app.selectors';

@Component({
  selector: 'fl-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count$: Observable<number>;

  constructor(private store: Store<State>) {
    this.count$ = this.store.select(fromApp.getCount);
  }

  countUp() {
    const action = new CounterIncrementAction({ incrementBy: 1 });
    this.store.dispatch(action);
  }
}
