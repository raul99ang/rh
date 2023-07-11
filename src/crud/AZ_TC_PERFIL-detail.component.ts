import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AZ_TC_PERFILModel } from '../models/AZ_TC_PERFIL.model';
import { AZ_TC_PERFILService } from '../services/AZ_TC_PERFIL.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-AZ_TC_PERFIL-detail',
  templateUrl: './AZ_TC_PERFIL-detail.component.html',
  styleUrls: ['./AZ_TC_PERFIL-detail.component.css']
})
export class AZ_TC_PERFILDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        az_tc_perfil: AZ_TC_PERFILModel = new AZ_TC_PERFILModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly AZ_TC_PERFILService: AZ_TC_PERFILService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.AZ_TC_PERFILService.getAZ_TC_PERFILById(this.id)
        .then((response: any) => {
          this.az_tc_perfil = response.cont.AZ_TC_PERFIL;
        })
        .catch(() => {});
    }
  }

  submitAZ_TC_PERFIL(forma: NgForm){
    if (this.isNew)
    {
        this.AZ_TC_PERFILService.postAZ_TC_PERFIL(this.az_tc_perfil)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "AZ_TC_PERFIL has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register AZ_TC_PERFIL"
            });
        });
        } else
        {

            this.AZ_TC_PERFILService.putAZ_TC_PERFIL(this.az_tc_perfil, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "AZ_TC_PERFIL has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update AZ_TC_PERFIL"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    