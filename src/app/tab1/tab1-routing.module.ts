import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';


const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: 'home',
        loadChildren: () =>
        import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'news',
        loadChildren: () =>
        import('../news/news.module').then(m => m.NewsPageModule)
      },
      {
        path: 'account',
        loadChildren: () =>
        import('../account/account.module').then(m => m.AccountPageModule)
      },
      {
      path: 'register',
      loadChildren: () =>
      import('../register/register.module').then(m => m.RegisterPageModule)
      },
      {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
