import { Action } from '@ngrx/store';
import { FlightBookingActions, FlightBookingActionTypes } from './flight-booking.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: FlightBookingActions): State {
  switch (action.type) {

    case FlightBookingActionTypes.LoadFlightBookings:
      return state;


    default:
      return state;
  }
}
