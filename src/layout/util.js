export class user {
  constructor(){
    this.name= '';
    this.date = null;
    this.region = null;
    this.contact= [new contact(1,null,null)];
    this.education= ''
    this.educationExperience = [new education(null, null, null)];
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
