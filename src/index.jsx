import React from 'react';
import ReactDOM from 'react-dom';

import '@xo-union/essentials';

import { Field, FieldGroup, FormTheme } from '@xo-union/fields';
import bsGrid from '@xo-union/bootstrap/grid';

function App() {
  return (
    <div className={bsGrid.col12}>
      <FormTheme>
        <FieldGroup>
          <Field name="email" />
        </FieldGroup>
      </FormTheme>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
