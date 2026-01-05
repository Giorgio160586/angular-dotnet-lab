import { Component, computed, inject, OnInit, Signal, signal } from '@angular/core';
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
import { ProductModel } from './product.model';
import { ProductsService } from './products.service';

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
  private readonly productsService = inject(ProductsService);
  protected readonly products: Signal<ProductModel[]> = this.productsService.getAll();
  protected selectedProduct?: ProductModel;
  
  protected readonly filteredProducts = computed<ProductModel[]>(() => {
    const list = this.products();
    const q = this.searchQuery().trim().toLowerCase();
    if (!q) return list;
    return list.filter(p =>
      (p.name ?? '').toLowerCase().includes(q) ||
      (p.category ?? '').toLowerCase().includes(q) ||
      (p.status ?? '').toLowerCase().includes(q)
    );
  });

  protected readonly searchQuery = signal<string>('');
  protected readonly loading = signal<boolean>(false);

  protected searchProducts = () => {
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
    }, 300);
  };

  protected onPageChange(event: TableLazyLoadEvent): void {
    console.log("[ProductOverviewWidget] onPageChange", { event })
  }
}

