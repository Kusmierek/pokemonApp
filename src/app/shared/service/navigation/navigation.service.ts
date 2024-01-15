import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  public constructor(private router: Router) {}

  public navigateToRegister(): void {
    this.router.navigateByUrl("/pokemon/register");
  }

  public navigateToLogin(): void {
    this.router.navigateByUrl("/pokemon/login");
  }

  public navigateToPokemonAdmin(): void {
    this.router.navigateByUrl("/admin/pokemon");
  }

  public navigateToPokemon(): void {
    this.router.navigateByUrl("/pokemon");
  }

  public navigateToPokemonById(id: string): void {
    this.router.navigate(["/pokemon/details", id]);
  }

  public navigateToMain(): void {
    this.router.navigate([""]);
  }
}
