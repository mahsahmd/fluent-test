import './App.css';
import 'react-loading-skeleton/dist/skeleton.css'
import { Dropdown, initializeIcons, DropdownMenuItemType, DefaultButton } from '@fluentui/react';

initializeIcons();


function App() {
  const dropdownStyles = {
    root: { width: 300},
    dropdownTitle:{borderRadius: 20},
    dropdownItem:{backgroundColor:'white', selectors:{
      ':hover':{
        color:"blue"
      }
    }},
    dropdownItemHeader: { backgroundColor: 'grey', color:'black' },
  };
  const buttonStyles = {
    root:{
      width:300,
      backgroundColor:'blue',
      color:'white',
      selectors:{
        ':hover':{
          color:'black'
        }
      }
    }

  }
  const options = [
    { key: 'food', text: 'غذا', itemType: DropdownMenuItemType.Header },
    { key: 'pizza', text: 'پیتزا' },
    { key: 'burger', text: 'برگر' },
    { key: 'pasta', text: 'پاستا', disabled: true },
    { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    { key: 'appetizer', text: 'پیش غذا', itemType: DropdownMenuItemType.Header },
    { key: 'fires', text: 'سیب زمینی' },
    { key: 'salad', text: 'سالاد' },
  ];
  return (
    <div className="App">
      <Dropdown
        label="تست دراپ دان"
        defaultSelectedKey="pizza"
        options={options}
        styles={dropdownStyles}
      />
      <DefaultButton text="Standard" allowDisabledFocus disabled={false}  styles={buttonStyles}/>

    </div>
  );
}

export default App;
