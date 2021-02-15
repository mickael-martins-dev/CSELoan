import { Record } from "@deepstream/client/dist/src/record/record";
import { Item, ILoan, TItemType } from '../../../common/ItemRepository';
import { DeepstreamClient } from '@deepstream/client';

export interface ItemExt {
    item : Item;
    record?: Record;
}

export class ItemStore {
    private items: ItemExt[] = new Array();

    constructor(deepstreamClient: DeepstreamClient) {
    
        deepstreamClient.login( () => { 
            deepstreamClient.record.getList( 'items' ).whenReady(itemList => {
                itemList.getEntries().forEach(entry => {
                    const recordName = `item/${entry}` 
                    deepstreamClient.record.getRecord(recordName).whenReady(record => {
                        let item = record.get() as Item;

                        let itemExt: ItemExt = {
                            item: item,
                            record: record
                        };
                        
                        this.items.push(itemExt); 
                        record.subscribe( (_record) => {
                            console.log("Need to update the new element in view");                        
                        });

                        console.log(item);
                    
                    });
                });
            });
        });
        
        let itemExt: ItemExt = {
            item : this.generateDummyData(),
        }

        this.items.push(itemExt);
    }

    public getItems(): ItemExt[] {
        return this.items;
    }

    public generateDummyData(): Item {

        let loans: ILoan[] = [

        ];


        let fruit = <const> 'GAMES';

        return {
            index: 0,
            name : "Switch  1",
            description : "Console de jeux Nintendo Switch",
            category : "Console",
            type: fruit,
            loans: loans
        }

    }

}