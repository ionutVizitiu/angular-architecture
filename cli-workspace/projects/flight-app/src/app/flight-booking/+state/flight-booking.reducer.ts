import { FlightBookingActions, FlightBookingActionTypes } from './flight-booking.actions';
import { Flight } from '@flight-workspace/flight-api';

export interface State {
  flights: Flight[];
  isFlightsPending: boolean;
  error: string;
}

export const initialState: State = {
  flights: [],
  isFlightsPending: false,
  error: ''
};

export function reducer(state = initialState, action: FlightBookingActions): State {
  switch (action.type) {
    case FlightBookingActionTypes.LoadFlights:
      return {
        ...state,
        isFlightsPending: true
      };

    case FlightBookingActionTypes.FlightsLoadedSuccess:
      return {
        ...state,
        flights: action.payload.flights
      };

    case FlightBookingActionTypes.FlightsLoadedError:
      return {
        ...state,
        error: action.payload.error,
        isFlightsPending: false
      };

    default:
      return state;
  }
}
