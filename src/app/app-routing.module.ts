import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'saml',
    
    loadChildren: () => import('./components/saml/saml.module').then( m => m.SamlModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./components/password/password.module').then( m => m.PasswordModule)
  },
  {
    path: 'mailpass/:mail',
    loadChildren: () => import('./components/mailpass/mailpass.module').then( m => m.MailpassModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./components/createaccount/createaccount.module').then( m => m.CreateaccountModule)
  },
  {
    path: 'tellus',
    loadChildren: () => import('./components/tellus/tellus.module').then( m => m.TellusModule)
  },
  {
    path: 'notfound',
    loadChildren: () => import('./components/notfound/notfound.module').then( m => m.NotfoundModule)
  },
  {
    path: '**',
    redirectTo: 'notfound',
    pathMatch: 'full' ,
  },
  {
    path:'',
    
    redirectTo: 'notfound',
    pathMatch: 'full' ,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules , useHash:true  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
