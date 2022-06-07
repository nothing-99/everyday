function solution(id_list, report, k) {
  let idListObj = {};
  let reportObj = {};
  let ret = null;

  for (let key of id_list) {
      idListObj[key] = 0;
      reportObj[key] = [];
  }
  
  Array.from(new Set(report)).reduce((tmp, str) => {
      let [reporter, reported] = str.split(' ');
      reportObj[reported].push(reporter);
  }, 0);
  
  for (let key of Object.keys(reportObj)) {
      if (reportObj[key].length >= k) {
          for (let reporter of reportObj[key]) {
              idListObj[reporter]++;
          }
      }
  }
  
  return Object.values(idListObj);
}
