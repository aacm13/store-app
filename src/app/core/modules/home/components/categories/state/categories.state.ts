import { Category } from '../../interfaces/category';

export interface CategoryState {
  category: Category[];
}
export const initialState: CategoryState = {
  category: [],
};
