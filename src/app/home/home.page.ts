import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { Historial } from '../models/historial.model';
import { ApipedidoService } from '../services/apipedido.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  // Variable para el formulario reactivo
  myForm: FormGroup;
  // variable auxiliar para validacion de formulario
  isSubmitted = false;
  // Lista que contendra los productos mas frecuentados
  lstAuxCon = [];

  constructor(private router: Router,
              private fb: FormBuilder,
              private apipedido: ApipedidoService ) {
    
  }
  
 ngOnInit(): void {
   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.
    this.myForm = new FormGroup({
      email: new FormControl('' ,Validators.required),
      password: new FormControl('',Validators.required)
    });

    // Busca los ultimos pedidos que esten almacenados
    this.apipedido.getPedidos()
    .subscribe(resp => {
        console.log(resp);
    });

    // Busca el historial de los productos mas buscados
    this.apipedido.getHistorial()
    .subscribe(resp => {
        
        let lsthistoial: Historial[] = resp;
        
        lsthistoial.forEach(his => {
              this.apipedido.getProducto(his.descevento)
            .subscribe(resp => {
                  let objAux= {
                    idpro: resp.idprod,
                    producto: resp.nompro,
                    ocurrencia: 0
                  }
                 if(this.lstAuxCon.length === 0){
                      objAux.ocurrencia= objAux.ocurrencia+1;
                     this.lstAuxCon.push(objAux);
                 } else {
                      this.lstAuxCon.filter( aux => {
                              if(aux.idpro === resp.idprod ){
                                  aux.ocurrencia = aux.ocurrencia + 1;
                              } else {
                                this.lstAuxCon.push(objAux);
                              }
                      })
                 }                        
            });
        });

        // Esta lista imprime los productos mas frecuentados 
        console.log(this.lstAuxCon);
    });



 }


 actionFormHome(){   
   this.isSubmitted = true;
    if (!this.myForm.valid) {
      return false;
    } else {
      console.log(this.myForm.value)
    }
 }

    get errorControl() {
      return this.myForm.controls;
    }
}
