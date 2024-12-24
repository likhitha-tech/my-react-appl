import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from './Header';
import Menu from './Menu';
import Ueffect from './Ueffect';
import Uref from './Uref';

function Display(props)
{
    var changeColor=function()
    {
        props.bgc="red"
    }

return(
 <div style={{backgroundColor:props.bgc}}>
    <h1> Welcome {props.person} to display page</h1>
    <button onClick={changeColor}>click</button>

  <Tabs>
    
    <TabList>
      <Tab>Header</Tab>
      <Tab>Menu</Tab>
      <Tab>Ueffect</Tab>
      <Tab>uref</Tab>
    </TabList>

    <TabPanel>
        <Header></Header>
    </TabPanel>
    <TabPanel>
<Menu></Menu>   
 </TabPanel>
 <TabPanel>
    <Ueffect></Ueffect>
 </TabPanel>
 <TabPanel>
    <Uref></Uref>
 </TabPanel>
  </Tabs>



    </div>

);


}
export default Display;
