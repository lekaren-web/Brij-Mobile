# Brij-Mobile
## Make sure XCODE locally is version 13

## Current versions
 "react": "^18.0.0",
 "react-native": "^0.68.1",
 Xcode is newly updated from appstore as version 13.3.1
<!-- notes:  
import {User} from '../src/models';
import {Auth, DataStore } from 'aws-amplify'
   // const newUser = User({
    //   enableNotifs
    // });

    // DataStore.save(newUser) -->

<!--  explore page
  const remoteItems = [
    {id: 1, title: 'Item 1', val: 'item-1'},
    {id: 2, title: 'Item 2', val: 'item-2'},
  ];
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([
    'italy',
    'spain',
    'barcelona',
    'finland',
  ]);
  const [items, setItems] = useState([
    {label: 'Spain', value: 'spain'},
    {label: 'Madrid', value: 'madrid', parent: 'spain'},
    {label: 'Barcelona', value: 'barcelona', parent: 'spain'},

    {label: 'Italy', value: 'italy'},
    {label: 'Rome', value: 'rome', parent: 'italy'},

    {label: 'Finland', value: 'finland'},
  ]); -->

<!-- 
<DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        showBadgeDot={false}
        theme="DARK"
        multiple={true}
        mode="BADGE"
        badgeColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
      />
 -->

 A user can receive many messages. A message has exactly one sender. A message has exactly one recipient. So, there are two one-to-many relationships from "message" to "user" - one for the sender, and one for the receiver.Jun 1, 2017