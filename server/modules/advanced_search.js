


/**
 * 
 * @param {Array} data 
 * @param {String} param 
 * @returns {Promise<Array>}
 */

function advanced_search(data, param) {
  return new Promise((resolve, reject) => {
    try {
      
      resolve(['a', 'b']);

    } catch (error) { reject(error) }
  });
}

module.exports = advanced_search;