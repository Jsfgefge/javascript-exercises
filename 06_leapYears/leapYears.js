const leapYears = function(year) {
    let isLeap = false;
    if(year%4==0){        
        if(year%100==0&&year%400!=0){
            return false
        }else{
            return isLeap=true
        }
    }else{
        return isLeap=false;
    }
};

// Do not edit below this line
module.exports = leapYears;
