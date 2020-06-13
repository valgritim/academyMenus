import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  connectionState: boolean;
  constructor(private stateService: StateService) {
    this.stateService.getConnectionState();
   }

  ngOnInit() {
    this.connectionState = this.stateService.getConnectionState();
    console.log("home connection:" + this.connectionState);
    return this.connectionState;
  }

}
