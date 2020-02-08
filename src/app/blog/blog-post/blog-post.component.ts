import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit, OnDestroy {
  public post: string;
  
  protected idSubscription: Subscription;

  constructor(protected route: ActivatedRoute) { }

  public ngOnInit() {
    this.idSubscription = this.route.params.subscribe(params => this.onRouteChange(params));
  }

  public ngOnDestroy() {
    if (this.idSubscription) {
      this.idSubscription.unsubscribe();
    }
  }

  protected onRouteChange(params: Params): void {
    const id = params['id'];
    this.post = `./assets/blog/${id}/${id}.md`;
  }
}
