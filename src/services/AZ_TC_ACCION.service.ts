
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {AZ_TC_ACCIONModel} from '../models/AZ_TC_ACCION.model';
@Injectable({
  providedIn: 'root'
})
export class AZ_TC_ACCIONService {

  usuarios_permisosUrl: string = `${environment.baseUrl}/AZ_TC_ACCION`;
  constructor(private readonly http: HttpClient) {}

  getAZ_TC_ACCIONById(Id_accion: number) {
    return lastValueFrom(this.http.get<AZ_TC_ACCIONModel>(`${this.usuarios_permisosUrl}/${Id_accion}`));
  }

  getAZ_TC_ACCION(): Promise<AZ_TC_ACCIONModel[]> {
    return lastValueFrom(this.http.get<AZ_TC_ACCIONModel[]>(`${this.usuarios_permisosUrl}`));
  }

  postAZ_TC_ACCION(az_tc_accion: AZ_TC_ACCIONModel) {
    
    return lastValueFrom(this.http.post(`${this.usuarios_permisosUrl}`, az_tc_accion));
  }
  putAZ_TC_ACCION(az_tc_accion: AZ_TC_ACCIONModel, Id_accion: number) { 
    return lastValueFrom(this.http.put(`${this.usuarios_permisosUrl}`, az_tc_accion));
  }

  deleteAZ_TC_ACCION(Id_accion: any) {
    return lastValueFrom(this.http.delete(`${this.usuarios_permisosUrl}/${Id_accion}`));
  }
}