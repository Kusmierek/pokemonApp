import { Component } from "@angular/core";
import { NavigationService } from "../../../shared/service/navigation/navigation.service";
import { Store } from "@ngrx/store";
import {
  selectIsAdmin,
  selectIsLogged,
  selectName,
} from "src/app/store/user/user.selector";
import { Observable } from "rxjs";
import { userActions } from "src/app/store/user/user.actions";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  public isLogged: Observable<boolean> = this.store.select(selectIsLogged);
  public isAdmin: Observable<boolean> = this.store.select(selectIsAdmin);
  public name: Observable<string> = this.store.select(selectName);

  public constructor(
    private navigationService: NavigationService,
    private store: Store
  ) {}

  public navigationToRegister(): void {
    this.navigationService.navigateToRegister();
  }

  public navigationToLogin(): void {
    this.navigationService.navigateToLogin();
  }

  public navigationToPokemonAdmin(): void {
    this.navigationService.navigateToPokemonAdmin();
  }

  public navigationToMyPokemon(): void {
    this.navigationService.navigateToPokemon();
  }

  public logout(): void {
    this.store.dispatch(userActions["[LOGOUT]LogoutSuccess"]());
  }

  public navigationToMainPage(): void {
    this.navigationService.navigateToMain();
  }
}
