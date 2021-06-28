min = (a,b)=>{
    if (a-b<0){
        return a
    }
    else if (b-a<0){
        return b
    }
    else if (b=a){
        return "a and b are equal"
    }
}