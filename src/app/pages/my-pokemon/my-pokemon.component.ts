import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../../shared/service/pokemon/pokemon-service";
import { Observable } from "rxjs";
import { Pokemon } from "src/app/shared/types/pokemon";
import { Store } from "@ngrx/store";
import { selectName } from "src/app/store/user/user.selector";

@Component({
  selector: "app-my-pokemon",
  templateUrl: "./my-pokemon.component.html",
  styleUrls: ["./my-pokemon.component.scss"],
})
export class MyPokemonComponent implements OnInit {
  public pokemons!: Observable<Pokemon[]>;
  public constructor(
    private pokemonService: PokemonService,
    private store: Store
  ) {}
  public ngOnInit(): void {
    this.store
      .select(selectName)
      .subscribe(
        (name: string) =>
          (this.pokemons = this.pokemonService.getPokemonsByUser(name))
      );
  }
}
