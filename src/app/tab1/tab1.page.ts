import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterOutlet, ActivationStart, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { StateService } from '../services/state.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{       
@ViewChild(RouterOutlet) outlet: RouterOutlet;

  authenticated = false;
  data: any;
  connectionState: boolean;
  
  
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private dataService: DataService, private stateService: StateService) {
    let snapshot = route.snapshot;
    this.connectionState = stateService.getConnectionState();       
    
  }

  ngOnInit() {
    let connectionState = this.stateService.getConnectionState();  
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "tab"){
        this.outlet.deactivate();
      }
    }
      )
    if (this.route.data['role']){
      this.data = this.route.data['role'];
    }
    console.log(`la connection dans init est ${connectionState}`);
    return this.connectionState;
  }
  

  logout(){
    this.authService.signOut();
    
  }

}
