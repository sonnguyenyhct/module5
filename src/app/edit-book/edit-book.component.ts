import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book';
import {BooksService} from '../service/books/books.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
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
  // tslint:disable-next-line:typedef
  editBook(id: number){
    this.bookService.editBook(id, this.book).subscribe(() => {
      this.router.navigate(['/list-book']);
    });

  }
}
