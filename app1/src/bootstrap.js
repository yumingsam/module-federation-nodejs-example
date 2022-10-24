import { mapBook } from 'app2/mapBook';

function run() {
  console.log(JSON.stringify(mapBook({ id: '1703' })));
  console.log(JSON.stringify(mapBook({ id: '1799' })));
}

run();
