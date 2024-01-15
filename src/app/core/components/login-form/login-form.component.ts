import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { userActions } from "src/app/store/user/user.actions";
import { UserCredentials } from "src/app/shared/types/user/user";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent {
  public constructor(private store: Store) {}
  public loginForm: FormGroup<{
    username: FormControl<string | null>;
    password: FormControl<string | null>;
  }> = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl("", [Validators.required]),
    });

  public onSubmit(): void {
    const credentials: UserCredentials = {
      name: this.loginForm.value.username,
      password: this.loginForm.value.password,
    } as UserCredentials;
    this.store.dispatch(
      userActions["[Login]BeginLogin"]({ usercred: credentials })
    );
  }
}
