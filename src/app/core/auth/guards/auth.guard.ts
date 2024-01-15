import { CanActivateFn, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { selectIsLogged } from "src/app/store/user/user.selector";
import { Observable, map } from "rxjs";
import { Injectable, inject } from "@angular/core";

@Injectable()
export class Auth {
  public constructor(private router: Router, private store: Store) {}

  public canActivate(): Observable<boolean> {
    return this.store.select(selectIsLogged).pipe(
      map((data: boolean) => {
        if (data) {
          return true;
        }
        this.router.navigate(["/pokemons/register"]);

        return false;
      })
    );
  }
}

export const authGuard: CanActivateFn = (): Observable<boolean> => {
  return inject(Auth).canActivate();
};
