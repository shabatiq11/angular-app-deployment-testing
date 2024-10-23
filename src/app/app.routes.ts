import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, children: [
        {path: 'all-products', component: AllUsersComponent},
        // {path: '**', component: NotFoundComponent}
    ]},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];
