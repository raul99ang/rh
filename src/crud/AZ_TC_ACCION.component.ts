import { Component, OnInit } from '@angular/core';
import { AZ_TC_ACCIONModel } from '../models/AZ_TC_ACCION.model';
import Swal from 'sweetalert2';
import { AZ_TC_ACCIONService } from '../services/AZ_TC_ACCION.service';

@Component({
  selector: 'app-AZ_TC_ACCION',
  templateUrl: './AZ_TC_ACCION.component.html',
  styleUrls: ['./AZ_TC_ACCION.component.css']
})
export class AZ_TC_ACCIONComponent implements OnInit {

mostrarActualizar: boolean = false;
  az_tc_accionAll: AZ_TC_ACCIONModel[] = [];
  id: number= 0;
  busqueda: string = '';
 searchTerm: string = '';
  searchText: string = '';
az_tc_accion: any[]=[];

  constructor(private readonly AZ_TC_ACCIONService: AZ_TC_ACCIONService) { }

  async ngOnInit() {
    this.az_tc_accionAll = await this.AZ_TC_ACCIONService.getAZ_TC_ACCION();
  }

  obtenerAZ_TC_ACCION() {
    this.AZ_TC_ACCIONService.getAZ_TC_ACCION()
    .then((response: any) => {
      this.az_tc_accionAll = response.cont.az_tc_accionAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idAZ_TC_ACCION: any) {
    this.id = idAZ_TC_ACCION;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerAZ_TC_ACCION();
        }

        eliminar(az_tc_accion: AZ_TC_ACCIONModel)
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
                this.AZ_TC_ACCIONService.deleteAZ_TC_ACCION(az_tc_accion.id_accion)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerAZ_TC_ACCION();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating AZ_TC_ACCION."
          });
        })
      }
    })
  }


buscar(){
if (this.searchText === '') {
      this.az_tc_accionAll = this.az_tc_accion;
    } else {
      // Filtra los empleados según el texto de búsqueda
      this.az_tc_accionAll = this.az_tc_accion.filter(az_tc_accion => 
        az_tc_accion.id_accion.toLowerCase().includes(this.searchText.toLowerCase())
        )}
      }
    }