import {ChangeDetectionStrategy, Component, Inject, Input, LOCALE_ID, OnDestroy, OnInit} from '@angular/core';
import {DisplayAlertMessage} from '../../../../../../../../core/store/ui/ui.actions';
import {Store} from '@ngrx/store';
import {DISPLAY_ALERT_MESSAGE_MAP} from '../../../../../../../../core/global-constant/app.locale';

@Component({
  selector: 'onpicks-p-thumbnail',
  templateUrl: './p-thumbnail.component.html',
  styleUrls: ['./p-thumbnail.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PThumbnailComponent {
  @Input('imagesLargeList') imagesLargeList;
  @Input('imagesSmallList') imagesSmallList;

  constructor(
    @Inject( LOCALE_ID ) public locale: string,
    @Inject( DISPLAY_ALERT_MESSAGE_MAP ) private alertMap,
    private store: Store<any>
  ) {

  }




  shareProductDetail() {
    const const_url = location.href;

    // Create a dummy input to copy the string array inside it
    const dummy = document.createElement('input');

    // Add it to the document
    document.body.appendChild(dummy);

    // Output the array into it
    dummy.value = const_url;

    // Select it
    dummy.select();

    // Copy its contents
    document.execCommand('copy');

    // Remove it as its not needed anymore
    document.body.removeChild(dummy);
    this.store.dispatch( new DisplayAlertMessage(this.alertMap['link-copied'][this.locale]));
  }
}
