import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailsComponent } from './components/details/details.component';
import { StrengthsComponent } from './components/strengths/strengths.component';
import { MissionComponent } from './components/mission/mission.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { InvitationComponent } from './components/invitation/invitation.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    DetailsComponent,
    StrengthsComponent,
    MissionComponent,
    ProjectsComponent,
    AboutComponent,
    InvitationComponent,
    ContactComponent,
    FooterComponent,
    CopyrightComponent,
    LightboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
