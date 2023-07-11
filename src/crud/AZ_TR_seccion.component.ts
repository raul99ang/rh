import { Component, OnInit } from '@angular/core';
import { AZ_TR_seccionModel } from '../models/AZ_TR_seccion.model';
import Swal from 'sweetalert2';
import { AZ_TR_seccionService } from '../services/AZ_TR_seccion.service';

@Component({
  selector: 'app-AZ_TR_seccion',
  templateUrl: './AZ_TR_seccion.component.html',
  styleUrls: ['./AZ_TR_seccion.component.css']
})
export class AZ_TR_seccionComponent implements OnInit {

mostrarActualizar: boolean = false;
  az_tr_seccionAll: AZ_TR_seccionModel[] = [];
  id: number= 0;
  busqueda: string = '';
 searchTerm: string = '';
  searchText: string = '';
az_tr_seccion: any[]=[];

  constructor(private readonly AZ_TR_seccionService: AZ_TR_seccionService) { }

  async ngOnInit() {
    this.az_tr_seccionAll = await this.AZ_TR_seccionService.getAZ_TR_seccion();
  }

  obtenerAZ_TR_seccion() {
    this.AZ_TR_seccionService.getAZ_TR_seccion()
    .then((response: any) => {
      this.az_tr_seccionAll = response.cont.az_tr_seccionAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idAZ_TR_seccion: any) {
    this.id = idAZ_TR_seccion;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerAZ_TR_seccion();
        }

        eliminar(az_tr_seccion: AZ_TR_seccionModel)
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
                this.AZ_TR_seccionService.deleteAZ_TR_seccion(az_tr_seccion.id_seccion)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerAZ_TR_seccion();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating AZ_TR_seccion."
          });
        })
      }
    })
  }


buscar(){
if (this.searchText === '') {
      this.az_tr_seccionAll = this.az_tr_seccion;
    } else {
      // Filtra los empleados según el texto de búsqueda
      this.az_tr_seccionAll = this.az_tr_seccion.filter(az_tr_seccion => 
        az_tr_seccion.id_seccion.toLowerCase().includes(this.searchText.toLowerCase())
        )}
      }
    }