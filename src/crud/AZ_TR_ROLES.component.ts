import { Component, OnInit } from '@angular/core';
import { AZ_TR_ROLESModel } from '../models/AZ_TR_ROLES.model';
import Swal from 'sweetalert2';
import { AZ_TR_ROLESService } from '../services/AZ_TR_ROLES.service';

@Component({
  selector: 'app-AZ_TR_ROLES',
  templateUrl: './AZ_TR_ROLES.component.html',
  styleUrls: ['./AZ_TR_ROLES.component.css']
})
export class AZ_TR_ROLESComponent implements OnInit {

mostrarActualizar: boolean = false;
  az_tr_rolesAll: AZ_TR_ROLESModel[] = [];
  id: number= 0;
  busqueda: string = '';
 searchTerm: string = '';
  searchText: string = '';
az_tr_roles: any[]=[];

  constructor(private readonly AZ_TR_ROLESService: AZ_TR_ROLESService) { }

  async ngOnInit() {
    this.az_tr_rolesAll = await this.AZ_TR_ROLESService.getAZ_TR_ROLES();
  }

  obtenerAZ_TR_ROLES() {
    this.AZ_TR_ROLESService.getAZ_TR_ROLES()
    .then((response: any) => {
      this.az_tr_rolesAll = response.cont.az_tr_rolesAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idAZ_TR_ROLES: any) {
    this.id = idAZ_TR_ROLES;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerAZ_TR_ROLES();
        }

        eliminar(az_tr_roles: AZ_TR_ROLESModel)
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
                this.AZ_TR_ROLESService.deleteAZ_TR_ROLES(az_tr_roles.id_roles)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerAZ_TR_ROLES();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating AZ_TR_ROLES."
          });
        })
      }
    })
  }


buscar(){
if (this.searchText === '') {
      this.az_tr_rolesAll = this.az_tr_roles;
    } else {
      // Filtra los empleados según el texto de búsqueda
      this.az_tr_rolesAll = this.az_tr_roles.filter(az_tr_roles => 
        az_tr_roles.id_roles.toLowerCase().includes(this.searchText.toLowerCase())
        )}
      }
    }