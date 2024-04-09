import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-desc',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule ],
  providers: [BookService],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewComponent implements OnInit {
  constructor(private bookservice: BookService) {}

  data: any;

  @Input() id = 0;



  ngOnInit(): void {
    this.getIdBook();
  }

  getIdBook() {
    this.bookservice.getIdBook(this.id).subscribe({
      next: (data: any) => {
        this.data = data;
        console.log(data);
        console.log(this.bookservice.getIdBook(this.id));
      },
    });
  }
}
