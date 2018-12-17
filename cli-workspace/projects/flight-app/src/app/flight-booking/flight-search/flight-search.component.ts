import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromFlightBooking from '../+state/flight-booking.selectors';
import { Flight, FlightService } from '@flight-workspace/flight-api';
import { FlightsLoadedSuccess, LoadFlights, FlightBookingActionTypes } from '../+state/flight-booking.actions';

@Component({
  selector: 'fl-app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {
  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;

  isFlightsPending$: Observable<boolean>;
  flights$: Observable<Flight[]>;

  // "shopping basket" with selected flights
  basket: { [key: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(private flightService: FlightService, private store: Store<any>) {
    this.flights$ = this.store.pipe(select(fromFlightBooking.getFlights));
    this.isFlightsPending$ = this.store.pipe(select(fromFlightBooking.getIsFlightsPending));
  }

  search(): void {
    if (!this.from || !this.to) {
      return;
    }

    const action: LoadFlights = {
      type: FlightBookingActionTypes.LoadFlights,
      payload: { from: this.from, to: this.to }
    };
    this.store.dispatch(action);
  }

  delay(): void {
    this.flightService.delay();
  }
}
