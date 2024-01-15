import { Injectable } from "@angular/core";
import {
  FilterOption,
  FilterOptions,
  SortDirection,
  SortingOptions,
} from "../../types/sortAndFilter";

@Injectable({
  providedIn: "root",
})
export class SortAndFiltersService {
  public sort<T>(arrayOfObjects: T[], sortOptions: SortingOptions<T>): T[] {
    return arrayOfObjects.sort((a: T, b: T) => {
      const sortByA: T[keyof T] = a[sortOptions.sortBy];
      const sortByB: T[keyof T] = b[sortOptions.sortBy];
      const sortDirection: SortDirection = sortOptions.sort;

      if (sortDirection == "Ascending") {
        if (sortByA > sortByB) return 1;
        if (sortByA < sortByB) return -1;
      } else {
        if (sortByA < sortByB) return 1;
        if (sortByA > sortByB) return -1;
      }

      return 0;
    });
  }

  public filter<T>(arrayOfObjects: T[], filterOptions: FilterOptions<T>): T[] {
    const filterType: FilterOption = filterOptions.filterOption;
    const filterValue: number | string = filterOptions.filterUserValue;
    if (filterType === "String") {
      return arrayOfObjects.filter((x: T) =>
        this.containsSubstring(
          x[filterOptions.filter] as string,
          filterValue.toString()
        )
      );
    }

    return arrayOfObjects.filter((x: T) =>
      filterType == "Less than"
        ? this.isLess(x[filterOptions.filter] as number, filterValue as number)
        : this.isBigger(
            x[filterOptions.filter] as number,
            filterValue as number
        )
    );
  }

  private isBigger(element: number, number: number): boolean {
    return element > number;
  }

  private isLess(element: number, number: number): boolean {
    return element < number;
  }

  private containsSubstring(element: string, pattern: string): boolean {
    return element.includes(pattern);
  }
}
