export class RosterListing {
  firstName: string;
  lastName: string;
  imgUrl: string;
  email: string;
  position: string;
  projects?: any[];
}

export const clubRoster: RosterListing[] = [
  {
    firstName: "Akshay",
    lastName: "Patel",
    imgUrl: "./assets/img/roster/akshay-md.jpg",
    email: "ap95@ieee.org",
    position: "President"
  },
  {
    firstName: "Mohammad",
    lastName: "Khan",
    imgUrl: "./assets/img/roster/mohammad-md.jpg",
    email: "mo@cash.money",
    position: "Vice President"
  },
  {
    firstName: "Gonzalo",
    lastName: "Pantoja",
    imgUrl: "./assets/img/roster/gonzalo-md.jpg",
    email: "gonzo@ieee.org",
    position: "Community Organizer"
  },
  {
    firstName: "Kevin",
    lastName: "Kang",
    imgUrl: "./assets/img/roster/kevin-md.jpg",
    email: "kevin@kang.net",
    position: "Full Stack Developer"
  },
  {
    firstName: "Smit",
    lastName: "Patel",
    imgUrl: "./assets/img/roster/smit-md.jpg",
    email: "smitty@ieee.org",
    position: "Ambassador"
  },
  {
    firstName: "Purvin",
    lastName: "Patel",
    imgUrl: "./assets/img/roster/purvin-md.jpg",
    email: "purvin@ieee.org",
    position: "Treasurer"
  },
  {
    firstName: "Tyler",
    lastName: "Saballus",
    imgUrl: "./assets/img/roster/ty-md.jpg",
    email: "sabs.mailer@gmail.com",
    position: "Web Engineer"
  },
  {
    firstName: "Ronald",
    lastName: "Holden",
    imgUrl: "./assets/img/roster/ronald-md.jpg",
    email: "ron@holden.com",
    position: "Member"
  },
  {
    firstName: "Salih",
    lastName: "Targoni",
    imgUrl: "./assets/img/roster/salih-md.jpg",
    email: "salih@targoni.com",
    position: "Member"
  },
  {
    firstName: "Antonio",
    lastName: "Carter",
    imgUrl: "./assets/img/roster/antonio-md.jpg",
    email: "antonio@carter.com",
    position: "Member"
  },
];
