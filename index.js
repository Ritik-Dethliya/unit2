//Question 11
let temperatures=[28,26,25,22,26,20,23];
temperatures[6]+=2;
console.log(temperatures);

//Question 12
let toDO=["watch movie","Play tennis","go to travel","Water the plant","sleep"];
toDO.unshift("Eating");
toDO.pop()
console.log(toDO);

//Question 13
let tasks=["completeAssigement","completeEveluation","MakingVidio","LearnReact","DjangoConcpet"];
//tasks.shift();
tasks.shift()
console.log(tasks.length)
for(let i=tasks.length+1;i>2;i--){
 tasks[i]=tasks[i-3];
 tasks[i-3]=undefined;
  
}
console.log(tasks.length)
tasks[1]="Meditation";
tasks[0]="Diet";
tasks.push("Nothing");
console.log(tasks);

//Question 14 
let Score=[50,34,95,76,90,46,67,78,89,67];
let count=0;
for(let i=0;i<=10;i++){
  if(Score[i]>90){Score[i]=90};
  if(Score[i]<40){Score[i]+=20};
}
for(let i=0;i<=10;i++){
  if(Score[i]>50){count+=1};
}
console.log(Score);
console.log("nmber of student score above 50:",count);

//Question 15 

