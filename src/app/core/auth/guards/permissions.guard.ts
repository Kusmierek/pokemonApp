import { CanActivateFn, Router } from "@angular/router";
import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectIsAdmin } from "src/app/store/user/user.selector";
import { Observable, map } from "rxjs";

@Injectable()
export class Permissions {
  public constructor(private router: Router, private store: Store) {}

  public canActivate(): Observable<boolean> {
    return this.store.select(selectIsAdmin).pipe(
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

export const permissionsGuard: CanActivateFn = (): Observable<boolean> => {
  return inject(Permissions).canActivate();
};
