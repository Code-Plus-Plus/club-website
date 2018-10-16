export class RosterListing {
  firstName: string;
  lastName: string;
  imgUrl: string;
  email: string;
  position: string;
  projects?: any[];
}

export const studentRoster: RosterListing[] = [
  {
    firstName: "Akshay",
    lastName: "Patel",
    imgUrl: "./assets/img/stock/placeholder-1.jpg",
    email: "ap5@ieee.org",
    position: "President"
  },
  {
    firstName: "Mohammad",
    lastName: "Khan",
    imgUrl: "./assets/img/stock/placeholder-1.jpg",
    email: "mo@cash.money",
    position: "Vice President"
  },
  {
    firstName: "Gonzalo",
    lastName: "Pantoja",
    imgUrl: "./assets/img/stock/placeholder-1.jpg",
    email: "gonzo@ieee.org",
    position: "Secretary"
  },
  {
    firstName: "Kevin",
    lastName: "Kang",
    imgUrl: "./assets/img/stock/placeholder-1.jpg",
    email: "kevin@kang.net",
    position: "Project Manager"
  },
  {
    firstName: "Smit",
    lastName: "Patel",
    imgUrl: "./assets/img/stock/placeholder-1.jpg",
    email: "smitty@ieee.org",
    position: "Ambassador"
  },
  {
    firstName: "Purvin",
    lastName: "Patel",
    imgUrl: "./assets/img/stock/placeholder-1.jpg",
    email: "smitty@ieee.org",
    position: "Treasurer"
  },
  {
    firstName: "Tyler",
    lastName: "Saballus",
    imgUrl: "./assets/img/stock/placeholder-1.jpg",
    email: "sabs.mailer@gmail.com",
    position: "Web Engineer"
  }
];
