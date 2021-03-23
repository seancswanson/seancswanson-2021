import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { FooterComponent } from "./footer/footer.component";
import { BioComponent } from "./main-content/bio/bio.component";
import { ProjectsComponent } from "./main-content/projects/projects.component";
import { CurriculumVitaeComponent } from "./main-content/curriculum-vitae/curriculum-vitae.component";
import { RouterModule } from "@angular/router";

import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    BioComponent,
    ProjectsComponent,
    CurriculumVitaeComponent,
  ],
  imports: [BrowserModule, ScrollToModule.forRoot(), RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
