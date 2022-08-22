// create a variable to hold all the results
      let finalOutput = [];


      // first sort the array into two parts, ones with object data and ones without
      const sort_1 = data.filter(item => typeof(item) === "object");

      const sort_2 = data.filter(item => typeof(item) !== "object");


      // sort the array without object data first to find the searched item
      const sort_2_result = sort_2.filter(item => item.includes(param));


      // add it to the result
      finalOutput.push(...sort_2_result);


      // sort the array with object data for the searched item
      const sort_1_result = sort_1.filter(item => {
        let isIncluded = false;

        Object.keys(item).map(key => {
          const selected = item[key].toString();
          if (selected.includes(param)) isIncluded = true;
        });

        if (isIncluded) return item;
      });


      // add the result to the final output
      finalOutput.push(...sort_1_result);

      return resolve(finalOutput);