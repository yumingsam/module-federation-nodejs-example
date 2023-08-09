import { mapBook, version } from 'app2/mapBook';

async function run() {
  console.log('app2/mapBook/version', version);
  const book = mapBook({ id: '1337' });
  console.log('book.positionStr', book.positionStr);
}

run();
