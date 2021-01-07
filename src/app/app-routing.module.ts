import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksComponent} from './books/books.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {DeleteBookComponent} from './delete-book/delete-book.component';
import {EditBookComponent} from './edit-book/edit-book.component';
import {BookDetailComponent} from './book-detail/book-detail.component';

const routes: Routes = [
  {
    path: 'list-book',
    component : BooksComponent
  },
  {
    path: 'create-book',
    component : CreateBookComponent
  },
  {
    path: 'delete-book/:id',
    component : DeleteBookComponent
  },
  {
    path: 'edit-book/:id',
    component : EditBookComponent
  },
  {
    path: 'book-detail/:id',
    component : BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
