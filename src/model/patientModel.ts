import { Interface } from "readline";

interface PatientModel {
  name: string;
  birthDate: {
    $date: number;
  };
  birthDateStr: string;
  patientSex: string;
  mrns: MRN[];
  patientRace: string;
  primaryCarePhysicianName: string;
  patientAddress: string;
  homePhone: string;
  workPhone: string;
  admitDateTime: {
    $date: number;
  };
  dischargeDateTime: {
    $date: number;
  };
}

type MRN = {
  mrn: string;
  mrnUpperStripped: string;
  organizationId: string;
  dataSourceSystemId: string;
};
export default PatientModel;
