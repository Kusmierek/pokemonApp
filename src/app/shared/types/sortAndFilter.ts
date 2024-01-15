export interface SortingOptions<T> {
  sortBy: keyof T;
  sort: SortDirection;
}

export interface FilterOptions<T> {
  filter: keyof T;
  filterOption: FilterOption;
  filterUserValue: number | string;
}

export type SortDirection = "Ascending" | "Descending";
export type FilterOption = "Less than" | "More than" | "None" | "String";
