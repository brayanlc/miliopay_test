import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() pageSize!: number;
  @Input() length: number | undefined = 0;

  @Output() pageChange = new EventEmitter<number>();

  currentPage!: number;
  totalPages!: number;

  ngOnInit() {
    this.currentPage = 1;
    this.totalPages = Math.ceil((this.length || 0) / this.pageSize);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
    this.pageChange.emit(this.currentPage);
  }

  getPageNumbers(): number[] {
    const pageNumbers = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  get isLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }
}
