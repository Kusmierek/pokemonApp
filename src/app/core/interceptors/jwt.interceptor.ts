import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { selectToken } from "src/app/store/user/user.selector";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  public constructor(private store: Store) {}
  private token!: string;

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.store
      .select(selectToken)
      .subscribe((data: string) => (this.token = data));

    const requestWithHeader: HttpRequest<unknown> = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    return next.handle(requestWithHeader);
  }
}
