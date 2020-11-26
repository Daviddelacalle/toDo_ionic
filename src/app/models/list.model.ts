import { ListItem } from './list-item-model';

export class List{

    id: number;
    title: string;
    createdOn: Date;
    finishedOn: Date;
    finished: boolean;
    items: ListItem[];

    constructor(title: string){

        this.id = new Date().getTime();
        this.title = title;
        this.createdOn = new Date();
        this.finished = false;
        this.items = [];

    }
}