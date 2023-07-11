import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AZ_TR_USUARIOModel } from '../models/AZ_TR_USUARIO.model';
import { AZ_TR_USUARIOService } from '../services/AZ_TR_USUARIO.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-AZ_TR_USUARIO-detail',
  templateUrl: './AZ_TR_USUARIO-detail.component.html',
  styleUrls: ['./AZ_TR_USUARIO-detail.component.css']
})
export class AZ_TR_USUARIODetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        az_tr_usuario: AZ_TR_USUARIOModel = new AZ_TR_USUARIOModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly AZ_TR_USUARIOService: AZ_TR_USUARIOService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.AZ_TR_USUARIOService.getAZ_TR_USUARIOById(this.id)
        .then((response: any) => {
          this.az_tr_usuario = response.cont.AZ_TR_USUARIO;
        })
        .catch(() => {});
    }
  }

  submitAZ_TR_USUARIO(forma: NgForm){
    if (this.isNew)
    {
        this.AZ_TR_USUARIOService.postAZ_TR_USUARIO(this.az_tr_usuario)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "AZ_TR_USUARIO has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register AZ_TR_USUARIO"
            });
        });
        } else
        {

            this.AZ_TR_USUARIOService.putAZ_TR_USUARIO(this.az_tr_usuario, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "AZ_TR_USUARIO has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update AZ_TR_USUARIO"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    