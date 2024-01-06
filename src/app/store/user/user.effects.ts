import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import {
  exhaustMap,
  map,
  catchError,
  of,
  switchMap,
  tap,
  Observable,
} from "rxjs";
import { UserService } from "src/app/shared/service/user/user.service";
import { UserActions, beginLogin } from "./user.actions";
import { IUserState } from "src/app/shared/types/user/userState";

@Injectable()
export class UserEffect {
  constructor(private action$: Actions, private service: UserService) {}

  _userregister = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions["[Login]BeginLogin"]),
      exhaustMap((action) => {
        return this.service.login(action.usercred).pipe(
          switchMap((data) => {
            return (
              data &&
              of(UserActions["[Login]LoginSuccess"]({ loginState: data }))
            );
          }),
          catchError((_error) => {
            console.log(_error);
            return of(_error);
          })
        );
      })
    )
  );

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  _userLogout = createEffect(
    () =>
      this.action$.pipe(
        ofType(UserActions["[LOGOUT]LogoutSuccess"]),
        tap(() => {
          console.log("koks");
          this.service.removeLocalStorage();
        })
      ),
    { dispatch: false }
  );
}
