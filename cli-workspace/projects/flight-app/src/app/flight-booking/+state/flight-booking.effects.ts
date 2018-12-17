import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FlightBookingActionTypes, LoadFlights, FlightsLoadedSuccess } from './flight-booking.actions';
import { exhaustMap, map } from 'rxjs/operators';
import { FlightService, Flight } from '@flight-workspace/flight-api';

@Injectable({
  providedIn: 'root'
})
export class FlightBookingEffects {
  @Effect()
  effect$ = this.actions$.pipe(ofType<LoadFlights>(FlightBookingActionTypes.LoadFlights));

  constructor(private actions$: Actions, private fs: FlightService) {}

  @Effect({ dispatch: false })
  loadFlights$ = this.actions$.ofType(FlightBookingActionTypes.LoadFlights).pipe(
    exhaustMap((action: LoadFlights) => {
      // Effects logic here
      return this.fs
        .find(action.payload.from, action.payload.to)
        .pipe(map((flights: Flight[]) => new FlightsLoadedSuccess({ flights: flights })));
    })
  );
}
