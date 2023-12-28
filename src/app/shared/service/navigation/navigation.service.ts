import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  constructor(private router: Router) {}

  public navigateToRegister() {
    this.router.navigateByUrl("/pokemon/register");
  }

  public navigateToLogin() {
    this.router.navigateByUrl("/pokemon/login");
  }

  public navigateToPokemonAdmin() {
    this.router.navigateByUrl("/admin/pokemon");
  }
}
