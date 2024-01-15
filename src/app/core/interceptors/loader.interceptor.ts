import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { LoadingService } from "src/app/shared/service/loading/loading.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  public constructor(private loader: LoadingService) {}
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loader.showLoader();

    return next.handle(req).pipe(finalize(() => this.loader.hideLoader()));
  }
}
