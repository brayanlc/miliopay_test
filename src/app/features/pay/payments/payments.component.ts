import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from "../../../shared/components/page-header/page-header.component";
import { ButtonComponent, ButtonOutlineComponent } from "../../../shared/components/button/button.component";
import { StatusNavComponent } from "../components/status-nav/status-nav.component";
import { SummaryComponent } from "../components/summary/summary.component";
import { TableComponent } from "../components/table/table.component";
import { PaginatorComponent } from "../../../shared/components/paginator/paginator.component";

@Component({
  selector: 'app-payments',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, PageHeaderComponent, ButtonOutlineComponent, StatusNavComponent, SummaryComponent, TableComponent, PaginatorComponent],
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {

}
