import { AbstractControl } from '@angular/forms';

// export function PasswordConfirm(control: AbstractControl): { [key: string]: boolean } | null {
//     const pwdd = control.get('pwd');
//     const cpwdd = control.get('cpwd');
//     return pwdd && cpwdd && pwdd.value !== cpwdd.value ?
//     { 'misMatch': true }: null;
// }

export function PasswordConfirm(control: AbstractControl): { [key: string]: boolean } | null {
    const pwdd = control.get('pwd');
    const cpwdd = control.get('cpwd');
    if ((pwdd.pristine) || (cpwdd.pristine)) {
        return null;
    }
    return pwdd && cpwdd && pwdd.value !== cpwdd.value ?
    { 'misMatch': true }: null;
}