import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IUpdate } from "../../types/updated";

@Component({
  selector: "app-admin-tile",
  templateUrl: "./admin-tile.component.html",
  styleUrl: "./admin-tile.component.scss",
})
export class AdminTileComponent<T extends { id: string }> {
  @Input() providedObject!: T;
  @Output() onUpdateEmitter = new EventEmitter<IUpdate<T>>();

  public natural = new Intl.Collator("en").compare;

  asIsOrder() {
    return 0;
  }

  onUpdate() {
    this.onUpdateEmitter.emit({
      isUpdated: true,
      updatedObject: this.providedObject,
    });
  }
}
