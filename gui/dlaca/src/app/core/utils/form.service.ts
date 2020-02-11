/* tslint:disable */
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class FormService {
  tounchAll(formLogin: FormGroup): any {
    throw new Error("Method not implemented.");
  }
}
