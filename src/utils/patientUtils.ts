export const getPatientName = (name: string) => {
    const arr = name.split('^');

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
        suffix
    }
}

export const getPatientDisplayName = (name: string) => {
    const n = getPatientName(name)
    let res = n.lastName + ", " + n.firstName;

    if (n.title) res = n.title + " " + res
    if (n.middleName) res += " " + n.middleName
    if (n.suffix) res += " " + n.suffix

    return res;
}