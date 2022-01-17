import { TodoItem } from "./todoItems";

export class Model{
    name : string;
    items: TodoItem[];

    constructor(){
        this.name="bekir";
        this.items=[
            { description : "Breakfast" , action: true},
            { description : "Gym" , action: true},
            { description : "Shop" , action: false},
            { description : "work" , action: false}
        ];
    }
}