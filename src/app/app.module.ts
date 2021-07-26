import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './module/core/core.module';
import { AppStoreModule } from './store/store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppStoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
