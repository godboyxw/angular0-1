import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoDbService } from './todo/todo-data';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';

import { AuthService } from './core/auth.service';
import {TodoService} from './todo/todo.service'
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewsComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService)
  ],
  providers: [
    {provide : 'auth',useClass:AuthService},TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
