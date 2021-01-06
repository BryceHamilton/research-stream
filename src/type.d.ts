type Study = {
  _id: string;
  title: string;
  researcher: string;
  purpose: string;
  lab: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  compensation: string;
  whoIsConducting: string;
  benefits: string;
  inclusion: [string];
  exclusion: [string];
  expectations: string;
  timeSlots: TimeSlot[];
  datePosted: Date;
};

type User = {
  googleId: string;
  imageUrl: string;
  email: string;
  name: string;
  givenName: string;
  familyName: string;
};

type GoogleResponse = GoogleLoginResponse | GoogleLoginResponseOffline;
