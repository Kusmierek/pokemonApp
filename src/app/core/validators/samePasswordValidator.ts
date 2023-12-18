import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export const samePasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  console.log(control.value.password);
  console.log(control.value.confirmPassword);

  return control.value.password === control.value.confirmPassword
    ? null
    : { PasswordNoMatch: true };
};
