import makeFinalStore from 'alt-utils/lib/makeFinalStore';

//for debugging
//localStorage.setItem('debug', true);
//localStorage.clear();

export default function(alt, storage, storeName) {
  const finalStore = makeFinalStore(alt);
  
  try {
    alt.bootstrap(storage.get(storeName));
  } catch (err) {
    console.error('FAILED TO BOOTSTRAP DATA', err);
  } 
  
  finalStore.listen(() => {
    if(!storage.get('debug')) {
      storage.set(storeName, alt.takeSnapshot());
    }
  });
}
