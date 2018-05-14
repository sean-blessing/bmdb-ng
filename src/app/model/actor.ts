export class Actor {
  Id: number;
  FirstName: string;
  LastName: string;
  Gender: string;
  BirthDate: Date;

  about(): string {
      return "firstName = "+this.FirstName+", lastName="+this.LastName;
  }

  constructor(inId: number = 0, fName: string = '', lName: string = '', g: string = '', bd: Date = null) {
    this.Id = inId;
    this.FirstName = fName;
    this.LastName = lName;
    this.Gender = g;
    this.BirthDate = bd;
  }
}
