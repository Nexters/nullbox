import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import './typography';

injectGlobal`
${reset};
body{
    background-color:#0d062e;
}`;

ReactDOM.render(<Root />, document.getElementById('root'));
