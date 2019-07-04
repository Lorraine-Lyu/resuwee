export class user {
  constructor(){
    this.name= '';
    this.date = null;
    this.region = null;
    this.contact= [new contact(1, 'other', 'none')];
    this.education= ''
    this.educationExperience = [new education('school name', 'year', 'field of study')];
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
