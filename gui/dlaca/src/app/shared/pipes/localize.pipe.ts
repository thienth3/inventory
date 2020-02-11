import { Injector, Pipe, PipeTransform } from '@angular/core';
import { AppComponentBase } from '../app-component-base';
 
@Pipe({
    name: 'localize'
})
export class LocalizePipe extends AppComponentBase implements PipeTransform {
    transform(key: string, ...args: any[]): string {
        // return this.l(key, args);
        return key;
    }
}
