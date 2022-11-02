import { mapBook, version } from 'app2/mapBook';
import { revalidate } from '@module-federation/node/utils';

async function run() {
  const shouldReload1 = await revalidate();
  console.log('shouldReload1', shouldReload1);
  console.log('app2/mapBook/version', version);
  const book = mapBook({ id: '1337' });
  console.log('book.positionStr', book.positionStr);
  await sleep(30_000);
  // revalidate not working, cache is only controlled by hash of "remoteEntry.js"
  // The hash doesn't change when internal/external modules of app2 are changed.
  // https://github.com/module-federation/nextjs-mf/issues/351
  const shouldReload2 = await revalidate();
  console.log('shouldReload2', shouldReload2);
  console.log('app2/mapBook/version', version);
}

function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

run();
