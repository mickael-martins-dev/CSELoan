import * as React from 'react';
import { ItemStore, ItemExt } from '../store/ItemStore';
import { NavBar } from "./NavBar";
import { Card } from 'primereact/card';
import { observer } from "mobx-react";
import { Button } from 'primereact/button';

interface IMainProps {
  itemStore: ItemStore;
}

@observer
export class Main extends React.Component<IMainProps, {}> {

  render () {

    // Elements to show

    let elements = this.props.itemStore.getItems(). map( (itemExt: ItemExt) => {
      return <>
        <Card title={ itemExt.item.name } subTitle={ itemExt.item.type }>

          <div className="p-grid">
            <div className="p-col-10"> { itemExt.item.description } </div>
            <div className="p-col-2"> <Button label="Save"  icon="pi pi-check" /> </div>

          </div>

        </Card>
      </>
    });
    
    return (
        <>
          <NavBar />                      
          <h2> Articles </h2>  
          {elements}
        </>      
    );
  }
} 