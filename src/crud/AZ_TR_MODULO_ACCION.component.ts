import { Component, OnInit } from '@angular/core';
import { AZ_TR_MODULO_ACCIONModel } from '../models/AZ_TR_MODULO_ACCION.model';
import Swal from 'sweetalert2';
import { AZ_TR_MODULO_ACCIONService } from '../services/AZ_TR_MODULO_ACCION.service';

@Component({
  selector: 'app-AZ_TR_MODULO_ACCION',
  templateUrl: './AZ_TR_MODULO_ACCION.component.html',
  styleUrls: ['./AZ_TR_MODULO_ACCION.component.css']
})
export class AZ_TR_MODULO_ACCIONComponent implements OnInit {

mostrarActualizar: boolean = false;
  az_tr_modulo_accionAll: AZ_TR_MODULO_ACCIONModel[] = [];
  id: number= 0;
  busqueda: string = '';
 searchTerm: string = '';
  searchText: string = '';
az_tr_modulo_accion: any[]=[];

  constructor(private readonly AZ_TR_MODULO_ACCIONService: AZ_TR_MODULO_ACCIONService) { }

  async ngOnInit() {
    this.az_tr_modulo_accionAll = await this.AZ_TR_MODULO_ACCIONService.getAZ_TR_MODULO_ACCION();
  }

  obtenerAZ_TR_MODULO_ACCION() {
    this.AZ_TR_MODULO_ACCIONService.getAZ_TR_MODULO_ACCION()
    .then((response: any) => {
      this.az_tr_modulo_accionAll = response.cont.az_tr_modulo_accionAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idAZ_TR_MODULO_ACCION: any) {
    this.id = idAZ_TR_MODULO_ACCION;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerAZ_TR_MODULO_ACCION();
        }

        eliminar(az_tr_modulo_accion: AZ_TR_MODULO_ACCIONModel)
        {
            Swal.fire({
            icon: "question",
    title: `Are you sure to delete?`,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: "Cancel"
            }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed)
            {
                this.AZ_TR_MODULO_ACCIONService.deleteAZ_TR_MODULO_ACCION(az_tr_modulo_accion.id_modulo_accion)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerAZ_TR_MODULO_ACCION();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating AZ_TR_MODULO_ACCION."
          });
        })
      }
    })
  }


buscar(){
if (this.searchText === '') {
      this.az_tr_modulo_accionAll = this.az_tr_modulo_accion;
    } else {
      // Filtra los empleados según el texto de búsqueda
      this.az_tr_modulo_accionAll = this.az_tr_modulo_accion.filter(az_tr_modulo_accion => 
        az_tr_modulo_accion.id_modulo_accion.toLowerCase().includes(this.searchText.toLowerCase())
        )}
      }
    }