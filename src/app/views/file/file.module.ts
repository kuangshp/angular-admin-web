import { NgModule } from '@angular/core';

import { FileRoutingModule } from './file-routing.module';
import { SharedModule } from 'src/app/module/shared/shared.module';
import { FileComponent } from './file/file.component';

@NgModule({
  declarations: [FileComponent],
  imports: [SharedModule, FileRoutingModule],
})
export class FileModule {}
