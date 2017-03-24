export default class Set {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  add( stuff ) {
      if( this.data.length > 0 ){
        for( var i = 0; i < this.data.length; i++ ){
          if( this.data[i] == stuff ){
            return "ERROR, " + stuff + " already exists"
          }else{
            this.length+=1
          return this.data.push(stuff)
          }
        }
      }else{
        this.length+=1
        return this.data.push(stuff)
      }
  }

  isEmpty() {
    if(this.data.length > 0) {
    return false
    }else{
    return true
    }
  }

  contains(stuff) {
    var instanceOfMatch = 0
    for(var i = 0; i < this.data.length; i++ ) {
      if(this.data[i] === stuff) {
        instanceOfMatch++
      }
    } console.log('INSTANCE',instanceOfMatch);
     if(instanceOfMatch > 0){
       return true
     }else{
       return false
     }
   }


  remove() {
    if(this.data.length > 0 ) {
      this.data.pop()
    }
  }

  forEach(func) {
     return this.stuff.map(thing => func(thing))

  }

  size() {
    return this.data.length

  }
  union(setB) {
    return setB.concat(this.data)
  }

  intersect(otherSet) {
    var temp = new Set()
    for(var i = 0; i < this.data.length; i++) {
      for(var j = 0; j < otherSet.length; j++){
        if(this.data[i]=== otherSet.data[j]){
           temp.add(otherSet.data[j])
        }
      }
    }
    return temp
  }

  difference(set) {
    var tempSet = new Set();
    for(var i = 0; i < this.data.length; ++i) {
      if(!set.contains(this.data[i])) {
        tempSet.add(this.data[i]);
      }
    }
    for(var i = 0; i < set.data.length; ++i) {
      if(!this.contains(set.data[i])) {
        tempSet.add(set.data[i]);
      }
    }
  return tempSet.data;
}




  isSubset(otherSet) {

  }

  clone() {

  }

}
