import {
  ChangeDetectionStrategy,
  Component, ElementRef, Input, OnInit, ViewChild,
} from '@angular/core';

import { generate } from 'lean-qr';


@Component({
    selector: 'fs-qrcode',
    templateUrl: './qrcode.component.html',
    styleUrls: ['./qrcode.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class FsClipboardComponent implements OnInit {

  @ViewChild('qrCode', { static: true })
  public qrCode: ElementRef;

  @Input() public value;
  @Input() public width: number;
  @Input() public height: number;

  public ngOnInit(): void {
    const qrCode = generate(this.value);
    qrCode.toCanvas(this.qrCode.nativeElement);
  }

}
