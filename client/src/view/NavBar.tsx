
import * as React from 'react';
import { TabMenu } from 'primereact/tabmenu';

export class NavBar extends React.Component<{}, {}> {

    render () {

        const items = [
            {label: 'Home', icon: 'pi pi-fw pi-home'},
            {label: 'About', icon: 'pi pi-fw pi-calendar'},
        ];

        return <>
            <TabMenu model={items} />           
        </>
    }
}