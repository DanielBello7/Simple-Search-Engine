


const data = require('../temp/data.json');

function query_check(query){
  let results = [];

  data.forEach(item => {
    const data_name = item.name.toString().toLocaleLowerCase().trim();

    const query_name = query.toString().toLocaleLowerCase().trim();

    const input_count = query_name.length;

    let results_box = "";

    for(i = 0; i < input_count; i++) results_box += data_name[i];

    if(results_box === query_name) results.push(item);
  });
  
  return results;
}

module.exports = query_check;