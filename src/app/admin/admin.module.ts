import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminAuthGaurd } from './services/admin-auth-gaurd.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DataTableModule } from 'angular-4-data-table';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/services/auth-guard.service';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DataTableModule,
    RouterModule.forChild([

      {
        path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGaurd]
      },
      {
        path: 'admin/products/:id',
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGaurd]
      },
      {
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGuard, AdminAuthGaurd]
      },
      {

        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuard, AdminAuthGaurd]
      }
    ])
  ],
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent
  ],
  providers: [
    AdminAuthGaurd
  ]
})
export class AdminModule { }
