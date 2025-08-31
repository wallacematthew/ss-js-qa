import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { FinancialAidComponent } from './pages/financial-aid.component';
import { GraduateProgramsComponent } from './pages/graduate-programs.component';
import { UndergraduateProgramsComponent } from './pages/undergraduate-programs.component';
import { ContactComponent } from './pages/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'financial-aid', component: FinancialAidComponent },
  { path: 'graduate-programs', component: GraduateProgramsComponent },
  { path: 'undergraduate-programs', component: UndergraduateProgramsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' },
];
