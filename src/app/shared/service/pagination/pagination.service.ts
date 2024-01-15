import { Injectable } from "@angular/core";
import { Pagination } from "../../types/pagination";

@Injectable({
  providedIn: "root",
})
export class PaginationService {
  public usePagination<T>(elements: T[], pagination: Pagination): T[] {
    return elements.slice(
      pagination.firstElement,
      pagination.firstElement + pagination.howManyRecords
    );
  }
}
