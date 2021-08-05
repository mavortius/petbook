import { AbstractControl } from '@angular/forms';

export function lowerCaseValidator(
  control: AbstractControl
): null | { lowerCase: true } {
  const value = control.value as string;

  if (value !== value.toLowerCase()) {
    return { lowerCase: true };
  } else {
    return null;
  }
}
