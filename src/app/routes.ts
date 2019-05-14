/**
 * Created by InfluxIQ09 on 10/29/2018.
 */

import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArtistsexpageComponent} from './artistsexpage/artistsexpage.component';

const appRoutes : Routes = [
    {path: '' , component: HomeComponent},
    {path: 'artistex' , component: ArtistsexpageComponent}
];
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ useHash: true });
