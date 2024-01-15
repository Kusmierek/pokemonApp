import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import {
  FilterOptions,
  SortingOptions,
  FilterOption,
  SortDirection,
} from "../../types/sortAndFilter";

@Component({
  selector: "app-sorting-and-filters",
  templateUrl: "./sorting-and-filters.component.html",
  styleUrl: "./sorting-and-filters.component.scss",
})
export class SortingAndFiltersComponent<T extends object> implements OnInit {
  @Input() public sortAndFilterByOptions!: string[];
  @Input() public stringKeys!: string[];
  @Output() public sortingChange: EventEmitter<SortingOptions<T>> =
    new EventEmitter<SortingOptions<T>>();
  @Output() public filterChange: EventEmitter<FilterOptions<T>> =
    new EventEmitter<FilterOptions<T>>();

  public sortOptions: string[] = ["Ascending", "Descending"];
  public filterOptions: string[] = ["More than", "Less than"];

  public ngOnInit(): void {
    this.sortAndFilterByOptions.includes("None") ||
      this.sortAndFilterByOptions.push("None");
  }

  public sortAndFilters: FormGroup<{
    sortBy: FormControl<string | null>;
    sort: FormControl<string | null>;
    filter: FormControl<string | null>;
    filterOption: FormControl<string | null>;
    filterUserValue: FormControl<string | null>;
  }> = new FormGroup({
    sortBy: new FormControl("None"),
    sort: new FormControl("None"),
    filter: new FormControl("None"),
    filterOption: new FormControl("None"),
    filterUserValue: new FormControl(""),
  });

  public onChange(): void {
    const sortBy: keyof T =
      this.sortAndFilters.controls.sortBy.value == "None"
        ? ("Id" as keyof T)
        : (this.sortAndFilters.controls.sortBy.value as keyof T);

    const sortDirection: SortDirection =
      this.sortAndFilters.controls.sort.value == "None"
        ? "Ascending"
        : (this.sortAndFilters.controls.sort.value as SortDirection);

    const sortingOptions: SortingOptions<T> = {
      sort: sortDirection,
      sortBy: sortBy,
    };
    this.sortingChange.emit(sortingOptions);
  }

  public onFilter(): void {
    const filter: keyof T = this.sortAndFilters.controls.filter
      .value as keyof T;
    const filterOption: FilterOption = this.isString()
      ? "String"
      : (this.sortAndFilters.controls.filterOption.value as FilterOption);
    const filterUserValue: number | string = this.sortAndFilters.controls
      .filterUserValue.value as number | string;

    const filterOptions: FilterOptions<T> = {
      filter,
      filterOption,
      filterUserValue,
    };
    this.filterChange.emit(filterOptions);
  }

  public resetFilters(): void {
    this.sortAndFilters.controls.filter.setValue("None");
    this.sortAndFilters.controls.filterOption.setValue("None");
    this.sortAndFilters.controls.filterUserValue.setValue("");

    const filter: keyof T = this.sortAndFilters.controls.filter
      .value as keyof T;
    const filterOption: FilterOption = this.isString()
      ? "String"
      : (this.sortAndFilters.controls.filterOption.value as FilterOption);
    const filterUserValue: number | string = this.sortAndFilters.controls
      .filterUserValue.value as number | string;

    const filterOptions: FilterOptions<T> = {
      filter,
      filterOption,
      filterUserValue,
    };
    this.filterChange.emit(filterOptions);
  }

  public isString(): boolean {
    return this.stringKeys.includes(
      this.sortAndFilters.controls.filter.value as string
    );
  }
}
