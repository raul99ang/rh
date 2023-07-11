import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AZ_TR_ROLESModel } from '../models/AZ_TR_ROLES.model';
import { AZ_TR_ROLESService } from '../services/AZ_TR_ROLES.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-AZ_TR_ROLES-detail',
  templateUrl: './AZ_TR_ROLES-detail.component.html',
  styleUrls: ['./AZ_TR_ROLES-detail.component.css']
})
export class AZ_TR_ROLESDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        az_tr_roles: AZ_TR_ROLESModel = new AZ_TR_ROLESModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly AZ_TR_ROLESService: AZ_TR_ROLESService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.AZ_TR_ROLESService.getAZ_TR_ROLESById(this.id)
        .then((response: any) => {
          this.az_tr_roles = response.cont.AZ_TR_ROLES;
        })
        .catch(() => {});
    }
  }

  submitAZ_TR_ROLES(forma: NgForm){
    if (this.isNew)
    {
        this.AZ_TR_ROLESService.postAZ_TR_ROLES(this.az_tr_roles)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "AZ_TR_ROLES has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register AZ_TR_ROLES"
            });
        });
        } else
        {

            this.AZ_TR_ROLESService.putAZ_TR_ROLES(this.az_tr_roles, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "AZ_TR_ROLES has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update AZ_TR_ROLES"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    