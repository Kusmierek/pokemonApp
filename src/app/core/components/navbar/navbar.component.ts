import { Component } from "@angular/core";
import { NavigationService } from "../../../shared/service/navigation/navigation.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  constructor(public navigationService: NavigationService) {}
}
