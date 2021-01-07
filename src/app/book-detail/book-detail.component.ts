import { Component, OnInit } from '@angular/core';
import {BooksService} from '../service/books/books.service';
import {Book} from '../model/book';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book = {};
  id: number | undefined;

  constructor(private bookService: BooksService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      this.id = +paramMap.get('id');
      this.getBookById(this.id);
    });
  }
  // tslint:disable-next-line:typedef
  getBookById(id: number){
    this.bookService.getBookById(id).subscribe( result => {
      this.book = result;
      console.log('thanh cong');
    }, error => {
      console.log('loi');
    });
  }

}
