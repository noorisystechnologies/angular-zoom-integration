// zoom.model.ts

export interface SignatureModel {
   apiKey: string;
   apiSecret: string;
   meetingNumber: any;
   role: string;
   // nonce: string;
   // timestamp: number;
}

export interface ZoomClientModel {
   // apiKey: string;
   meetingNumber: string;
   userName: string;
   userEmail: string;
   passWord: string;
   // leaveUrl: string;
   // role: number;
   signature: string,
}
export interface StartMeetingModel {
   apiKey: string;
   userEmail: string;
   userName: string;
   passWord: string;
   displayName: string;
   meetingNumber: string;
}