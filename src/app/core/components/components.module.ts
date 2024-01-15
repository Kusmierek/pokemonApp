import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { ButtonModule } from "primeng/button";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { CardModule } from "primeng/card";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { PasswordModule } from "primeng/password";
import { InputTextModule } from "primeng/inputtext";
import { LoginFormComponent } from "./login-form/login-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MessageModule } from "primeng/message";
import { PokemonCardComponent } from "./pokemon-card/pokemon-card.component";
import { HttpClientModule } from "@angular/common/http";
import { PokemonFormComponent } from "./pokemon-form/pokemon-form.component";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { LoaderComponent } from "./loader/loader.component";

@NgModule({
  declarations: [
    NavbarComponent,
    RegisterFormComponent,
    LoginFormComponent,
    PokemonCardComponent,
    RegisterFormComponent,
    PokemonFormComponent,
    LoaderComponent,
  ],
  imports: [
    ButtonModule,
    CommonModule,
    CardModule,
    InputGroupModule,
    InputGroupAddonModule,
    PasswordModule,
    InputTextModule,
    FormsModule,
    MessageModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProgressSpinnerModule,
  ],
  exports: [
    NavbarComponent,
    RegisterFormComponent,
    InputTextModule,
    LoginFormComponent,
    PokemonCardComponent,
    LoaderComponent,
    PokemonFormComponent,
  ],
})
export class ComponentsModule {}
