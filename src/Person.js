import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React from 'react';
import Menu from './Menu';
let mark=80;
var name="praveen";
function Person(){
    return(
        <div>
<p style={{color:'green', backgroundColor:'cyan'}}>
 Welcome {name} to react js. you secured {mark} score
 </p>
<p style={{color:"red",border:"3px solid yellow",
    backgroundColor:"plum"}}>
    It supportts jsx format</p>
  <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
<Menu></Menu>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

        </div>
    );
}

export default Person;