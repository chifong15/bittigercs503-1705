import { Routes, RouterModule } from '@angular/router';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { Route } from '@angular/router/src/config';

const routes: Route = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full'
    },
    {
        path: 'problems',
        component: ProblemListComponent
        
    },
    {
        path: 'problems/:id',
        component: ProblemDetailComponent
        
    },
    {
        path: '**',
        redirectTo: 'problems'

    },

];

export const routing = RouterModule.forRoot(routes);