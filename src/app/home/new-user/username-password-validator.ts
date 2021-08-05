import { FormGroup } from '@angular/forms';

export function usernamePasswordValidator(
  formGroup: FormGroup
): null | { usernamePassword: true } {
  const username = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if (username.trim() + password.trim()) {
    return username !== password ? null : { usernamePassword: true };
  }
  return null;
}
