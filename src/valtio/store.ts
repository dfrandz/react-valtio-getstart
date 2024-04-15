import { proxy } from "valtio";
import counterStore from "./counter/counterStore";

const store = proxy({
    valtioCount: counterStore
});

export default store