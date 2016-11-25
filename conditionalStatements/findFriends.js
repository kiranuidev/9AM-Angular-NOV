(
    function () {
        var users = [{
                name: "Kiran",
                age: 30,
                gender: "M"
            },
            {
                name: "John",
                age: 25,
                gender: "M"
            },
            {
                name: "kate",
                age: 23,
                gender: "F"
            },
            {
                name: "AngelinaJolie",
                age: 32,
                gender: "F"
            }];
        var controls={};
        controls.age=document.getElementById("txtAge");
        controls.profiles = document.getElementById("profiles");
        controls.gender=document.getElementById("txtGender");       controls.searchButton=document.getElementById("btnSubmit");
        controls.searchButton.addEventListener("click",search);
        
        function search(){
            var age = controls.age.value;
            var gender = controls.gender.value;
            console.log(age);
            console.log(gender);

            for(var i=0;i<users.length;i++){
                if(users[i].gender == gender && users[i].age >= age){
                    console.log(users[i]);
                    var match = document.createElement("p");
                    match.textContent = users[i].name +" age: "+users[i].age;
                    controls.profiles.appendChild(match);
                    
                }
                
            }
        }
    }
)();
