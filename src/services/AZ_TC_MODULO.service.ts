
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {AZ_TC_MODULOModel} from '../models/AZ_TC_MODULO.model';
@Injectable({
  providedIn: 'root'
})
export class AZ_TC_MODULOService {

  usuarios_permisosUrl: string = `${environment.baseUrl}/AZ_TC_MODULO`;
  constructor(private readonly http: HttpClient) {}

  getAZ_TC_MODULOById(Id_modulo: number) {
    return lastValueFrom(this.http.get<AZ_TC_MODULOModel>(`${this.usuarios_permisosUrl}/${Id_modulo}`));
  }

  getAZ_TC_MODULO(): Promise<AZ_TC_MODULOModel[]> {
    return lastValueFrom(this.http.get<AZ_TC_MODULOModel[]>(`${this.usuarios_permisosUrl}`));
  }

  postAZ_TC_MODULO(az_tc_modulo: AZ_TC_MODULOModel) {
    
    return lastValueFrom(this.http.post(`${this.usuarios_permisosUrl}`, az_tc_modulo));
  }
  putAZ_TC_MODULO(az_tc_modulo: AZ_TC_MODULOModel, Id_modulo: number) { 
    return lastValueFrom(this.http.put(`${this.usuarios_permisosUrl}`, az_tc_modulo));
  }

  deleteAZ_TC_MODULO(Id_modulo: any) {
    return lastValueFrom(this.http.delete(`${this.usuarios_permisosUrl}/${Id_modulo}`));
  }
}