var myObj =
    [{ 'name': 'Saurabh', 'age': 30, 'occupation': "Team Leader" },
    { 'name': 'Anupriya', 'age': 32, 'occupation': "Team Leader" },
    { 'name': 'Kalyani', 'age': 25, 'occupation': "Programmer" },
    { 'name': 'Damodaran', 'age': 27, 'occupation': "Programmer" },
    { 'name': 'Krishnakath', 'age': 22, 'occupation': "Programmer" },
    { 'name': 'Venketraman', 'age': 28, 'occupation': "Programmer" }];

displayProgrammerName(myObj);
sortByAgeDesending(myObj);

function displayProgrammerName(object) {
  for (var i = 0; i < object.length; i++) {

        // console.log(object[i].occupation);
        if (object[i].occupation === 'Programmer')
            console.log(object[i].name);
    }

}

function sortByAgeDesending(object) {
    var byAge = object.slice(0);
    byAge.sort(function (a, b) {
        return b.age - a.age;
    })
    console.log(byAge)
}

function displayName(object)
{
    var newObj=[];
    newObj=object.map(k=>{
        return k.name;

    })
   console.log(newObj);
    }


 let groupedPeople= groupBy(myObj)


 console.log(groupedPeople);
    function groupBy(objectArray) {
        return objectArray.reduce(function (acc, obj) {
          let key = obj['occupation']
          if (!acc[key]) {
            acc[key] = [{"name":obj['name'],"age":obj['age']}];
          }
          else {
              acc[key].push({"name":obj['name'],"age":obj['age']})
          }
          return acc
        }, {})
      }

    







