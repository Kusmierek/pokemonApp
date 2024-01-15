import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrl: "./modal.component.scss",
})
export class ModalComponent {
  @Input() public textInformation!: string;
  @Output() public isConfimEmitter: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public isConfirm(isConfirm: boolean): void {
    this.isConfimEmitter.emit(isConfirm);
  }
}
