// export class TodoItem{
//     constructor(public description:string,public action:string){
//         this.description=description;
//         this.action=action;
//     }
// } //biz sürekli class oluştırmak zorunda mıyız??

export interface TodoItem{
    description: string;
    action: boolean;
    }
