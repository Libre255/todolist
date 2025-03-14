import React from 'react';
import { TabList, Tab, makeStyles } from '@fluentui/react-components';
import { Link, Outlet } from 'react-router';

const useStyles = makeStyles({
  Tab: { 
    border: '1px solid #00d8ff',
    backgroundColor:'black',
    color:'yellow'
  }
});

type tabsType = {
  name:string;
  link:string;
}
const tabs:tabsType[] = [
  {
    name:"Home",
    link:"/"    
  },
  {
  name:"Todo list",
  link:"todolist"
  },
  {
    name:"Second Page",
    link:"second"
  },
  {
    name:"Countries",
    link:"countries" 
  },
  {
    name:"Info",
    link:"info"
  }
]


type Props = {
  // Define your props here
};

const Navbar: React.FC<Props> = ({ }) => {
  const classes = useStyles();

  return (
    <>
      <nav>
        <TabList>
          {tabs.map((tab, index)=>(
            <Tab key={index} className={classes.Tab} value={tab.link}>
              <Link to={tab.link}>{tab.name}</Link>
            </Tab>
          ))}
        </TabList>
      </nav>
      <Outlet/>
    </>
  );
};

export default Navbar;