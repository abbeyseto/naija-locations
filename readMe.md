# Naija Locations

 A simple utility package that serves states and locations in nigeria including the 37 states and local government areas

 ## Installation

 To install, run the

 ```npm install naija-locations```

 ## Usage

ES6 Import module
 `import NaijaLocation from 'naija-locations';`

Node Import Module 

`var NaijaLocation = require('naija-locations');`

Usage in React.js

Useful for simple select dropdowns
```
import NaijaLocation from 'naija-locations';

export default class SelectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { states: '', local_gov: '' };
  }

  onSelect = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const state = Naija.states();
    const places = this.state.states && Naija.locals(this.state.states);
   
    return (
      <div>
        <select name="state" onChange={e => this.onSelect(e)}>
          <option>Select State </option>
          {state.map(state => {
            return <option key={state.name}>{state.name}</option>;
          })}
        </select>
        <select name="local_gov" onChange={e => this.onSelect(e)}>
          <option>Select LG </option>
          {places ? (
            places.map(loc => {
              return <option key={loc.name}>{loc.name}</option>;
            })
          ) : (
            <option>Select LG </option>
          )}
        </select>
      </div>
    );
  }
}
```

## Contributing

To contribute to this repository, please send me a PR request

## Roadmap
- Towns and Cities
- Popular places

## Author
- Adenle Abiodun