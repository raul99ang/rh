import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AZ_TR_seccionModel } from '../models/AZ_TR_seccion.model';
import { AZ_TR_seccionService } from '../services/AZ_TR_seccion.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-AZ_TR_seccion-detail',
  templateUrl: './AZ_TR_seccion-detail.component.html',
  styleUrls: ['./AZ_TR_seccion-detail.component.css']
})
export class AZ_TR_seccionDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        az_tr_seccion: AZ_TR_seccionModel = new AZ_TR_seccionModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly AZ_TR_seccionService: AZ_TR_seccionService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.AZ_TR_seccionService.getAZ_TR_seccionById(this.id)
        .then((response: any) => {
          this.az_tr_seccion = response.cont.AZ_TR_seccion;
        })
        .catch(() => {});
    }
  }

  submitAZ_TR_seccion(forma: NgForm){
    if (this.isNew)
    {
        this.AZ_TR_seccionService.postAZ_TR_seccion(this.az_tr_seccion)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "AZ_TR_seccion has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register AZ_TR_seccion"
            });
        });
        } else
        {

            this.AZ_TR_seccionService.putAZ_TR_seccion(this.az_tr_seccion, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "AZ_TR_seccion has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update AZ_TR_seccion"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    