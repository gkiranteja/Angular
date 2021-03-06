import { AbstractControl } from '@angular/forms';

// export function PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
//     const password = control.get('pwd');
//     const confirmPassword = control.get('cpwd');
//     return password && confirmPassword && password.value !== confirmPassword.value ?
//     { 'misMatch': true }: null;
// }

export function PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
   const password = control.get('pwd');
   const confirmPassword = control.get('cpwd');
   
   if((password.pristine) || (confirmPassword.pristine)){
       return null;
   }

   return password && confirmPassword && password.value !== confirmPassword.value ? { 'mismatch' : true} : null;
}