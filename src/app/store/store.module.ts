import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './pages/store/store.component';
import { LocationBlockComponent } from './component/location-block/location-block.component';
import { SearchBlockComponent } from './component/search-block/search-block.component';

@NgModule({
  declarations: [StoreComponent, LocationBlockComponent, SearchBlockComponent],
  imports: [CommonModule, StoreRoutingModule],
})
export class StoreModule {}
