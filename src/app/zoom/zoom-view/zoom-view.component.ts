import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ZoomMtg } from '@zoomus/websdk';
ZoomMtg.setZoomJSLib('https://source.zoom.us/2.15.2/lib', '/av');

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.reload('en-US');
@Component({
  selector: 'app-zoom-view',
  templateUrl: './zoom-view.component.html',
  styleUrls: ['./zoom-view.component.scss']
})
export class ZoomViewComponent {

  // Define the configuration variables
  signatureEndpoint = 'https://github.com/zoom/websdk-sample-signature-node.js'; // Your Meeting SDK auth endpoint
  sdkKey = 'api_key'; // Your Zoom Meeting SDK Key
  sdkSecreteKey = 'api_secrete_key'; // Your Zoom Meeting Secrete Key
  meetingNumber = 84467630125; // The Zoom Meeting or Webinar number
  passWord = ''; // The meeting password (optional)
  role = '1'; // The user role (0 for participant, 1 for host)
  userName = 'Angular'; // The user name
  userEmail = ''; // The user email (required for webinar)
  registrantToken = ''; // The registrant token (required if registration is enabled)
  zakToken = ''; // The ZAK token (required to start meetings or webinars on behalf of other users)
  leaveUrl = 'http://localhost:3000'; // The URL to redirect the user after leaving the meeting or webinar

  constructor(private httpClient: HttpClient, @Inject(DOCUMENT) document) {
  }
  ngOnInit(){
  }
  getSignature() {
    // this method will generate signature using user email and meeting number
    let signature = ZoomMtg.generateSDKSignature({
      meetingNumber: this.meetingNumber.toString(),
      sdkKey: this.sdkKey,
      sdkSecret: this.sdkSecreteKey,
      role: this.role
    });
    this.startMeeting(signature)
    // return of(signature);
    /**this method will generate signature with api */
    // this.httpClient.post(this.signatureEndpoint, {
    //   meetingNumber: this.meetingNumber,
    //   role: this.role
    // }).toPromise().then((data: any) => {
    //   if (data.signature) {
    //     console.log(data.signature)
    //     this.startMeeting(data.signature)
    //   } else {
    //     console.log(data)
    //   }
    // }).catch((error) => {
    //   console.log(error)
    // })
  }

  startMeeting(signature) {
    document.getElementById('zmmtg-root').style.display = 'block';
    ZoomMtg.init({
      leaveUrl: this.leaveUrl,
      success: (success) => {
        console.log(success)
        ZoomMtg.join({
          signature: signature,
          sdkKey: this.sdkKey,
          meetingNumber: this.meetingNumber,
          passWord: this.passWord,
          userName: this.userName,
          userEmail: this.userEmail,
          tk: this.registrantToken,
          zak: this.zakToken,
          success: (success) => {
            console.log(success)
          },
          error: (error) => {
            console.log(error)
          }
        })


      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
