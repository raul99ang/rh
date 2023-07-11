import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AZ_TC_MODULOModel } from '../models/AZ_TC_MODULO.model';
import { AZ_TC_MODULOService } from '../services/AZ_TC_MODULO.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-AZ_TC_MODULO-detail',
  templateUrl: './AZ_TC_MODULO-detail.component.html',
  styleUrls: ['./AZ_TC_MODULO-detail.component.css']
})
export class AZ_TC_MODULODetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        az_tc_modulo: AZ_TC_MODULOModel = new AZ_TC_MODULOModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly AZ_TC_MODULOService: AZ_TC_MODULOService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.AZ_TC_MODULOService.getAZ_TC_MODULOById(this.id)
        .then((response: any) => {
          this.az_tc_modulo = response.cont.AZ_TC_MODULO;
        })
        .catch(() => {});
    }
  }

  submitAZ_TC_MODULO(forma: NgForm){
    if (this.isNew)
    {
        this.AZ_TC_MODULOService.postAZ_TC_MODULO(this.az_tc_modulo)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "AZ_TC_MODULO has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register AZ_TC_MODULO"
            });
        });
        } else
        {

            this.AZ_TC_MODULOService.putAZ_TC_MODULO(this.az_tc_modulo, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "AZ_TC_MODULO has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update AZ_TC_MODULO"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    