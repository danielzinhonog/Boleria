import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer.component';

const routes: Routes = [
  {
    path: '',
    component: FooterComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../home/home.module').then(m => m.HomePageModule)
      },    
      {
        path: '',
        redirectTo: '/footer/home',
        pathMatch: 'full'
      }
    ]
  },

    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FooterRoutingModule { }
