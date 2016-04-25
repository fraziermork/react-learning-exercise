//chromeDebug requires the browser extension https://github.com/goatslacker/alt-devtool

import Alt from 'alt';
//import chromeDebug from 'alt-utils/lib/chromeDebug'

const alt = new Alt();
//chromeDebug(alt);


//we are treating alt as a singleton--webpack will cache it, so this is the only version that will exist
export default alt;
