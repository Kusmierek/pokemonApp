import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, catchError, of, tap } from "rxjs";
import { environment } from "../../../environment/environment.prod";
import { Pokemon } from "../../types/pokemon";
import { Pagination } from "../../types/pagination";
import { PaginationService } from "../pagination/pagination.service";
import { SortingOptions, FilterOptions } from "../../types/sortAndFilter";
import { SortAndFiltersService } from "../sortAnfFilters/sort-and-filters.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  public pokemons: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>(
    []
  );
  public allRecordsNumber: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  private baseUrl: string = environment.baseUrl;
  private pokemonUrl: string = "/api/Pokemon";
  private postMany: string = "/many";
  private userPokemonsUrl: string = "/userpokemons";
  private servicePagination: Pagination = {
    firstElement: 0,
    howManyRecords: 5,
  };
  private serviceSorting: SortingOptions<Pokemon> = {
    sortBy: "id",
    sort: "Ascending",
  };
  private serviceFilter: FilterOptions<Pokemon> = {
    filter: "id",
    filterOption: "None",
    filterUserValue: "",
  };
  private pokemonsModification: BehaviorSubject<Pokemon[]> =
    new BehaviorSubject<Pokemon[]>([]);

  public constructor(
    private http: HttpClient,
    private paginationService: PaginationService,
    private sortAndFiltersService: SortAndFiltersService
  ) {}

  private httpOptions: {
    headers: HttpHeaders;
  } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  public get pokemonsAdmin(): Observable<Pokemon[]> {
    this.getPokemons();

    return this.pokemonsModification.asObservable();
  }

  public sortAndFiltersWithPagination(): void {
    const pokemons: Pokemon[] = this.pokemons.getValue();
    const filtredPokemons: Pokemon[] =
      this.serviceFilter.filterOption == "None"
        ? pokemons
        : this.sortAndFiltersService.filter(pokemons, this.serviceFilter);

    const numberOfRecords: number = filtredPokemons.length;
    this.allRecordsNumber.next(numberOfRecords);

    const sortedPokemons: Pokemon[] = this.sortAndFiltersService.sort(
      filtredPokemons,
      this.serviceSorting
    );
    this.pokemonsModification.next(
      this.paginationService.usePagination(
        sortedPokemons,
        this.servicePagination
      )
    );
  }

  public set pagination(pagination: Pagination) {
    this.servicePagination = pagination;
    this.sortAndFiltersWithPagination();
  }

  public set sorting(sorting: SortingOptions<Pokemon>) {
    this.serviceSorting = sorting;
    this.sortAndFiltersWithPagination();
  }

  public set filter(filter: FilterOptions<Pokemon>) {
    this.serviceFilter = filter;
    this.sortAndFiltersWithPagination();
  }

  private getPokemons(): void {
    this.http
      .get<Pokemon[]>(this.baseUrl + this.pokemonUrl)
      .pipe(catchError(this.handleError<Pokemon[]>()))
      .subscribe((fetchedPokemons: Pokemon[]) => {
        this.pokemons.next(fetchedPokemons);
        this.sortAndFiltersWithPagination();
      });
  }

  public postManyPokemons(pokemons: Pokemon[]): Observable<Pokemon[]> {
    const body: string = JSON.stringify(pokemons);

    return this.http
      .post<Pokemon[]>(
        this.baseUrl + this.pokemonUrl + this.postMany,
        body,
        this.httpOptions
      )
      .pipe(
        catchError(this.handleError<Pokemon[]>()),
        tap(() => this.getPokemons())
      );
  }

  public updatePokemon(pokemons: Pokemon[], id: string): Observable<Pokemon> {
    const body: string = JSON.stringify(pokemons[0]);

    return this.http
      .put<Pokemon>(
        this.baseUrl + this.pokemonUrl + `/${id}`,
        body,
        this.httpOptions
      )
      .pipe(
        catchError(this.handleError<Pokemon>()),
        tap(() => this.getPokemons())
      );
  }

  public deletePokemon(id: string): Observable<Pokemon> {
    return this.http
      .delete<Pokemon>(
        this.baseUrl + this.pokemonUrl + `/${id}`,
        this.httpOptions
      )
      .pipe(
        catchError(this.handleError<Pokemon>()),
        tap(() => this.getPokemons())
      );
  }

  public getPokemon(id: string): Observable<Pokemon> {
    return this.http
      .get<Pokemon>(this.baseUrl + this.pokemonUrl + `/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<Pokemon>()));
  }

  public getPokemonsByUser(name: string): Observable<Pokemon[]> {
    return this.http
      .get<Pokemon[]>(
        this.baseUrl + this.pokemonUrl + this.userPokemonsUrl + `/${name}`,
        this.httpOptions
      )
      .pipe(catchError(this.handleError<Pokemon[]>()));
  }

  private handleError<T>(result?: T) {
    return (): Observable<T> => {
      return of(result as T);
    };
  }
}
