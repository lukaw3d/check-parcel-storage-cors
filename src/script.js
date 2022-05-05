// @ts-check

import Parcel from '@oasislabs/parcel';
console.log(Parcel);

document.querySelector('#form').addEventListener('submit', (event) => {
  event.preventDefault()

  const token = window.token.value;
  (async () => {
    const parcel = new Parcel(token);
    console.log(parcel);
    console.log(await parcel.getCurrentIdentity());
    const doc = await parcel.uploadDocument('this is data', null).finished;
    console.log(doc);
    await doc.delete();
  })();
})
