import { INgxLoadingConfig, ngxLoadingAnimationTypes, NgxLoadingAnimationTypes } from './../ngx-loading/ngx-loading-config';

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxLoadingComponent } from '../ngx-loading/ngx-loading.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgxLoadingComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('loaderExample');
  loading = false;
  config: INgxLoadingConfig = {
    animationType: ngxLoadingAnimationTypes.CubeGrid,
    backdropBackgroundColour: 'rgba(0,0,0,0.4)',
    fullScreenBackdrop: true,
    primaryColour: '#00BCD4',
    secondaryColour: '#E91E63',
    tertiaryColour: '#FFEB3B',
  };

  toggleLoading() {
    this.loading = !this.loading;

    if (this.loading) {
      setTimeout(() => (this.loading = false), 3000); // auto hide after 3s
    }
  }
}
