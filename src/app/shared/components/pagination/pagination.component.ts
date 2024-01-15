import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PaginatorState } from "primeng/paginator";
import { Pagination } from "../../types/pagination";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrl: "./pagination.component.scss",
})
export class PaginationComponent {
  @Input() public totalItems!: number;
  @Output() public rowOrPageChange: EventEmitter<Pagination> =
    new EventEmitter<Pagination>();
  public first: number = 0;
  public rows: number = 5;
  public rowsPerPage: number[] = [5, 10, 15];

  public onPageChange(event: PaginatorState): void {
    this.first = event.first as number;
    this.rows = event.rows as number;
    const pagination: Pagination = {
      firstElement: this.first,
      howManyRecords: this.rows,
    };
    this.rowOrPageChange.emit(pagination);
  }
}
