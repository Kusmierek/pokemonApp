import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../../shared/service/pokemon/pokemon-service";
import { Observable } from "rxjs";
import { Pokemon } from "src/app/shared/types/pokemon";

@Component({
  selector: "app-my-pokemon",
  templateUrl: "./my-pokemon.component.html",
  styleUrls: ["./my-pokemon.component.scss"],
})
export class MyPokemonComponent implements OnInit {
  pokemons!: Observable<Pokemon[]>;

  constructor(private pokemonService: PokemonService) {}
  ngOnInit() {
    this.pokemons = this.pokemonService.getPokemon();
  }
}
