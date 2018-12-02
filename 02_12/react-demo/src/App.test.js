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


describe('App component text enzyme', () =>{
  it('renders value', () =>{
    const  Container = shalow(<App /> );
    expect(Container.find(Value).toHaveLength(1))
  })
})


it('Value component props check', () =>{
  const Container = shallow(<App />)
  const ValueComponent = Container.find(Value);

  expect(ValueComponent.props().value).toEqual(0)
  Container.setState({value:7})
})
