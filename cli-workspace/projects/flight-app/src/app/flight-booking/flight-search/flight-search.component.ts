import { Component, OnInit } from '@angular/core';
import {Flight, FlightService} from '@flight-workspace/flight-api';

@Component({
  selector: 'fl-app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;

  get flights(): Flight[] {
    return this.flightService.flights;
  }

  // "shopping basket" with selected flights
  basket: {[key: number]: boolean} = {
    3: true,
    5: true
  };

  constructor(
    private flightService: FlightService) {
  }

  ngOnInit() {
  }

  search(): void {
    if (!this.from || !this.to) {
      return;
    }

    this.flightService.load(this.from, this.to, this.urgent);
  }

  delay(): void {
    this.flightService.delay();
  }
}
