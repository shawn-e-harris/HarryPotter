// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';


// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { QuotesComponent } from './quotes/quotes.component';
import { JkRowlingComponent } from './jk-rowling/jk-rowling.component';
import { BooksComponent } from './books/books.component';
import { MoviesComponent } from './movies/movies.component';
import { DiningComponent } from './dining/dining.component';
import { RidesComponent } from './rides/rides.component';
import { ShopsComponent } from './shops/shops.component';
import { ShowsComponent } from './shows/shows.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'jkRowling',
        component: JkRowlingComponent,
    },
    {
        path: 'books',
        component: BooksComponent
    },
    {
        path: 'movies',
        component: MoviesComponent
    },
    {
        path: 'dining',
        component: DiningComponent
    },
    {
        path: 'rides',
        component: RidesComponent
    },
    {
        path: 'shops',
        component: ShopsComponent
    },
    {
        path: 'shows',
        component: ShowsComponent
    },

    // REOMVE WHEN CLEAR
    {
        path: 'quotes',
        component: QuotesComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);