import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { samePasswordValidator } from "src/app/core/validators/samePasswordValidator";
import { UserService } from "../../../shared/service/user/user.service";
import { Register } from "src/app/shared/types/user/registration";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"],
})
export class RegisterFormComponent {
  public registerForm: FormGroup<{
    username: FormControl<string | null>;
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    confirmPassword: FormControl<string | null>;
  }> = new FormGroup(
      {
        username: new FormControl("", [
          Validators.required,
          Validators.minLength(3),
        ]),
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required]),
        confirmPassword: new FormControl("", [Validators.required]),
      },
      { updateOn: "blur", validators: samePasswordValidator }
    );

  public constructor(private UserService: UserService) {}

  public onSubmit(): void {
    const transformedForm: Register = {
      name: this.registerForm.value.username as string,
      email: this.registerForm.value.email as string,
      password: this.registerForm.value.password as string,
    };
    this.UserService.register(transformedForm).subscribe();
  }
}
