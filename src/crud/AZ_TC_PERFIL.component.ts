import { Component, OnInit } from '@angular/core';
import { AZ_TC_PERFILModel } from '../models/AZ_TC_PERFIL.model';
import Swal from 'sweetalert2';
import { AZ_TC_PERFILService } from '../services/AZ_TC_PERFIL.service';

@Component({
  selector: 'app-AZ_TC_PERFIL',
  templateUrl: './AZ_TC_PERFIL.component.html',
  styleUrls: ['./AZ_TC_PERFIL.component.css']
})
export class AZ_TC_PERFILComponent implements OnInit {

mostrarActualizar: boolean = false;
  az_tc_perfilAll: AZ_TC_PERFILModel[] = [];
  id: number= 0;
  busqueda: string = '';
 searchTerm: string = '';
  searchText: string = '';
az_tc_perfil: any[]=[];

  constructor(private readonly AZ_TC_PERFILService: AZ_TC_PERFILService) { }

  async ngOnInit() {
    this.az_tc_perfilAll = await this.AZ_TC_PERFILService.getAZ_TC_PERFIL();
  }

  obtenerAZ_TC_PERFIL() {
    this.AZ_TC_PERFILService.getAZ_TC_PERFIL()
    .then((response: any) => {
      this.az_tc_perfilAll = response.cont.az_tc_perfilAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idAZ_TC_PERFIL: any) {
    this.id = idAZ_TC_PERFIL;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerAZ_TC_PERFIL();
        }

        eliminar(az_tc_perfil: AZ_TC_PERFILModel)
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
                this.AZ_TC_PERFILService.deleteAZ_TC_PERFIL(az_tc_perfil.id_perfil)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerAZ_TC_PERFIL();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating AZ_TC_PERFIL."
          });
        })
      }
    })
  }


buscar(){
if (this.searchText === '') {
      this.az_tc_perfilAll = this.az_tc_perfil;
    } else {
      // Filtra los empleados según el texto de búsqueda
      this.az_tc_perfilAll = this.az_tc_perfil.filter(az_tc_perfil => 
        az_tc_perfil.id_perfil.toLowerCase().includes(this.searchText.toLowerCase())
        )}
      }
    }