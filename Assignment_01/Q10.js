var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
calculateGrade(students);
function calculateGrade(Obj)
{
var avgmarks=0,totalMarks=0;
for(var i=0;i<students.length;i++)
{
   totalMarks+=students[i][1];
   avgMarks=(totalMarks/students.length);
}
if (avgMarks < 60){  
          console.log("Grade : F");        
          }   
        else if (avgMarks < 70) {  
                console.log("Grade : D");   
                  }   
        else if (avgMarks < 80)   
             {  
                console.log("Grade : C");   
        } else if (avgMarks < 90) {  
                console.log("Grade : B");   
        } else if (avgMarks < 100) {  
                console.log("Grade : A");   


        }
}
