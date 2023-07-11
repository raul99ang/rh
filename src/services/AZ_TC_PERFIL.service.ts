
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {AZ_TC_PERFILModel} from '../models/AZ_TC_PERFIL.model';
@Injectable({
  providedIn: 'root'
})
export class AZ_TC_PERFILService {

  usuarios_permisosUrl: string = `${environment.baseUrl}/AZ_TC_PERFIL`;
  constructor(private readonly http: HttpClient) {}

  getAZ_TC_PERFILById(Id_perfil: number) {
    return lastValueFrom(this.http.get<AZ_TC_PERFILModel>(`${this.usuarios_permisosUrl}/${Id_perfil}`));
  }

  getAZ_TC_PERFIL(): Promise<AZ_TC_PERFILModel[]> {
    return lastValueFrom(this.http.get<AZ_TC_PERFILModel[]>(`${this.usuarios_permisosUrl}`));
  }

  postAZ_TC_PERFIL(az_tc_perfil: AZ_TC_PERFILModel) {
    
    return lastValueFrom(this.http.post(`${this.usuarios_permisosUrl}`, az_tc_perfil));
  }
  putAZ_TC_PERFIL(az_tc_perfil: AZ_TC_PERFILModel, Id_perfil: number) { 
    return lastValueFrom(this.http.put(`${this.usuarios_permisosUrl}`, az_tc_perfil));
  }

  deleteAZ_TC_PERFIL(Id_perfil: any) {
    return lastValueFrom(this.http.delete(`${this.usuarios_permisosUrl}/${Id_perfil}`));
  }
}