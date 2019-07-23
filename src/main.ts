import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import cssVars from 'css-vars-ponyfill';

cssVars({
  shadowDOM: true,
  watch: true
});

import './app/my-wc-component';
import './app/dropdown';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
