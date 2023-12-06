const removeFromArray = function(Arr,...args) {
    let mainArr = Arr;
    let parameters = args;
    parameters.forEach(element => {
        const index = mainArr.indexOf(element);
        if(index<0){
        }else{
            mainArr.splice(index,1);
        }
    });
    
    return mainArr;
};
// Do not edit below this line
module.exports = removeFromArray;
