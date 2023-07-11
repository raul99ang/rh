import { Component, OnInit } from '@angular/core';
import { AZ_TR_MENUModel } from '../models/AZ_TR_MENU.model';
import Swal from 'sweetalert2';
import { AZ_TR_MENUService } from '../services/AZ_TR_MENU.service';

@Component({
  selector: 'app-AZ_TR_MENU',
  templateUrl: './AZ_TR_MENU.component.html',
  styleUrls: ['./AZ_TR_MENU.component.css']
})
export class AZ_TR_MENUComponent implements OnInit {

mostrarActualizar: boolean = false;
  az_tr_menuAll: AZ_TR_MENUModel[] = [];
  id: number= 0;
  busqueda: string = '';
 searchTerm: string = '';
  searchText: string = '';
az_tr_menu: any[]=[];

  constructor(private readonly AZ_TR_MENUService: AZ_TR_MENUService) { }

  async ngOnInit() {
    this.az_tr_menuAll = await this.AZ_TR_MENUService.getAZ_TR_MENU();
  }

  obtenerAZ_TR_MENU() {
    this.AZ_TR_MENUService.getAZ_TR_MENU()
    .then((response: any) => {
      this.az_tr_menuAll = response.cont.az_tr_menuAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idAZ_TR_MENU: any) {
    this.id = idAZ_TR_MENU;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerAZ_TR_MENU();
        }

        eliminar(az_tr_menu: AZ_TR_MENUModel)
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
                this.AZ_TR_MENUService.deleteAZ_TR_MENU(az_tr_menu.id_menu)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerAZ_TR_MENU();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating AZ_TR_MENU."
          });
        })
      }
    })
  }


buscar(){
if (this.searchText === '') {
      this.az_tr_menuAll = this.az_tr_menu;
    } else {
      // Filtra los empleados según el texto de búsqueda
      this.az_tr_menuAll = this.az_tr_menu.filter(az_tr_menu => 
        az_tr_menu.id_menu.toLowerCase().includes(this.searchText.toLowerCase())
        )}
      }
    }