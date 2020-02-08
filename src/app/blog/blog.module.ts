import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BlogListComponent, BlogPostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BlogRoutingModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [
  ]
})
export class BlogModule { }
