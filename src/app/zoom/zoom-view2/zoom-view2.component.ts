import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ZoomService } from '../shared/zoom.service';
import { SignatureModel, StartMeetingModel, ZoomClientModel } from '../shared/modal';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-zoom-view2',
  templateUrl: './zoom-view2.component.html',
  styleUrls: ['./zoom-view2.component.scss']
})
export class ZoomView2Component {
  startMeetingForm: FormGroup;
  subcription: Subscription;
  constructor(
    private zoomService: ZoomService,
    private fb: FormBuilder) {
    this.subcription = new Subscription();
  }

  ngOnInit(): void {
    this.initForm();

  }
  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

  onSubmit() {

    if (this.startMeetingForm.valid) {
      let formValues: StartMeetingModel = this.startMeetingForm.value;
      let signaturePaylod: SignatureModel = {
        meetingNumber: formValues.meetingNumber,
        apiKey: environment.apiKey,
        apiSecret: environment.apiSecreteKey,
        role: '0'
      };
      this.subcription.add(this.zoomService.genrateSignature(signaturePaylod).subscribe((signature: string) => {
        this.handleGenrateSignature(signature, formValues);
      })
      )
    }
  }
  private handleGenrateSignature(signature: string, formValues: StartMeetingModel) {
    let meetingPayloads: ZoomClientModel = {
      meetingNumber: formValues.meetingNumber.replace(/\s/g, ""),
      passWord: formValues.passWord,
      signature: signature,
      userEmail: formValues.userEmail,
      userName: formValues.userName
    };
    document.getElementById('zmmtg-root')!.style.display = 'block'
    this.zoomService.initializeWebSDK(meetingPayloads);
  }
  private initForm() {
    this.startMeetingForm = this.fb.group({
      meetingNumber: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      passWord: ['', [Validators.required]],
      userEmail: ['', [Validators.required]]
    });
  }
}
