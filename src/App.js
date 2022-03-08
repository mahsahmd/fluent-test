import './App.css';
import 'react-loading-skeleton/dist/skeleton.css'
import { Dropdown, initializeIcons, DropdownMenuItemType } from '@fluentui/react';

initializeIcons();


function App() {
  const dropdownStyles = {
    root: { width: 300 },
    dropdownItem:{backgroundColor:'white', selectors:{
      ':hover':{
        color:"red"
      }
    }},
    dropdownItemHeader: { backgroundColor: 'pink' },
  };
  const options = [
    { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
    { key: 'apple', text: 'Apple' },
    { key: 'banana', text: 'Banana' },
    { key: 'orange', text: 'Orange', disabled: true },
    { key: 'grape', text: 'Grape' },
    { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
    { key: 'broccoli', text: 'Broccoli' },
    { key: 'carrot', text: 'Carrot' },
    { key: 'lettuce', text: 'Lettuce' },
  ];
  return (
    <div className="App">
      <Dropdown
        label="Disabled example with defaultSelectedKey"
        defaultSelectedKey="broccoli"
        options={options}
        styles={dropdownStyles}
      />
    </div>
  );
}

export default App;
