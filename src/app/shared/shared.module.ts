import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PokemonService } from "./service/pokemon/pokemon-service";
import { AdminTileComponent } from "./components/admin-tile/admin-tile.component";
import { ButtonModule } from "primeng/button";
import { EllipsisPipe } from "./pipe/ellipsis.pipe";
import { ModalComponent } from "./components/modal/modal.component";
import { PaginatorModule } from "primeng/paginator";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { SortingAndFiltersComponent } from "./components/sorting-and-filters/sorting-and-filters.component";
import { DropdownModule } from "primeng/dropdown";
import { ReactiveFormsModule } from "@angular/forms";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { InputTextModule } from "primeng/inputtext";

@NgModule({
  declarations: [
    AdminTileComponent,
    EllipsisPipe,
    ModalComponent,
    PaginationComponent,
    SortingAndFiltersComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    PaginatorModule,
    DropdownModule,
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
  ],
  providers: [PokemonService],
  exports: [
    AdminTileComponent,
    PaginationComponent,
    SortingAndFiltersComponent,
    ModalComponent,
  ],
})
export class SharedModule {}
