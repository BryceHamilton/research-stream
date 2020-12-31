type Study = {
  _id: string;
  title: string;
  researcher: string;
  purpose: string;
  lab: string;
  location: string;
  compensation: string;
  whoIsConducting: string;
  benefits: string;
  inclusion: [string];
  exclusion: [string];
  expectations: string;
  timeSlots: [string];
  datePosted: Date;
};
