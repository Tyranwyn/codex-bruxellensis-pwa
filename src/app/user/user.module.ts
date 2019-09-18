import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/user/user.effects';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EnumToArrayModule } from '../enum-to-array/enum-to-array.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    StoreModule.forFeature('userState', reducers),
    EffectsModule.forFeature([UserEffects]),
    EnumToArrayModule
  ],
  exports: [LoginComponent]
})
export class UserModule {
}
