import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book';
import {BooksService} from '../service/books/books.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: Book = {};
  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  createBook(){
    this.bookService.createBook(this.book).subscribe(() => {
      this.book = {};
      alert('Them thanh cong');
    });
  }

}
