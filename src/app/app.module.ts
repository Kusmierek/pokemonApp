import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ComponentsModule } from "./core/components/components.module";
import { PagesModule } from "./pages/pages.module";
import { AppRoutingModule } from "./app-routing.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { getInitialUserState } from "./store/helper/getInitialUser";
import { userReducer } from "./store/user/user.reducers";
import { UserEffect } from "./store/user/user.effects";
import { AuthModule } from "./core/auth/auth.module";
import { ToastModule } from "primeng/toast";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    AuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    PagesModule,
    AppRoutingModule,
    StoreModule.forRoot(
      { user: userReducer },
      { initialState: { user: getInitialUserState() } }
    ),
    EffectsModule.forRoot([UserEffect]),
    CoreModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
