import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BoardComponent } from './components/board/board.component';
import { FoundersComponent } from './components/founders/founders.component';
import { NewsComponent } from './components/news/news.component';
import { MainComponent } from './components/main/main.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MinistriesComponent } from './components/ministries/ministries.component';
import { ContactComponent } from './components/contact/contact.component';
import { SidebarContentComponent } from './components/sidebar-content/sidebar-content.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    DashboardComponent,
    BoardComponent,
    FoundersComponent,
    NewsComponent,
    MainComponent,
    GalleryComponent,
    MinistriesComponent,
    ContactComponent,
    SidebarContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
