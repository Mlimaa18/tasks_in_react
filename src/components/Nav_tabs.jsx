import React from 'react';
import Tab from './Tab';

const Nav_tabs = ({ tabs, change_tab}) => {
  return (
    <div className="tabs">
      <ul>
        {
          tabs.map(tab => {
            return (
              <Tab
                key={Math.random().toString().substring(2)}
                tab={tab}
                change_tab={change_tab}
                >
              </Tab>
            )
          })

        }
      </ul>
    </div>
  );
};

export default Nav_tabs;