import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyPokemonComponent } from "../my-pokemon/my-pokemon.component";
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { AuthModule } from "src/app/core/auth/auth.module";
import { authGuard } from "src/app/core/auth/guards/auth.guard";
import { PokemonIdComponent } from "../pokemon-id/pokemon-id.component";

const routes: Routes = [
  {
    path: "",
    component: MyPokemonComponent,
    canActivate: [authGuard],
  },
  { path: "details/:id", component: PokemonIdComponent },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AuthModule],
  exports: [RouterModule],
})
export class PageRoutingModule {}
