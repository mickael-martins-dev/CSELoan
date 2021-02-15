import * as React from 'react';
import * as ReactDom from 'react-dom';

import Main from './view/Main';

import { DeepstreamClient } from '@deepstream/client';
import { ItemStore } from './store/ItemStore';

let client = new DeepstreamClient('localhost:6020');
let itemStore = new ItemStore(client);

ReactDom.render(<Main itemStore={itemStore} />, document.getElementById('root'));