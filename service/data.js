export const removeDatasRepetidas = datas => {
  const datasUnicas = [];
  datas.forEach(datas => {
    if(datasUnicas.indexOf(datas) === -1) {
      datasUnicas.push(datas.dataFormatada);
    }
  });

  return datasUnicas;
}

export const ordenaDatas = data => {
  data.sort ((a, b) => {
    const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD');
    const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD');
    return primeiraData - segundaData;
  })
}