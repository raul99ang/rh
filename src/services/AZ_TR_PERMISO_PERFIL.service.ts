
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {AZ_TR_PERMISO_PERFILModel} from '../models/AZ_TR_PERMISO_PERFIL.model';
@Injectable({
  providedIn: 'root'
})
export class AZ_TR_PERMISO_PERFILService {

  usuarios_permisosUrl: string = `${environment.baseUrl}/AZ_TR_PERMISO_PERFIL`;
  constructor(private readonly http: HttpClient) {}

  getAZ_TR_PERMISO_PERFILById(Id_permiso_perfil: number) {
    return lastValueFrom(this.http.get<AZ_TR_PERMISO_PERFILModel>(`${this.usuarios_permisosUrl}/${Id_permiso_perfil}`));
  }

  getAZ_TR_PERMISO_PERFIL(): Promise<AZ_TR_PERMISO_PERFILModel[]> {
    return lastValueFrom(this.http.get<AZ_TR_PERMISO_PERFILModel[]>(`${this.usuarios_permisosUrl}`));
  }

  postAZ_TR_PERMISO_PERFIL(az_tr_permiso_perfil: AZ_TR_PERMISO_PERFILModel) {
    
    return lastValueFrom(this.http.post(`${this.usuarios_permisosUrl}`, az_tr_permiso_perfil));
  }
  putAZ_TR_PERMISO_PERFIL(az_tr_permiso_perfil: AZ_TR_PERMISO_PERFILModel, Id_permiso_perfil: number) { 
    return lastValueFrom(this.http.put(`${this.usuarios_permisosUrl}`, az_tr_permiso_perfil));
  }

  deleteAZ_TR_PERMISO_PERFIL(Id_permiso_perfil: any) {
    return lastValueFrom(this.http.delete(`${this.usuarios_permisosUrl}/${Id_permiso_perfil}`));
  }
}