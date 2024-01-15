import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
  HttpEvent,
} from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { MessageService } from "primeng/api";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  public constructor(private messageService: MessageService) {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.messageService.add({
          severity: "error",
          summary: "error",
          detail:
            error.error?.message || error.message || "Something went wrong",
        });

        return throwError(() => error);
      })
    );
  }
}
