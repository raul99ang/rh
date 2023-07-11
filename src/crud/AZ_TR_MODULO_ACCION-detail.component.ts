import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AZ_TR_MODULO_ACCIONModel } from '../models/AZ_TR_MODULO_ACCION.model';
import { AZ_TR_MODULO_ACCIONService } from '../services/AZ_TR_MODULO_ACCION.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-AZ_TR_MODULO_ACCION-detail',
  templateUrl: './AZ_TR_MODULO_ACCION-detail.component.html',
  styleUrls: ['./AZ_TR_MODULO_ACCION-detail.component.css']
})
export class AZ_TR_MODULO_ACCIONDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        az_tr_modulo_accion: AZ_TR_MODULO_ACCIONModel = new AZ_TR_MODULO_ACCIONModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly AZ_TR_MODULO_ACCIONService: AZ_TR_MODULO_ACCIONService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.AZ_TR_MODULO_ACCIONService.getAZ_TR_MODULO_ACCIONById(this.id)
        .then((response: any) => {
          this.az_tr_modulo_accion = response.cont.AZ_TR_MODULO_ACCION;
        })
        .catch(() => {});
    }
  }

  submitAZ_TR_MODULO_ACCION(forma: NgForm){
    if (this.isNew)
    {
        this.AZ_TR_MODULO_ACCIONService.postAZ_TR_MODULO_ACCION(this.az_tr_modulo_accion)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "AZ_TR_MODULO_ACCION has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register AZ_TR_MODULO_ACCION"
            });
        });
        } else
        {

            this.AZ_TR_MODULO_ACCIONService.putAZ_TR_MODULO_ACCION(this.az_tr_modulo_accion, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "AZ_TR_MODULO_ACCION has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update AZ_TR_MODULO_ACCION"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    