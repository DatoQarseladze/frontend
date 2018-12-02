import React from 'react';
import ReactDOM from 'react-dom';
import App,{dec,inc} from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Decrement works ', () =>{
  const s = { value : 0 }
  const show = dec(s);

  expect( show.value ).toBe(-1)
});