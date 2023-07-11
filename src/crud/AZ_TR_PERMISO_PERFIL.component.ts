import { Component, OnInit } from '@angular/core';
import { AZ_TR_PERMISO_PERFILModel } from '../models/AZ_TR_PERMISO_PERFIL.model';
import Swal from 'sweetalert2';
import { AZ_TR_PERMISO_PERFILService } from '../services/AZ_TR_PERMISO_PERFIL.service';

@Component({
  selector: 'app-AZ_TR_PERMISO_PERFIL',
  templateUrl: './AZ_TR_PERMISO_PERFIL.component.html',
  styleUrls: ['./AZ_TR_PERMISO_PERFIL.component.css']
})
export class AZ_TR_PERMISO_PERFILComponent implements OnInit {

mostrarActualizar: boolean = false;
  az_tr_permiso_perfilAll: AZ_TR_PERMISO_PERFILModel[] = [];
  id: number= 0;
  busqueda: string = '';
 searchTerm: string = '';
  searchText: string = '';
az_tr_permiso_perfil: any[]=[];

  constructor(private readonly AZ_TR_PERMISO_PERFILService: AZ_TR_PERMISO_PERFILService) { }

  async ngOnInit() {
    this.az_tr_permiso_perfilAll = await this.AZ_TR_PERMISO_PERFILService.getAZ_TR_PERMISO_PERFIL();
  }

  obtenerAZ_TR_PERMISO_PERFIL() {
    this.AZ_TR_PERMISO_PERFILService.getAZ_TR_PERMISO_PERFIL()
    .then((response: any) => {
      this.az_tr_permiso_perfilAll = response.cont.az_tr_permiso_perfilAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idAZ_TR_PERMISO_PERFIL: any) {
    this.id = idAZ_TR_PERMISO_PERFIL;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerAZ_TR_PERMISO_PERFIL();
        }

        eliminar(az_tr_permiso_perfil: AZ_TR_PERMISO_PERFILModel)
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
                this.AZ_TR_PERMISO_PERFILService.deleteAZ_TR_PERMISO_PERFIL(az_tr_permiso_perfil.id_permiso_perfil)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerAZ_TR_PERMISO_PERFIL();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating AZ_TR_PERMISO_PERFIL."
          });
        })
      }
    })
  }


buscar(){
if (this.searchText === '') {
      this.az_tr_permiso_perfilAll = this.az_tr_permiso_perfil;
    } else {
      // Filtra los empleados según el texto de búsqueda
      this.az_tr_permiso_perfilAll = this.az_tr_permiso_perfil.filter(az_tr_permiso_perfil => 
        az_tr_permiso_perfil.id_permiso_perfil.toLowerCase().includes(this.searchText.toLowerCase())
        )}
      }
    }