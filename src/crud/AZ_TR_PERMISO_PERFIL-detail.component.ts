import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AZ_TR_PERMISO_PERFILModel } from '../models/AZ_TR_PERMISO_PERFIL.model';
import { AZ_TR_PERMISO_PERFILService } from '../services/AZ_TR_PERMISO_PERFIL.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-AZ_TR_PERMISO_PERFIL-detail',
  templateUrl: './AZ_TR_PERMISO_PERFIL-detail.component.html',
  styleUrls: ['./AZ_TR_PERMISO_PERFIL-detail.component.css']
})
export class AZ_TR_PERMISO_PERFILDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        az_tr_permiso_perfil: AZ_TR_PERMISO_PERFILModel = new AZ_TR_PERMISO_PERFILModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly AZ_TR_PERMISO_PERFILService: AZ_TR_PERMISO_PERFILService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.AZ_TR_PERMISO_PERFILService.getAZ_TR_PERMISO_PERFILById(this.id)
        .then((response: any) => {
          this.az_tr_permiso_perfil = response.cont.AZ_TR_PERMISO_PERFIL;
        })
        .catch(() => {});
    }
  }

  submitAZ_TR_PERMISO_PERFIL(forma: NgForm){
    if (this.isNew)
    {
        this.AZ_TR_PERMISO_PERFILService.postAZ_TR_PERMISO_PERFIL(this.az_tr_permiso_perfil)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "AZ_TR_PERMISO_PERFIL has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register AZ_TR_PERMISO_PERFIL"
            });
        });
        } else
        {

            this.AZ_TR_PERMISO_PERFILService.putAZ_TR_PERMISO_PERFIL(this.az_tr_permiso_perfil, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "AZ_TR_PERMISO_PERFIL has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update AZ_TR_PERMISO_PERFIL"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    