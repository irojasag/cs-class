import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './pages/loading/loading.component';

const routes: Routes = [
  {
    path: '',
    component: LoadingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingRoutingModule {}
