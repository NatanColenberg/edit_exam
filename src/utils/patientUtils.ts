import moment from 'moment'

export const getName = (name: string) => {
  const arr = name.split("^");

  const lastName = arr[0];
  const firstName = arr[1];
  const middleName = arr[2];
  const title = arr[3];
  const suffix = arr[4];

  return {
    lastName,
    firstName,
    middleName,
    title,
    suffix,
  };
};

export const getDisplayName = (name: string) => {
  const n = getName(name);
  let res = n.lastName + ", " + n.firstName;

  if (n.title) res = n.title + " " + res;
  if (n.middleName) res += " " + n.middleName;
  if (n.suffix) res += " " + n.suffix;

  return res;
};

export const getAddress = (address: string) => {
  const arr = address.split("^"); //"123 Fake Street^^Springfield^CA^12345"

  const street = arr[0];
  const city = arr[2];
  const state = arr[3];
  const zip = arr[4];

  return {
    street,
    city,
    state,
    zip,
  };
};

export const getDate = (dob: number | null) => {
  return moment(dob);
}

export const getPatientSexIndex = (patientSex: string) => {
  switch (patientSex.toLowerCase()) {
    case "male":
    case "m":
      return 0;
    case "female":
    case "f":
      return 1;
    case "other":
    case "o":
      return 2;
    case "unknown":
    case "u":
      return 3;
  }
}