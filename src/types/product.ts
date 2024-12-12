export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  color?: string;
  image: string;
  isNew?: boolean;
  description?: string;
  colors: number;
};

export type Category = {
  id: string;
  name: string;
  value: string;
}

export type SortOption = 'featured' | 'price-low' | 'price-high' | 'newest' | 'promo';

export type FilterProps = {
  categories: Category[];
  selectedCategories: string[];
  onFilterChange: (category: string) => void;
}

export type SortProps = {
  onSortChange: (value: SortOption) => void;
  currentSort: SortOption;
}

export type ProductGridProps = {
  products: Product[];
} 