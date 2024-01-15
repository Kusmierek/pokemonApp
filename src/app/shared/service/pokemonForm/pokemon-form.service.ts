import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { PokemonForm } from "../../types/pokemonForm";
import { PokemonService } from "../pokemon/pokemon-service";
import { Pokemon } from "../../types/pokemon";

@Injectable({
  providedIn: "root",
})
export class PokemonFormService {
  public constructor(private pokemonService: PokemonService) {}

  public allPokemons: FormGroup<{
    pokemons: FormArray<FormGroup<PokemonForm>>;
  }> = new FormGroup({
      pokemons: new FormArray<FormGroup<PokemonForm>>([]),
    });

  public get pokemons(): FormArray<FormGroup<PokemonForm>> {
    return this.allPokemons.controls.pokemons;
  }

  public addPokemon(): void {
    // eslint-disable-next-line @typescript-eslint/typedef
    const newPokemon = new FormGroup<PokemonForm>({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      description: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      imageUrl: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      agility: new FormControl(null, [Validators.max(1000)]),
      attack: new FormControl(null, [Validators.max(1000)]),
      defense: new FormControl(null, [Validators.max(1000)]),
      intelligence: new FormControl(null, [Validators.max(1000)]),
    });
    this.pokemons.push(newPokemon);
  }

  public setUpdatedValues(pokemon: Pokemon): void {
    const { id, ...restPokemon }: Pokemon = pokemon;
    this.allPokemons.setValue({
      pokemons: [restPokemon],
    });
  }

  public resetValues(): void {
    this.pokemons.reset();
  }

  public onSubmit(isUpdated: boolean, id?: string): void {
    const pokemons: Pokemon[] = this.allPokemons.value.pokemons as Pokemon[];
    isUpdated
      ? id && this.pokemonService.updatePokemon(pokemons, id).subscribe()
      : this.pokemonService.postManyPokemons(pokemons).subscribe();
  }
}
