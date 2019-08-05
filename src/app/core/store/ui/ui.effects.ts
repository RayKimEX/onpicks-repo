import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as UiActions from './ui.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {UiService} from '../../service/ui/ui.service';
import {AddDeliveryInfoSuccess, DisplayAlertMessage, GetCategoryAll, GetCategoryAllSuccess, GetCategoryFailure, GetDeliveryInfoSuccess, RemoveDeliveryInfoSuccess, UpdateDeliveryDataToDefaultSuccess, UpdateDeliveryInfoSuccess} from './ui.actions';
import {OrderDataService} from '../../service/data-pages/order/order-data.service';
import {TRY_ADD_DELIVERY_INFO} from './ui.actions';
import {TRY_UPDATE_DELIVERY_DATA_TO_DEFAULT} from './ui.actions';


@Injectable()
export class UiEffects {

  constructor(
    private actions$: Actions,
    private uiService: UiService,
    private orderDataService: OrderDataService
  ) {}


  @Effect()
  tryGetDeliveryInfo = this.actions$.pipe(
    ofType( UiActions.TRY_GET_DELIVERY_INFO ),
    map( data => data['payload']),
    switchMap( ( payload: { userId } ) => {
      console.log(payload);
      return this.orderDataService.getDeliveryData(payload.userId)
        .pipe(
          map( (deliveryDataList: any) => {
            return new GetDeliveryInfoSuccess(deliveryDataList['results']);
          }),
          catchError( (error) => {
            return of(new DisplayAlertMessage( error ));
          })
        );
    })
  );

  @Effect()
  tryUpdateDeliveryDataToDefault = this.actions$.pipe(
    ofType( UiActions.TRY_UPDATE_DELIVERY_DATA_TO_DEFAULT ),
    map( data => data['payload']),
    switchMap( (payload: { userId, deliveryId, defaultIndex }) => {
      return this.orderDataService.updateDeliveryDataToDefault(payload.userId, payload.deliveryId)
        .pipe(
          map( (response) => {
            return new UpdateDeliveryDataToDefaultSuccess({ defaultIndex: payload.defaultIndex });
          }),
          catchError( (error) => {
            return of(new DisplayAlertMessage( error ));
          })
        );
    })
  );

  @Effect()
  tryUpdateDeliveryInfo = this.actions$.pipe(
    ofType( UiActions.TRY_UPDATE_DELIVERY_INFO ),
    map( data => data['payload']),
    switchMap( (payload: { userId, deliveryId, data, dataIndex }) => {
      return this.orderDataService.updateDeliveryData(payload.userId, payload.deliveryId, payload.data)
        .pipe(
          map( (deliveryDataList: {
            full_name: string,
            zip_code: string,
            street_address_1: string,
            street_address_2: string,
            city: string,
            state: string,
            phone_number: string
          }) => {
            return new UpdateDeliveryInfoSuccess({ data : deliveryDataList, dataIndex : payload.dataIndex });
          }),
          catchError( (error) => {
            return of(new DisplayAlertMessage( error ));
          })
        );
    })
  );


  @Effect()
  tryAddDeliveryInfo = this.actions$.pipe(
    ofType( UiActions.TRY_ADD_DELIVERY_INFO ),
    map( data => data['payload']),
    switchMap( (payload: {
      deliveryData: {
        full_name: string,
        zip_code: string,
        street_address_1: string,
        street_address_2: string,
        city: string,
        state: string,
        phone_number: string
      },
      userId: string
    }) => {
      return this.orderDataService.addDeliveryData( payload.userId, payload.deliveryData)
        .pipe(
          map( (response) => {
            return new AddDeliveryInfoSuccess(response);
          }),
          catchError( (error) => {
            return of(new DisplayAlertMessage( error ));
          })
        );
    })
  );

  @Effect()
  tryRemoveDeliveryInfo = this.actions$.pipe(
    ofType( UiActions.TRY_REMOVE_DELIVERY_INFO ),
    map( data => data['payload']),
    switchMap( (payload: {
      userId,
      deliveryId,
      dataIndex
    }) => {
      return this.orderDataService.deleteDeliveryData( payload.deliveryId)
        .pipe(
          map( (response) => {
            return new RemoveDeliveryInfoSuccess({ dataIndex : payload.dataIndex });
          }),
          catchError( (error) => {
            return of(new DisplayAlertMessage( error ));
          })
        );
    })
  );

  @Effect()
  getCategory = this.actions$.pipe(
    ofType( UiActions.GET_CATEGORY_ALL ),
    map( payload => payload['payload']),
    switchMap( payload => {
      return this.uiService.getCategoryAll(payload['firstSortKey'])
        .pipe(
          map( (categoryInfo) => {

            return new GetCategoryAllSuccess( {
              type : payload['type'],
              data : categoryInfo.children,
              categoryTitle : categoryInfo.name,
              secondSortKey : payload['secondSortKey'],
              thirdSortKey : payload['thirdSortKey'],
              fourthSortKey : payload['fourthSortKey'],
            });
          }),
          catchError( (error) => {
            return of(new GetCategoryFailure({ error : error }));
          })
        );
    })
  );
}
