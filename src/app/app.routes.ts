import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ArtistComponent } from './components/artist/artist.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        component: HomeComponent
    },
    {
        path: 'artists',
        component: ArtistComponent
    }
    
];
