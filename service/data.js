export const removeDatasRepetidas = datas => {
  const datasUnicas = [];
  datas.forEach(datas => {
    if(datasUnicas.indexOf(datas) === -1) {
      datasUnicas.push(datas.dataFormatada);
    }
  });

  return datasUnicas;
}