import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ProductModel } from './product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'product-overview-widget',
  standalone: true,
  imports: [
    CommonModule, ButtonModule, IconFieldModule, InputIconModule, InputTextModule, FormsModule, TableModule, TagModule, RatingModule
  ],
  templateUrl: './products.component.html'
})
export class ProductOverviewWidget  {
  protected page: number = 0;
  protected size: number = 10;
  private readonly productsService = inject(ProductsService);

  protected selectedProduct?: ProductModel;
  protected totalRecords = signal<number>(0);
  protected readonly products = signal<ProductModel[]>([]);

  protected readonly searchQuery = signal<string>('');
  protected loading: boolean = false;

  // Computed per filtraggio
  // protected readonly filteredProducts = computed<ProductModel[]>(() => {
  //   const list = this.products();
  //   const q = this.searchQuery().trim().toLowerCase();
  //   if (!q) return list;
  //   return list.filter(p =>
  //     (p.name ?? '').toLowerCase().includes(q) ||
  //     (p.category ?? '').toLowerCase().includes(q) ||
  //     (p.status ?? '').toLowerCase().includes(q)
  //   );
  // });

 
  protected searchProducts(): void {
    this.page = 0;
    // this.loadProducts();
  }

  protected onLazyLoad(event: TableLazyLoadEvent): void {
    console.log("[ProductOverviewWidget] onLazyLoad", { event });
    const rows = (event.rows ?? 10) === 0 ? 10 : (event.rows ?? 10);
    const first = event.first ?? 0;
    this.page = Math.floor(first / rows);
    this.size = rows;
    this.loadProducts();
  }

  private loadProducts(): void {
    this.loading = true;
    this.productsService.get(this.page, this.size).subscribe({
      next: (data: any) => {
        this.totalRecords.set(data[1]);
        this.products.set(data[0]);
        console.log("[ProductOverviewWidget] loadProducts", { page: this.page, size: this.size, data, totalRecords: this.totalRecords() });
        this.loading = false;
      },
      error: () => {
        this.products.set([]);
        this.loading = false;
      }
    });
  }
}
