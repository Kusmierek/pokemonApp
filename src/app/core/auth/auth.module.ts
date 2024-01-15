import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Auth } from "./guards/auth.guard";
import { Permissions } from "./guards/permissions.guard";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [Auth, Permissions],
})
export class AuthModule {}
