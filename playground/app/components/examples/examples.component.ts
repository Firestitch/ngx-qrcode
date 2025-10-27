import { Component } from '@angular/core';
import { environment } from '@env';
import { FsExampleModule } from '@firestitch/example';
import { QrcodeComponent } from '../qrcode/qrcode.component';


@Component({
    templateUrl: './examples.component.html',
    standalone: true,
    imports: [FsExampleModule, QrcodeComponent]
})
export class ExamplesComponent {
  public config = environment;
}
