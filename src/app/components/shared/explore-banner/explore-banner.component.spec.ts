import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreBannerComponent } from './explore-banner.component';

describe('ExploreBannerComponent', () => {
  let component: ExploreBannerComponent;
  let fixture: ComponentFixture<ExploreBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
