import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Provider, EnvironmentProviders } from "@angular/core";
import { ErrorInterceptor } from "./error";
import { LoaderInterceptor } from "./loader.interceptor";
import { JwtInterceptor } from "./jwt.interceptor";

export const interceptorsProviders: (EnvironmentProviders | Provider)[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
  },
];
