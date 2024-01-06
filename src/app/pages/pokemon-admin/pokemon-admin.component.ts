import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { PokemonService } from "src/app/shared/service/pokemon/pokemon-service";
import { IPokemon } from "src/app/shared/types/pokemon";
import { IUpdate } from "src/app/shared/types/updated";
import { PokemonFormService } from "../../shared/service/pokemonForm/pokemon-form.service";

@Component({
  selector: "app-pokemon-admin",
  templateUrl: "./pokemon-admin.component.html",
  styleUrl: "./pokemon-admin.component.scss",
})
export class PokemonAdminComponent {
  pokemons!: Observable<IPokemon[]>;
  updatedPokemon!: IPokemon;
  visible = false;
  isUpdate = false;
  constructor(
    private pokemonService: PokemonService,
    private pokemonFormService: PokemonFormService
  ) {}

  ngOnInit() {
    this.pokemons = this.pokemonService.pokemons;
  }

  changeVisible(updateInfo?: IUpdate<IPokemon>) {
    if (updateInfo) {
      this.isUpdate = updateInfo.isUpdated;
      this.updatedPokemon = updateInfo.updatedObject;
      this.pokemonFormService.setUpdatedValues(this.updatedPokemon);
    } else {
      this.isUpdate = false;
      this.pokemonFormService.resetValues();
    }
    this.visible = !this.visible;
  }
}
