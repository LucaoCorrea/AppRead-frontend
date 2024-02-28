import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';


@Component({
  selector: 'app-all-books',
  standalone: true,
  imports: [],
  providers: [BookService],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.scss'
})
export class AllBooksComponent implements OnInit {
  constructor(private bookservice: BookService) {}

  

  data: any;

  ngOnInit(): void {
    this.getAllBooks();

  }


  getAllBooks() {
    this.bookservice.getAllBooks().subscribe({
      next: (data: any) => {
        this.data = data;
        console.log(data);
      },
    });
  }
  
  }
