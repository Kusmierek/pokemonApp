import { Component } from "@angular/core";
import { PokemonFormService } from "../../../shared/service/pokemonForm/pokemon-form.service";

@Component({
  selector: "app-pokemon-form",
  templateUrl: "./pokemon-form.component.html",
  styleUrl: "./pokemon-form.component.scss",
})
export class PokemonFormComponent {
  constructor(public pokemonFormService: PokemonFormService) {}

  log() {
    console.log(this.pokemonFormService.pokemons.controls);
  }
}
