import ItemDetailModel from "../model/API/ItemDetailType";
import { ItemDetail } from "../mocks/itemDetail";
import { graphDetails } from "../mocks/graph";
import Graph from "../model/API/graph";
import Schedule from "../model/API/schedule";

export const getItemDetail = (itemName: string): Promise<ItemDetailModel> => {
    return new Promise ( (resolve, reject) => setTimeout( () => {
        const item = ItemDetail;
        item.name = itemName;
        resolve (item);
    }, 1000) );
    
}

export const getGraphDetails = (itemId: number): Promise<Graph> => {
    return  new Promise ( (resolve, reject) => setTimeout( () =>{
        const graph = graphDetails;
        graph.daily = getRandomSchedule(graph.daily);
        graph.average =  getRandomSchedule(graph.average);
        resolve(graphDetails);
    },1000 ));
} 


const getRandomIntInclusive = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomSchedule = (schedule: Schedule): Schedule => {
    schedule["6h"] = getRandomIntInclusive(0, 999999999);
    schedule["9h"] = getRandomIntInclusive(0, 999999999);
    schedule["12h"] =  getRandomIntInclusive(0, 999999999);
    schedule["15h"] = getRandomIntInclusive(0, 999999999);
    schedule["18h"] = getRandomIntInclusive(0, 999999999);
    schedule["21h"] = getRandomIntInclusive(0, 999999999);
    schedule["00h"] = getRandomIntInclusive(0, 999999999);
    return schedule;
}