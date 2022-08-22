


/**
 * 
 * @param {Array} data 
 * @param {String} param 
 * @returns {Promise<Array>}
 */

const advanced_search = (data, param) => new Promise((resolve, reject) => {
  
  const result = data.filter(item => {
    let isIncluded = false;

    Object.keys(item).map(key => {
      const selected = item[key].toString().trim().toLocaleLowerCase();
      if (selected.includes(param.trim().toLocaleLowerCase())) isIncluded = true;
    });

    if (isIncluded) return item;
  });

  return resolve(result);
});

module.exports = advanced_search;