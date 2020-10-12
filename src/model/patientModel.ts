import { Interface } from "readline";

interface PatientModel {
    name: string;
    birthDateStr: string;
    patientSex: string;
    mrns: MRN[];
    patientRace: string;
}

type MRN = {
    mrn: string,
    mrnUpperStripped: string,
    organizationId: string,
    dataSourceSystemId: string,
}
export default PatientModel;