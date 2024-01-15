import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PokemonService } from "src/app/shared/service/pokemon/pokemon-service";
import { Pokemon } from "src/app/shared/types/pokemon";
import { Update } from "src/app/shared/types/updated";
import { PokemonFormService } from "../../shared/service/pokemonForm/pokemon-form.service";
import { Pagination } from "src/app/shared/types/pagination";
import { pokemonKeys, stringPokemonKeys } from "./helper/pokemonKeys";
import {
  FilterOptions,
  SortingOptions,
} from "src/app/shared/types/sortAndFilter";

@Component({
  selector: "app-pokemon-admin",
  templateUrl: "./pokemon-admin.component.html",
  styleUrl: "./pokemon-admin.component.scss",
})
export class PokemonAdminComponent implements OnInit {
  public pokemons!: Observable<Pokemon[]>;
  public updatedPokemon!: Pokemon;
  public idToDelete!: string;
  public allRecordsNumber!: Observable<number>;
  public visible: boolean = false;
  public isUpdate: boolean = false;
  public sortAndFilterOptions: string[] = pokemonKeys;
  public stringKeys: string[] = stringPokemonKeys;
  public isModalVisible: boolean = false;
  public modalText: string = `Are You sure to delete pokemon with id ${this.idToDelete}?`;

  public constructor(
    private pokemonService: PokemonService,
    private pokemonFormService: PokemonFormService
  ) {}

  public ngOnInit(): void {
    this.pokemons = this.pokemonService.pokemonsAdmin;
    this.allRecordsNumber = this.pokemonService.allRecordsNumber;
  }

  public changePagination(pagination: Pagination): void {
    this.pokemonService.pagination = pagination;
  }

  public changeSorting(sorting: SortingOptions<Pokemon>): void {
    this.pokemonService.sorting = sorting;
  }

  public changeFilter(filter: FilterOptions<Pokemon>): void {
    this.pokemonService.filter = filter;
  }

  public changeVisible(updateInfo?: Update<Pokemon>): void {
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

  public changeIsModalVisible(id: string): void {
    this.idToDelete = id;
    this.isModalVisible = !this.isModalVisible;
  }

  public isConfirmedToDelete(isConfirmed: boolean): void {
    isConfirmed &&
      this.pokemonService.deletePokemon(this.idToDelete).subscribe();
    this.isModalVisible = !this.isModalVisible;
  }
}
