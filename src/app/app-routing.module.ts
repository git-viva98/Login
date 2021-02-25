import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryBreakupReportComponent } from './category-breakup-report/category-breakup-report.component';
import { AuthGuard } from './gaurds/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'category-breakup-report', component: CategoryBreakupReportComponent, canActivate: [AuthGuard]},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
