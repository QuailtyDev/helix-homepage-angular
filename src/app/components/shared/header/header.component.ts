import { Component, Input } from '@angular/core';

@Component({
  selector: 'mot-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() image;
  @Input() heading;
  @Input() backgroundOverlayColor;
}
