export class user {
  constructor(name, age){
    this.username= name;
    this.birth_date = age;
    this.contact= [new contact(1, 'other', 'none')];
    this.education=[new education('school name', 'year', 'field of study')];
  }
}


export class contact {
  constructor(index, name ,link){
    this.index= index;
    this.name = name;
    this.link = link;
  }
}

export class education {
  constructor(school, year, field){
    this.school = school;
    this.year = year;
    this.field = field;
  }
}
