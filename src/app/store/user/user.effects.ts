/* eslint-disable @typescript-eslint/typedef */
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { exhaustMap, catchError, of, switchMap, tap } from "rxjs";
import { UserService } from "src/app/shared/service/user/user.service";
import { userActions } from "./user.actions";
import { NavigationService } from "src/app/shared/service/navigation/navigation.service";

@Injectable()
export class UserEffect {
  public constructor(
    private action$: Actions,
    private service: UserService,
    private navigation: NavigationService
  ) {}

  public userRegister = createEffect(() =>
    this.action$.pipe(
      ofType(userActions["[Login]BeginLogin"]),
      exhaustMap((action) => {
        return this.service.login(action.usercred).pipe(
          switchMap((data) => {
            return (
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              data &&
              of(userActions["[Login]LoginSuccess"]({ loginState: data }))
            );
          }),
          catchError((_error) => {
            return of(_error);
          })
        );
      })
    )
  );

  public userLogout = createEffect(
    () =>
      this.action$.pipe(
        ofType(userActions["[LOGOUT]LogoutSuccess"]),
        tap(() => {
          this.service.removeLocalStorage();
          this.navigation.navigateToMain();
        })
      ),
    { dispatch: false }
  );
}
