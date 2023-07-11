import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { ButtonIconComponent, ButtonOutlineComponent, } from '../../../shared/components/button/button.component';
import { StatusNavComponent } from '../components/status-nav/status-nav.component';
import { SummaryComponent } from '../components/summary/summary.component';
import { TableComponent } from '../components/table/table.component';
import { PaginatorComponent } from '../../../shared/components/paginator/paginator.component';
import { PayService } from '../pay.service';
import { PayResponse } from '../pay';

@Component({
  selector: 'app-payments',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    PageHeaderComponent,
    ButtonOutlineComponent,
    StatusNavComponent,
    SummaryComponent,
    TableComponent,
    PaginatorComponent,
    NgOptimizedImage,
    ButtonIconComponent,
  ],
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
  private payService: PayService = inject(PayService);
  pageSize = 20;

  payments!: PayResponse;

  ngOnInit(): void {
    this.getPayments(1);
  }

  getPayments(currentPage: number): void {
    const skip = (currentPage - 1) * this.pageSize;
    this.payService.getPayments(skip, this.pageSize).subscribe((res) => {
      console.log(res);
      this.payments = res;
    });
  }
}
