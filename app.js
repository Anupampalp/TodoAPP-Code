const todo=[];
let req=prompt("Please enter the request:");
while(true){
    if(req=="quit"){
        console.log("Quiting app!!..");
        break;
    }
    if(req=="list"){
        console.log("--------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("---------");
    }else if(req=="add"){
        let task=prompt("Please enter the task:");
        todo.push(task);
        console.log("task Added!");
    }else if(req=="delete"){
        let indx=prompt("Please enter the index:");
        todo.splice(indx,1);
        console.log("task deleted!!!..");
    }
   
    req=prompt("Please enter the request:");
}