export class user {
  constructor(){
    this.name= '';
    this.date = null;
    this.region = null;
    this.contact= [new contact(1,null,null)];
    this.education= ''
    this.educationExperience = [new education(1, null, null)];
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
  constructor(index){
    this.index = index;
    this.school = "";
    this.startDate = new Date();
    this.endDate = new Date();
    this.major = "";
    this.courses = "";
  }
}
