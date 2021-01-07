import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book';
import {BooksService} from '../service/books/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  listBooks: Book[] = [];
  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.getAllBook();
  }

  // tslint:disable-next-line:typedef
  getAllBook(){
    this.bookService.getAllBooks().subscribe(listBook => {
      this.listBooks = listBook;
    }, error => console.log(error));
  }

}
