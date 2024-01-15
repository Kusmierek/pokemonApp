import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Update } from "../../types/updated";

@Component({
  selector: "app-admin-tile",
  templateUrl: "./admin-tile.component.html",
  styleUrl: "./admin-tile.component.scss",
})
export class AdminTileComponent<T extends { id: string }> {
  @Input() public providedObject!: T;
  @Output() public updateEmitter: EventEmitter<Update<T>> = new EventEmitter<
    Update<T>
  >();
  @Output() public deleteEmitter: EventEmitter<string> =
    new EventEmitter<string>();

  public natural: (x: string, y: string) => number = new Intl.Collator("en")
    .compare;

  public asIsOrder(): number {
    return 0;
  }

  public onUpdate(): void {
    this.updateEmitter.emit({
      isUpdated: true,
      updatedObject: this.providedObject,
    });
  }

  public onDelete(): void {
    this.deleteEmitter.emit(this.providedObject.id);
  }
}
