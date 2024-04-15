import { proxy } from "valtio";


class CounterStore{
    countA: number = 1;
    user: [] = [];

    async increment(): Promise<any>{
        this.countA +=1;
    }
}
const  counterStore= proxy(new CounterStore());
export default counterStore;