
enum Gender{
    Male,
    Female,
    DoNotDisclose
}
enum IdentityType{
    Adhaar,
    PAN,
    Passport,
    DrivingLicense
}
class Identity{
    IDType:IdentityType
    Value:String
}
class Person{
    constructor(){
        
    }
    FirstName:String
    LastName:String
    Gender:Gender
    Age:Number
    IdentityProof:Identity
}

class Manager extends Person{
    Reportees:Array<String>
}

var nishanth = new Manager();
nishanth.FirstName="Nishanth";
nishanth.LastName="M";
nishanth.Age=18;
nishanth.Gender=Gender.Male;
nishanth.IdentityProof=new Identity();
nishanth.IdentityProof.IDType=IdentityType.PAN;
nishanth.IdentityProof.Value="AND1989899";
nishanth.Reportees= ["Kiran","Kalyan"];

