import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlesService implements ErrorHandler {
  constructor() {}

  handleError(error) {
    // do your stuff
    console.log(error);
    throw error;
  }
}
