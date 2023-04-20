import React, { useState } from 'react';
import SideMenuOptions from './SideMenuOptions';
import History from '../History/History';

const SideMenu = () => {
    const [childData, setChildData] = useState(false);
    const anotherChildToParent = (childData) => {
        setChildData(childData);
    }

    return(
        <>
        <SideMenuOptions anotherChildToParent={anotherChildToParent}/>
        <History parentToChild={childData}/>
        </>
    );
}

export default SideMenu;