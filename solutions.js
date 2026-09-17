(() => {
  const files = [
    'solutions_001_060.json', 'solutions_061_120.json', 'solutions_121_180.json',
    'solutions_181_240.json', 'solutions_241_300.json', 'solutions_301_360.json',
    'solutions_361_420.json'
  ];
  window.SOLUTIONS_READY = Promise.all(files.map(file => fetch(`generated/${file}`).then(response => {
    if (!response.ok) throw new Error(`Unable to load ${file}`);
    return response.json();
  }))).then(chunks => {
    window.SOLUTIONS = Object.fromEntries(chunks.flat().map(item => [String(item.index), item]));
    return window.SOLUTIONS;
  });
})();
