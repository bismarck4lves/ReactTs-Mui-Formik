export const firstLetter = (value) => {
  if (!value) return "";
  return value.charAt(0).toUpperCase();
};

export const firstLetterCapital = (str) => {
  if (!str) return "";
  const name = str.toLowerCase();
  return name[0].toUpperCase() + name.substr(1);
};

export const initials = (name: string, capital = true) => {
  name
    ? name
        .split(" ")
        .map((item) => {
          const initial = firstLetter(item);
          return capital ? initial.toUpperCase() : initial;
        })
        .join("")
    : "";
};

export const firstAndLastName = (fullName: string, target: string = " ") => {
  if (!fullName) return "";
  const splitedName = fullName.split(target);
  const firstName = [...splitedName].shift();
  const lastName = [...splitedName].pop();
  return [firstName, lastName].join(" ");
};

export const firstLetterCapitalFullName = (
  fullName: string,
  target: string = " "
) => {
  if (!fullName) return "";
  const splitedName = fullName.split(target);
  return splitedName.map((item) => firstLetterCapital(item)).join(" ");
};

export function simpleRequiredText(text) {
  return `O Campo ${text} é obrigatório`;
}

export function splitDDDPhone(phone, openSimbol = "(", endSimbol = ")") {
  const indexStart = phone.indexOf(openSimbol);
  const indexEnd = phone.indexOf(endSimbol);
  const ddd = phone.substring(indexStart + 1, indexEnd);
  const number = phone
    .replace([openSimbol, ddd, endSimbol].join(""), "")
    .trim();
  return {
    ddd,
    number,
  };
}

export function simpleDatePt2En(date: string) {
  const targetIn = "/";
  const targetOut = "-";
  if (!date) return "";
  const val = date.split(targetIn);
  const dateEnglish = [val[2], val[1], val[0]].join(targetOut);
  return dateEnglish;
}
