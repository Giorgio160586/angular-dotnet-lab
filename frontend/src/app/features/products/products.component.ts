import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { LazyLoadEvent } from 'primeng/api';

interface ProductModel {
  name: string;
  category: string;
  price: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

@Component({
  selector: 'product-overview-widget',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FormsModule,
    TableModule,
    TagModule,
    RatingModule,
  ],
  templateUrl: './products.component.html'
})
export class ProductOverviewWidget {
  selectedProduct!: ProductModel;

  products: ProductModel[] = [
    { name: 'Laptop Pro', category: 'Electronics', price: 2499, status: 'In Stock' },
    { name: 'Wireless Mouse', category: 'Accessories', price: 49, status: 'Low Stock' },
    { name: 'Monitor 4K', category: 'Electronics', price: 699, status: 'Out of Stock' },
    { name: 'Keyboard', category: 'Accessories', price: 149, status: 'In Stock' },
    { name: 'Laptop Pro', category: 'Electronics', price: 2499, status: 'In Stock' },
    { name: 'Wireless Mouse', category: 'Accessories', price: 49, status: 'Low Stock' },
    { name: 'Monitor 4K', category: 'Electronics', price: 699, status: 'Out of Stock' },
    { name: 'Keyboard', category: 'Accessories', price: 149, status: 'In Stock' },
    { name: 'Laptop Pro', category: 'Electronics', price: 2499, status: 'In Stock' },
    { name: 'Wireless Mouse', category: 'Accessories', price: 49, status: 'Low Stock' },
    { name: 'Monitor 4K', category: 'Electronics', price: 699, status: 'Out of Stock' },
    { name: 'Keyboard', category: 'Accessories', price: 149, status: 'In Stock' },
    { name: 'Laptop Pro', category: 'Electronics', price: 2499, status: 'In Stock' },
    { name: 'Wireless Mouse', category: 'Accessories', price: 49, status: 'Low Stock' },
    { name: 'Monitor 4K', category: 'Electronics', price: 699, status: 'Out of Stock' },
    { name: 'Keyboard', category: 'Accessories', price: 149, status: 'In Stock' },
  ];
  searchQuery = '';
  loading = false;
  filteredProducts: any = [];

  ngOnInit() {
    this.filteredProducts = [...this.products];
  }

  searchProducts = () => {
    this.loading = true;
    this.filteredProducts = this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.category
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase()) ||
        product.status.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    setTimeout(() => {
      this.loading = false;
    }, 300);
  };

  protected onPageChange(event: TableLazyLoadEvent): void {
    console.log("[ProductOverviewWidget] onPageChange", { event })
  }
}
