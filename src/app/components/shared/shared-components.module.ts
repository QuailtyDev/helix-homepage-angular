import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SanitizerPipe } from 'src/app/pipes/sanitize.pipe';
import { FooterComponent } from './footer/footer.component';
import { ExploreBannerComponent } from './explore-banner/explore-banner.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [SanitizerPipe, FooterComponent, HeaderComponent, NavigationComponent, ExploreBannerComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule],
  exports: [SanitizerPipe, FooterComponent, HeaderComponent, NavigationComponent, ExploreBannerComponent],
})
export class SharedComponentsModule {}
