import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const applicationRoutes: Routes = [
  { path: '', loadChildren: () => import('../pages/index/index.module').then(m => m.IndexModule) },
  { path: 'about-us', loadChildren: () => import('../pages/about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'contact-us', loadChildren: () => import('../pages/contact-us/contact-us.module').then(m => m.ContactUsModule) },
  { path: 'portfolio', loadChildren: () => import('../pages/portfolio/portfolio.module').then(m => m.PortfolioModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(applicationRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }