import { APP_INITIALIZER, Provider } from '@angular/core';
import { environment } from 'src/environments/environment';
import { API_HOST_DEV, API_HOST_PROD } from 'src/app/app.const';
import { ApiConfiguration } from './swagger-api/api-configuration';

export function initApiConfiguration(config: ApiConfiguration): Function {
    return () => {
        if (environment.production) {
            config.rootUrl = API_HOST_PROD;
        } else {
            config.rootUrl = API_HOST_DEV;
        }
    };
}

export const INIT_API_CONFIGURATION: Provider = {
    provide: APP_INITIALIZER,
    useFactory: initApiConfiguration,
    deps: [ApiConfiguration],
    multi: true
};
