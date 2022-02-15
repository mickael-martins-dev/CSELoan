import { Injectable } from '@angular/core';
import { DeepstreamClient } from '@deepstream/client';
import { Record } from '@deepstream/client/dist/src/record/record';
import { Item, ILoan } from '../../../../../common/ItemRepository';

export interface ItemExt {
  item : Item;
  record?: Record;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  private deepstreamClient:DeepstreamClient;

  // Data Models
  private items: ItemExt[] = new Array();

  constructor() {

    console.log("Constructor");

    this.deepstreamClient = new DeepstreamClient('localhost:6020');

    console.log("Constructor");

    // Fetch all datas

    this.fetchItems();

  }

  private fetchItems() {

    console.log('items')

      this.deepstreamClient.login( () => { 
        this.deepstreamClient.record.getList( 'items' ).whenReady(itemList => {
            itemList.getEntries().forEach(entry => {
                const recordName = `item/${entry}` 
                this.deepstreamClient.record.getRecord(recordName).whenReady(record => {
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
  }



}
