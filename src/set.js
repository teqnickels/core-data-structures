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
          return this.data.push(stuff)
          }
        }
      }else{
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
    for(var i = 0; i < this.data.length; i++ ) {
      if(this.data[i] == stuff) {
        return true
      }else{
        return false
      }
    }
  }

  remove() {

  }

  forEach() {

  }

  size() {
    return this.data.length

  }
  union(otherSet) {

  }

  intersect(otherSet) {

  }

  difference(otherSet) {

  }

  isSubset(otherSet) {

  }

  clone() {

  }

}
