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
import { RouterModule, Routes } from '@angular/router';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
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
