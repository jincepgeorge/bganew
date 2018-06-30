import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BoardComponent } from './components/board/board.component';
import { FoundersComponent } from './components/founders/founders.component';
import { NewsComponent } from './components/news/news.component';
import { MainComponent } from './components/main/main.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MinistriesComponent } from './components/ministries/ministries.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  
    {
      path: 'dashboard',
      component: DashboardComponent,
      children:[
        {
          path:'',
          component: MainComponent,
        },
        {
            path:'main',
            component: MainComponent,
          },
        {
          path:'founders',
          component: FoundersComponent,
        },
        {
          path:'board',
          component: BoardComponent,
        },
        {
          path:'news',
          component: NewsComponent,
        },{
          path:'gallery',
          component: GalleryComponent,
        }
        ,{
            path:'ministries',
            component: MinistriesComponent,
          }
          ,{
            path:'contact',
            component: ContactComponent,
          }
      ]
    },
    {
    path: '',
      component: DashboardComponent,
      children:[
        {
          path:'',
          component: MainComponent,
        },
    ]
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }