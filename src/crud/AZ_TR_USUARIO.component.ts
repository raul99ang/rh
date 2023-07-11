import { Component, OnInit } from '@angular/core';
import { AZ_TR_USUARIOModel } from '../models/AZ_TR_USUARIO.model';
import Swal from 'sweetalert2';
import { AZ_TR_USUARIOService } from '../services/AZ_TR_USUARIO.service';

@Component({
  selector: 'app-AZ_TR_USUARIO',
  templateUrl: './AZ_TR_USUARIO.component.html',
  styleUrls: ['./AZ_TR_USUARIO.component.css']
})
export class AZ_TR_USUARIOComponent implements OnInit {

mostrarActualizar: boolean = false;
  az_tr_usuarioAll: AZ_TR_USUARIOModel[] = [];
  id: number= 0;
  busqueda: string = '';
 searchTerm: string = '';
  searchText: string = '';
az_tr_usuario: any[]=[];

  constructor(private readonly AZ_TR_USUARIOService: AZ_TR_USUARIOService) { }

  async ngOnInit() {
    this.az_tr_usuarioAll = await this.AZ_TR_USUARIOService.getAZ_TR_USUARIO();
  }

  obtenerAZ_TR_USUARIO() {
    this.AZ_TR_USUARIOService.getAZ_TR_USUARIO()
    .then((response: any) => {
      this.az_tr_usuarioAll = response.cont.az_tr_usuarioAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idAZ_TR_USUARIO: any) {
    this.id = idAZ_TR_USUARIO;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerAZ_TR_USUARIO();
        }

        eliminar(az_tr_usuario: AZ_TR_USUARIOModel)
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
                this.AZ_TR_USUARIOService.deleteAZ_TR_USUARIO(az_tr_usuario.id_usuario)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerAZ_TR_USUARIO();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating AZ_TR_USUARIO."
          });
        })
      }
    })
  }


buscar(){
if (this.searchText === '') {
      this.az_tr_usuarioAll = this.az_tr_usuario;
    } else {
      // Filtra los empleados según el texto de búsqueda
      this.az_tr_usuarioAll = this.az_tr_usuario.filter(az_tr_usuario => 
        az_tr_usuario.id_usuario.toLowerCase().includes(this.searchText.toLowerCase())
        )}
      }
    }