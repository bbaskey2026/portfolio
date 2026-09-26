const URL = "https://jsonplaceholder.typicode.com/posts/1";

const data=fetch(URL);
data.then(async  function(result){
    const boody= await result.json();
    console.log("Result:", boody.body);
    
})
.catch(function(error){
    console.log("Error:",error);
});
