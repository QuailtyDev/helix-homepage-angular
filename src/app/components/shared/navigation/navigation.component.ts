import { Component } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'mot-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  scroll$: Subscription;
  startPosition: number;
  transformValue = 0;
  navbarOffsetTop = 120;
  navbarHalfHeight = 44;
  navbarBackgroundColor: boolean = false;

  showSidebar: boolean = false;

  ngOnInit() {
    this.startPosition = window.scrollY;
    this.scroll$ = fromEvent(window, 'scroll').subscribe((e) => {
      const currentPosition = window.scrollY;
      if (
        this.startPosition < currentPosition &&
        (document.body.scrollTop > this.navbarOffsetTop || document.documentElement.scrollTop > this.navbarOffsetTop)
      ) {
        if (this.transformValue <= 0) {
          this.transformValue -= this.navbarHalfHeight;
        }
        if (this.transformValue <= -this.navbarOffsetTop) {
          this.transformValue += this.navbarHalfHeight;
        }
      } else {
        if (this.transformValue >= 0) {
          this.transformValue -= this.navbarHalfHeight;
        }
        if (this.transformValue >= -this.navbarOffsetTop) {
          this.transformValue += this.navbarHalfHeight;
        }
      }

      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        this.navbarBackgroundColor = true;
      } else {
        this.navbarBackgroundColor = false;
      }

      this.startPosition = currentPosition;
    });
  }

  ngOnDestroy() {
    this.scroll$.unsubscribe();
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
