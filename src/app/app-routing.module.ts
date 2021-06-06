import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'loading',
    loadChildren: () =>
      import('./loading/loading.module').then((m) => m.LoadingModule),
  },
  {
    path: 'store',
    loadChildren: () =>
      import('./store/store.module').then((m) => m.StoreModule),
  },
  {
    path: '**',
    redirectTo: 'loading',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
