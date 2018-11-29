import { Action } from '@ngrx/store';

export enum FlightBookingActionTypes {
  LoadFlightBookings = '[FlightBooking] Load FlightBookings'
}

export class LoadFlightBookings implements Action {
  readonly type = FlightBookingActionTypes.LoadFlightBookings;
}

export type FlightBookingActions = LoadFlightBookings;
