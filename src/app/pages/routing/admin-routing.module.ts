import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonAdminComponent } from "../pokemon-admin/pokemon-admin.component";
import { permissionsGuard } from "src/app/core/auth/guards/permissions.guard";

const routes: Routes = [
  {
    path: "pokemon",
    component: PokemonAdminComponent,
    canActivate: [permissionsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
