import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FsClipboardComponent } from '../../../../src/app/components/qrcode/qrcode.component';


@Component({
    selector: 'app-qrcode',
    templateUrl: './qrcode.component.html',
    styleUrls: ['./qrcode.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FsClipboardComponent],
})
export class QrcodeComponent {

}
