import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PokemonFormService } from "../../../shared/service/pokemonForm/pokemon-form.service";
import { Pokemon } from "src/app/shared/types/pokemon";

@Component({
  selector: "app-pokemon-form",
  templateUrl: "./pokemon-form.component.html",
  styleUrl: "./pokemon-form.component.scss",
})
export class PokemonFormComponent implements OnInit {
  @Input() public isUpdate!: boolean;
  @Input() public updatedPokemon!: Pokemon;
  @Output() public changeVisible: EventEmitter<boolean> = new EventEmitter();
  public constructor(public pokemonFormService: PokemonFormService) {}

  public ngOnInit(): void {
    this.pokemonFormService.addPokemon();
  }

  public onSubmit(): void {
    this.pokemonFormService.onSubmit(this.isUpdate, this.updatedPokemon.id);
    this.changeVisible.emit();
  }
}
