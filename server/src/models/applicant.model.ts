import mongoose, { Schema } from "mongoose";
// Variable declaration
export interface IApplicant {
  personal: {
    firstName: String;
    lastName: String;
    email: String;
    headline: String;
    phone: String;
    address: String;
  };
  education: {
    school: String;
    foStudy: String;
    degree: String;
    sDate: String;
    eDate: String;
  };
  experience: {
    title: String;
    company: String;
    industry: String;
    summary: String;
    sDate: String;
    eDate: String;
    workHere: Boolean;
  };
  profile: {
    resumeLink: String;
  };
  coverLetter: String;
  dob: Date;
  teamLead: String;
  status: String;
  salary: String;
  timeLine: [{
    nameStep: string;
    created_at: Date;
  }];
  isReject: Boolean;
}
// Schema is database combination of rules
const applicantSchema: Schema = new mongoose.Schema({
  personal: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    headline: { type: String },
    phone: { type: String, required: true },
    address: { type: String },
  },
  education: {
    school: { type: String },
    foStudy: { type: String },
    degree: { type: String },
    sDate: { type: String },
    eDate: { type: String },
  },
  experience: {
    title: { type: String },
    company: { type: String },
    industry: { type: String },
    summary: { type: String },
    sDate: { type: String },
    eDate: { type: String },
    workHere: { type: Boolean },
  },
  profile: {
    resumeLink: { type: String, required: true },
  },
  coverLetter: { type: String },
  dob: { type: Date, default: Date.now() },
  teamLead: { type: String },
  status: { type: String },
  salary: { type: String },
  timeLine: [{
    nameStep: { type: String },
    created_at: { type: Date },
  }],
  isReject: { type: Boolean , default: false },
});

const Applicant = mongoose.model<IApplicant>("Applicant", applicantSchema);

export default Applicant;
