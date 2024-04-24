import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

import QRCode from 'qrcode';


@Component({
  selector: 'fs-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsClipboardComponent {

  @Input() public value;
  @Input() public width: number;
  @Input() public height: number;

  public image;

  constructor(
    private _cdRef: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    QRCode.toDataURL(this.value, { 
      errorCorrectionLevel: 'H',
      width: this.width,
      height: this.height,
    })
    .then((url) => {
      this.image = url;
      this._cdRef.markForCheck();
    });
  }

}
