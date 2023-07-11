import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AZ_TR_MENUModel } from '../models/AZ_TR_MENU.model';
import { AZ_TR_MENUService } from '../services/AZ_TR_MENU.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-AZ_TR_MENU-detail',
  templateUrl: './AZ_TR_MENU-detail.component.html',
  styleUrls: ['./AZ_TR_MENU-detail.component.css']
})
export class AZ_TR_MENUDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        az_tr_menu: AZ_TR_MENUModel = new AZ_TR_MENUModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly AZ_TR_MENUService: AZ_TR_MENUService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.AZ_TR_MENUService.getAZ_TR_MENUById(this.id)
        .then((response: any) => {
          this.az_tr_menu = response.cont.AZ_TR_MENU;
        })
        .catch(() => {});
    }
  }

  submitAZ_TR_MENU(forma: NgForm){
    if (this.isNew)
    {
        this.AZ_TR_MENUService.postAZ_TR_MENU(this.az_tr_menu)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "AZ_TR_MENU has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register AZ_TR_MENU"
            });
        });
        } else
        {

            this.AZ_TR_MENUService.putAZ_TR_MENU(this.az_tr_menu, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "AZ_TR_MENU has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update AZ_TR_MENU"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    