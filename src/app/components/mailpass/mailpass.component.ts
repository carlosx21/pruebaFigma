import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mailpass',
  templateUrl: './mailpass.component.html',
  styleUrls: ['./mailpass.component.scss'],
})
export class MailpassComponent implements OnInit {

  paramMail = '';

  constructor(private actRoute:ActivatedRoute,
              private router:Router,){
}

  ngOnInit() {
        // Se captura el parametro enviado por la url
        this.actRoute.params.subscribe(params => { 
          
          this.paramMail = params.mail; 
      });
  }

}
