import { Component, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { Platform } from '@ionic/angular';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
	constructor(private router: Router,
    public platform: Platform, 
 ) {
    router.events
    .subscribe((event: NavigationStart) => {
      if (event.navigationTrigger === 'popstate') {
        // Perform actions
        console.log('pospstate');
      }
    });
	}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   
  
  }
}
