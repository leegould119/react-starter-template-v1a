// THIS IS USED FOR IMPORTING A HISTORY WHERE PROPS ISNT SUPPLIED IE IN FUNCTIONS NOT CLASSES
import { createBrowserHistory } from "history";
export default createBrowserHistory({ basename: BASEPATH + "/" });
