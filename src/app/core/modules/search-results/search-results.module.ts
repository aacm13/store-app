import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultsRoutingModule } from './search-results-routing.module';
import { SearchResultsComponent } from './components/search-results.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [SearchResultsComponent],
  imports: [
    CommonModule,
    SearchResultsRoutingModule,
    MatIconModule,
    MatCardModule,
  ],
})
export class SearchResultsModule {}
