import { Component, computed, inject, OnInit, signal, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableLazyLoadEvent, TableModule, TablePageEvent } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ProductModel } from './product.model';
import { ProductsService } from './products.service';
import { URLStorage } from 'src/app/shared/table/url-storage';

@Component({
  selector: 'product-overview-widget',
  standalone: true,
  imports: [
    CommonModule, ButtonModule, IconFieldModule, InputIconModule, InputTextModule, 
    FormsModule, TableModule, TagModule, RatingModule
  ],
  templateUrl: './products.component.html'
})
export class ProductOverviewWidget {
  @ViewChild('table') table!: Table;

  protected pageSize: number = 100;
  private readonly productsService = inject(ProductsService);

  protected selectedProduct?: ProductModel;
  public totalRecords = signal<number>(0);
  public products = signal<ProductModel[]>([]);

  protected readonly searchQuery = signal<string>('');
  protected loading = signal<boolean>(false);

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


  
  ngAfterViewInit() {
    const storageCustom = new URLStorage('prime.store');
    (this.table as Table).getStorage = () => storageCustom;
    this.table.stateKey = this.table.stateKey ?? 'tableState';
  }

  ngOnInit() {
    this.loadProducts({ first: 0, rows: this.pageSize } as TableLazyLoadEvent);
  }

  protected searchProducts(): void {
    // this.loadProducts();
  }

  protected onLazyLoad(event: TableLazyLoadEvent): void {
    this.loadProducts(event);
  }

  private loadProducts(event: TableLazyLoadEvent): void {
    if (event.rows === 0) return;
    const first = (event.first ?? 0);

    const canSkipFetch =
      this.totalRecords() > 0 &&
      this.products().slice(first, first + this.pageSize).every(item => item !== undefined);

    if (canSkipFetch) {
      console.log("[ProductOverviewWidget] skip fetch", { first, pageSize: this.pageSize });
      return;
    }

    this.loading.set(true);

    this.productsService.get(first, this.pageSize).subscribe({
      next: (data: any) => {
        const pageItems = data[0] as ProductModel[];
        const total = data[1] as number;
        
        this.totalRecords.set(total);

        if (this.totalRecords() !== this.products().length) {
          this.products.set(Array.from({ length: total }));
        }

        const current = this.products().slice();
        current.splice(first, pageItems.length, ...pageItems);
        this.products.set(current);
        this.loading.set(false);

        console.log("[ProductOverviewWidget] loadProducts", { first, off: event.first, event, loading: this.loading(), products: this.products(), data, totalRecords: this.totalRecords() });

      },
      error: () => {
        this.products.set([]);
        this.loading.set(false);
      }
    });
  }
}
