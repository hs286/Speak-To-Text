import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ImageHandlerComponent } from './components/image-handler/image-handler.component';
import { PlaybackHandlerComponent } from './components/playback-handler/playback-handler.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { ProgressButtonComponent } from './components/progress-button/progress-button.component';
import { RecordButtonComponent } from './components/record-button/record-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ImageHandlerComponent,
    PlaybackHandlerComponent,
    BottomBarComponent,
    ProgressButtonComponent,
    RecordButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
