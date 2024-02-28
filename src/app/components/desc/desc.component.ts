import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-desc',
  standalone: true,
  imports: [],
  providers: [BookService],
  templateUrl: './desc.component.html',
  styleUrl: './desc.component.scss'
})
export class DescComponent implements OnInit{
  constructor(private bookservice: BookService) {}

  data: any;

  @Input() id = 1;

  ngOnInit(): void {
    this.getIdBook();
    this.getIdBook();
  }

  getIdBook(){
    this.bookservice
    .getIdBook(this.id)
    .subscribe({
      next: (data: any) => {
        this.data = data;
        console.log(data);
        console.log(
          this.bookservice.getIdBook(this.id)
        );
      },
    });
  };
}
