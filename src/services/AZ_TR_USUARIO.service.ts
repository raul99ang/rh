
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {AZ_TR_USUARIOModel} from '../models/AZ_TR_USUARIO.model';
@Injectable({
  providedIn: 'root'
})
export class AZ_TR_USUARIOService {

  usuarios_permisosUrl: string = `${environment.baseUrl}/AZ_TR_USUARIO`;
  constructor(private readonly http: HttpClient) {}

  getAZ_TR_USUARIOById(Id_usuario: number) {
    return lastValueFrom(this.http.get<AZ_TR_USUARIOModel>(`${this.usuarios_permisosUrl}/${Id_usuario}`));
  }

  getAZ_TR_USUARIO(): Promise<AZ_TR_USUARIOModel[]> {
    return lastValueFrom(this.http.get<AZ_TR_USUARIOModel[]>(`${this.usuarios_permisosUrl}`));
  }

  postAZ_TR_USUARIO(az_tr_usuario: AZ_TR_USUARIOModel) {
    
    return lastValueFrom(this.http.post(`${this.usuarios_permisosUrl}`, az_tr_usuario));
  }
  putAZ_TR_USUARIO(az_tr_usuario: AZ_TR_USUARIOModel, Id_usuario: number) { 
    return lastValueFrom(this.http.put(`${this.usuarios_permisosUrl}`, az_tr_usuario));
  }

  deleteAZ_TR_USUARIO(Id_usuario: any) {
    return lastValueFrom(this.http.delete(`${this.usuarios_permisosUrl}/${Id_usuario}`));
  }
}