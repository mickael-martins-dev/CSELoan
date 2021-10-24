import { DeepstreamClient } from '@deepstream/client';
import { Deepstream } from '@deepstream/server';

import { Item }  from '../../common/ItemRepository';

import * as fs from 'fs';
import * as path from 'path';

const BACKUP_DIRECTORY  = "../app/dist/backup";

// First Part, Start the server

let server = new Deepstream({});
server.start();

// Restore the data in server
// https://hashnode.com/post/how-to-use-a-json-file-in-typescript-cix9q0z3i00wc6h536ovr1dde

let client = new DeepstreamClient('localhost:6020');
client.login();

//
// Set the environnement
// 

fs.mkdirSync(BACKUP_DIRECTORY, { recursive: true });

// Create default item in list

client.record.getList( 'items' ).whenReady( (itemList) => {

    if(!fs.existsSync(BACKUP_DIRECTORY)) {
        return;
    }

    fs.readdir(BACKUP_DIRECTORY,  (error, files) => {
        if(error) {
            console.log(error);
            return; // Kill the restoration
        }

        files.forEach(file => {

            let filePath = path.join(BACKUP_DIRECTORY, file);
            console.log(filePath);
        
            let toto = fs.readFileSync(filePath).toString();
            let item = JSON.parse(toto) as Item;

            const recordName = `item/${item.name}` 
            let record = client.record.getRecord(recordName);
            record.set(item);
        
            itemList.addEntry(item.name);

            console.log("Add entry from the server;")

            

        });
    });
});



//
// -- Define all Listener to store the modification
//

client.record.getList( 'items' ).whenReady( ( list ) => {
    // Interact with the list
    
    list.subscribe( (entries) => {

        for(let entry of entries) {            
            const recordName = `item/${entry}` 
            client.record.getRecord(recordName).whenReady(record => {

                let item = record.get() as Item; 
                let filePath = path.join(BACKUP_DIRECTORY, item.name);

                fs.writeFile(filePath, JSON.stringify(item), (error) => {
                    if(error) {
                        console.log(error);
                    }
                });
            });
        }
    });

    list.on('entry-added', (entry) => {

        const recordName = `item/${entry}` 
        client.record.getRecord(recordName).whenReady(record => {

            let item = record.get() as Item; 
            let filePath = path.join(BACKUP_DIRECTORY, item.name);

            fs.writeFile(filePath, JSON.stringify(item), (error) => {
                if(error) {
                    console.log(error);
                }
            });
        });
    });

    list.on('entry-removed', (entry) => {
        // Remove the files associate

        const recordName = `item/${entry}` 
        client.record.getRecord(recordName).whenReady(record => {

            record.delete();

            let filePath = path.join(BACKUP_DIRECTORY, entry);
            fs.unlink(filePath, (error) => {
                if (error) { console.error(error); }
            });
        });
    });
});

/*
let item: Item = {
    index : 0,
    name : "Nintendo_Switch_1",
    description: "Nintendo Switch 1",
};
client.record.getList( 'items' ).whenReady( ( list ) => {

    const recordName = `item/${item.name}` 
    let record = client.record.getRecord(recordName);
    record.set(item);

    list.addEntry(item.name);
    console.log("Add entry !");

});
*/
