import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "pokemon",
    loadChildren: () =>
      import("./pages/routing/pokemon-routing.module").then(
        (m) => m.PageRoutingModule
      ),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./pages/routing/admin-routing.module").then(
        (m) => m.PageRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
