export { INgorEntityDetailCell } from './interfaces/entity-detail-cell';
export { INgorEntityDetailColumn } from './interfaces/entity-detail-column';
export { INgorUpdateEntityLabels } from './interfaces/udate-entity-labels';
export { IUpdateEntityModalLabels } from './interfaces/udate-entity-modal-labels';

export { NgorUpdateEntityDetailComponent } from './components/update-entity-detail.component';
export { NgorUpdateEntityComponent } from './components/update-entity.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgorCoreModule } from 'ng-on-rest-core';
import { NgorFormsModule } from 'ng-on-rest-forms';
import { NgorUpdateEntityDetailComponent } from './components/update-entity-detail.component';
import { NgorUpdateEntityHeaderComponent } from './components/update-entity-header.component';
import { NgorUpdateEntityModalComponent } from './components/update-entity-modal.component';
import { NgorUpdateEntityComponent } from './components/update-entity.component';

@NgModule({
  declarations: [
    NgorUpdateEntityComponent,
    NgorUpdateEntityDetailComponent,
    NgorUpdateEntityHeaderComponent,
    NgorUpdateEntityModalComponent,
  ],
  entryComponents: [
    NgorUpdateEntityModalComponent,
  ],
  exports: [
    NgorUpdateEntityComponent,
    NgorUpdateEntityDetailComponent,
  ],
  imports: [
    CommonModule,
    NgbModalModule.forRoot(),
    TranslateModule.forChild(),
    NgorCoreModule.forChild(),
    NgorFormsModule.forChild(),
  ],
})
export class NgorDetailModule {
  public static forChild() {
    return {
      ngModule: NgorDetailModule,
    };
  }

  public static forRoot() {
    return {
      ngModule: NgorDetailModule,
    };
  }
}
