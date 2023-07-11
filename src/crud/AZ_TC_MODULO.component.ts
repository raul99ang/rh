import { Component, OnInit } from '@angular/core';
import { AZ_TC_MODULOModel } from '../models/AZ_TC_MODULO.model';
import Swal from 'sweetalert2';
import { AZ_TC_MODULOService } from '../services/AZ_TC_MODULO.service';

@Component({
  selector: 'app-AZ_TC_MODULO',
  templateUrl: './AZ_TC_MODULO.component.html',
  styleUrls: ['./AZ_TC_MODULO.component.css']
})
export class AZ_TC_MODULOComponent implements OnInit {

mostrarActualizar: boolean = false;
  az_tc_moduloAll: AZ_TC_MODULOModel[] = [];
  id: number= 0;
  busqueda: string = '';
 searchTerm: string = '';
  searchText: string = '';
az_tc_modulo: any[]=[];

  constructor(private readonly AZ_TC_MODULOService: AZ_TC_MODULOService) { }

  async ngOnInit() {
    this.az_tc_moduloAll = await this.AZ_TC_MODULOService.getAZ_TC_MODULO();
  }

  obtenerAZ_TC_MODULO() {
    this.AZ_TC_MODULOService.getAZ_TC_MODULO()
    .then((response: any) => {
      this.az_tc_moduloAll = response.cont.az_tc_moduloAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idAZ_TC_MODULO: any) {
    this.id = idAZ_TC_MODULO;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerAZ_TC_MODULO();
        }

        eliminar(az_tc_modulo: AZ_TC_MODULOModel)
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
                this.AZ_TC_MODULOService.deleteAZ_TC_MODULO(az_tc_modulo.id_modulo)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerAZ_TC_MODULO();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating AZ_TC_MODULO."
          });
        })
      }
    })
  }


buscar(){
if (this.searchText === '') {
      this.az_tc_moduloAll = this.az_tc_modulo;
    } else {
      // Filtra los empleados según el texto de búsqueda
      this.az_tc_moduloAll = this.az_tc_modulo.filter(az_tc_modulo => 
        az_tc_modulo.id_modulo.toLowerCase().includes(this.searchText.toLowerCase())
        )}
      }
    }