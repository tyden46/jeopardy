<script>
const fs=require('fs')
response = await axios.get('./full.txt');
newList=[];
for (i=0; i< response.data.length, i++){
	if (!checktest(response.data[i])){
	   newList.push(response.data); 
	}
	console.log()
}
fs.writeFile('cleanedQuestions.txt', newList, (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
}) 

function checktest(myQuestion){
    lower=myQuestion;
    if (myQuestion.includes("</") || myQuestion.includes("http") || myQuestion.includes("heard")){
        return true;
    } else{
        return false;
    }
}
</script> 
