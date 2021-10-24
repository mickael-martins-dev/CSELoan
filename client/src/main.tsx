import * as React from 'react';
import ReactDOM from 'react-dom'

import { Main } from './view/Main';

import { DeepstreamClient } from '@deepstream/client';
import { ItemStore } from './store/ItemStore';

import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
import './index.css'

let client = new DeepstreamClient('localhost:6020');
let itemStore = new ItemStore(client);

ReactDOM.render( <React.StrictMode> <Main itemStore={itemStore} /> </React.StrictMode>, document.getElementById('root') )
