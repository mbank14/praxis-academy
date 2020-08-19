function dump_props(obj, obj_name) {
    let result = '';
    for (let i in obj) {
      result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
      console.log(result)
    }
    result += '<hr>';
    return result;
  }
dump_props('lpl',' adidas ');