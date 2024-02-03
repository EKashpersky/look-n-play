import { LNPExampleModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// if (environment.production) {
//   enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(LNPExampleModule)
  .catch(err => console.log((window as any).err = err));