import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyPokemonComponent } from "./my-pokemon/my-pokemon.component";
import { ComponentsModule } from "../core/components/components.module";
import { RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { SharedModule } from "../shared/shared.module";
import { PokemonAdminComponent } from "./pokemon-admin/pokemon-admin.component";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { MainPageComponent } from "./main-page/main-page.component";
import { PokemonIdComponent } from "./pokemon-id/pokemon-id.component";
import { ErrorPageComponent } from "./error-page/error-page.component";

@NgModule({
  declarations: [
    MyPokemonComponent,
    LoginComponent,
    RegisterComponent,
    PokemonAdminComponent,
    MainPageComponent,
    PokemonIdComponent,
    ErrorPageComponent,
  ],
  exports: [
    MyPokemonComponent,
    RouterModule,
    MainPageComponent,
    ErrorPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    ButtonModule,
    DialogModule,
  ],
})
export class PagesModule {}
