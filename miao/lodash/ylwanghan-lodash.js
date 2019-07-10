var ylwanghan = {
  compact: function (array) {
    if(!array || !Array.isArray (array) || array.length <= 0){
      return [];
    }
    return array.filter(function (value) {
      if(value) return value;
    })
  }
}