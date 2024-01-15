/* eslint-disable @typescript-eslint/typedef */
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";

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
  { path: "", component: MainPageComponent },
  { path: "**", component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
