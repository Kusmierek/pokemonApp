import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { PokemonService } from "src/app/shared/service/pokemon/pokemon-service";
import { Pokemon } from "src/app/shared/types/pokemon";

@Component({
  selector: "app-pokemon-id",

  templateUrl: "./pokemon-id.component.html",
  styleUrl: "./pokemon-id.component.scss",
})
export class PokemonIdComponent implements OnInit {
  public constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  public pokemon: Pokemon = {} as Pokemon;

  public ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>
      this.pokemonService
        .getPokemon(params["id"])
        .subscribe((data: Pokemon) => {
          this.pokemon = data;
        })
    );
  }
}
