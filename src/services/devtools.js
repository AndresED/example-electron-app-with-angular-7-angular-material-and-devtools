import { enableLiveReload } from 'electron-compile';
import electronDebug from 'electron-debug';

function devTools() {
    enableLiveReload();
    electronDebug({ showDevTools: true });
}
module.exports = {
    devTools,
}