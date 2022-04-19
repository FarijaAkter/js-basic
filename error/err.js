let a= "farija";
a = undefined;
if (a!=undefined) {
    throw new Error('This is not undefined');
}else{
    console.log('This is undefined');
}
try{
    console.log('we are in try statement');
    functionFarija();
}catch(error){
    console.log('Are you okay?');
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}finally{
    console.log('We will run after getting error');
}