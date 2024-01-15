import { Component, Input } from "@angular/core";
import { Pokemon } from "../../../shared/types/pokemon";
import { NavigationService } from "src/app/shared/service/navigation/navigation.service";

@Component({
  selector: "app-pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.scss"],
})
export class PokemonCardComponent {
  @Input() public pokemon!: Pokemon;
  public constructor(private navigationService: NavigationService) {}

  public seeDetails(): void {
    this.navigationService.navigateToPokemonById(this.pokemon.id);
  }
}
