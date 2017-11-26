import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HttpModule} from "@angular/http";
import { MainComponent } from './main/main.component';
import { PublishblogComponent } from './publishblog/publishblog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogsComponent,
    MainComponent,
    PublishblogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
