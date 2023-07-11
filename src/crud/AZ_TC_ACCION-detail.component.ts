import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AZ_TC_ACCIONModel } from '../models/AZ_TC_ACCION.model';
import { AZ_TC_ACCIONService } from '../services/AZ_TC_ACCION.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-AZ_TC_ACCION-detail',
  templateUrl: './AZ_TC_ACCION-detail.component.html',
  styleUrls: ['./AZ_TC_ACCION-detail.component.css']
})
export class AZ_TC_ACCIONDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        az_tc_accion: AZ_TC_ACCIONModel = new AZ_TC_ACCIONModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly AZ_TC_ACCIONService: AZ_TC_ACCIONService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.AZ_TC_ACCIONService.getAZ_TC_ACCIONById(this.id)
        .then((response: any) => {
          this.az_tc_accion = response.cont.AZ_TC_ACCION;
        })
        .catch(() => {});
    }
  }

  submitAZ_TC_ACCION(forma: NgForm){
    if (this.isNew)
    {
        this.AZ_TC_ACCIONService.postAZ_TC_ACCION(this.az_tc_accion)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "AZ_TC_ACCION has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register AZ_TC_ACCION"
            });
        });
        } else
        {

            this.AZ_TC_ACCIONService.putAZ_TC_ACCION(this.az_tc_accion, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "AZ_TC_ACCION has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update AZ_TC_ACCION"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    