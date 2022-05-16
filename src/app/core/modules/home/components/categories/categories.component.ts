import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Category } from '../interfaces/category';
import { loadCategories } from './state/categories.action';
import { getCategory } from './state/categories.selector';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories!: Observable<Category[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.categories = this.store.select(getCategory);
    this.store.dispatch(loadCategories());
  }
}
