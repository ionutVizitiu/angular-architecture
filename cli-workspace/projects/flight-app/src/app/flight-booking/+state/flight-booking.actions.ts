import { Action } from '@ngrx/store';
import { Flight } from '@flight-workspace/flight-api';

export enum FlightBookingActionTypes {
  LoadFlights = '[FlightBooking] Load Flights',
  FlightsLoadedSuccess = '[FlightBooking] Flights Loaded Success',
  FlightsLoadedError = '[FlightBooking] Flights Loaded Error'
}

export class LoadFlights implements Action {
  readonly type = FlightBookingActionTypes.LoadFlights;
  constructor(public payload: { from: string; to: string }) {}
}

export class FlightsLoadedSuccess implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoadedSuccess;
  constructor(public payload: { flights: Flight[] }) {}
}

export class FlightsLoadedError implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoadedError;
  constructor(public payload: { error: string }) {}
}

export type FlightBookingActions = LoadFlights | FlightsLoadedSuccess | FlightsLoadedError;
