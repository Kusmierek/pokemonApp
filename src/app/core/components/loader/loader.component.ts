import { Component, OnInit } from "@angular/core";
import { LoadingService } from "src/app/shared/service/loading/loading.service";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrl: "./loader.component.scss",
})
export class LoaderComponent implements OnInit {
  public isLoading!: boolean;
  public constructor(public loader: LoadingService) {}

  public ngOnInit(): void {
    this.loader.isLoading.subscribe((data: boolean) => (this.isLoading = data));
  }
}
