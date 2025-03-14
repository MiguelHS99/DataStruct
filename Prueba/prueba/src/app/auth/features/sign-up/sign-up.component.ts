import { Component, inject } from '@angular/core';
import{ FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { hasEmailError, isRequired, requerido } from '../../herramientas/validadores';

interface FormSignUp{
  email: FormControl<string | null>;
  contraseña: FormControl<string | null>;
}

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html'
})
export default class SignUpComponent {
private _formBuilder = inject(FormBuilder);

seRequiere(field: 'email' | 'contraseña'){
  return requerido(field, this.form);
}

isEmailRequired(){
  return hasEmailError(this.form);
}
form = this._formBuilder.group<FormSignUp>({
  email:  this._formBuilder.control('', [Validators.required, Validators.email]),
  contraseña: this._formBuilder.control('', Validators.required)
})
submit(){
  if(this.form.invalid) return;
  const {email, contraseña} = this.form.value;
  if(!email || !contraseña) return;
  console.log(email, contraseña);
}
}
