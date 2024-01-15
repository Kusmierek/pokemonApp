import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export const samePasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return control.value.password === control.value.confirmPassword
    ? null
    : { PasswordNoMatch: true };
};
