import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor(
    private titleService: Title,
    private router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  /**
   * 设置标题
   */
  public setTitle(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => {
          return route.data;
        })
      )
      .subscribe((routeData) => {
        console.log(routeData, '标题');
        this.titleService.setTitle(routeData['title']);
      });
  }
}
