import { Injectable } from '@angular/core';
import { ZoomMtg } from '@zoomus/websdk';
import { observable, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignatureModel, ZoomClientModel } from './modal';
@Injectable({
  providedIn: 'root'
})
export class ZoomService {

  constructor() { }
  initializeWebSDK(zoomClient: ZoomClientModel): void {
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();

    ZoomMtg.i18n.load('en-US');
    ZoomMtg.i18n.reload('en-US');

    ZoomMtg.init({
      leaveUrl: environment.leaveUrl,
      isSupportAV: true,
      success: (success: any) => {
        console.log(success)

        ZoomMtg.join({
          signature: zoomClient.signature,
          meetingNumber: zoomClient.meetingNumber,
          userName: zoomClient.userName,
          sdkKey: environment.apiKey,
          userEmail: zoomClient.userEmail,
          passWord: zoomClient.passWord,
          success: (success: any) => {
            console.log(success);
          },
          error: (error: any) => {
            console.log(error);
          }
        })
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }
  genrateSignature(signatureModel: SignatureModel): Observable<string> {
    let signature = ZoomMtg.generateSDKSignature({
      meetingNumber: signatureModel.meetingNumber,
      sdkKey: signatureModel.apiKey,
      sdkSecret: signatureModel.apiSecret,
      role: signatureModel.role
    })
    return of(signature)
  }
}
