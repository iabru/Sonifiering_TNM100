import React, { useEffect, useState } from 'react';
import SideMenuOptions from './SideMenuOptions';
import History from '../History/History';

const SideMenu = ({history, updateHistory}) => {
    //const [childData, setChildData] = useState(false);
    

    //TODO Remove just for debuging
    useEffect(() => {
        console.log(history);
    }, [history])

    return(
        <>
        <SideMenuOptions history={history} updateHistory={updateHistory}/>
        <History history={history} updateHistory={updateHistory}/>
        </>
    );
}

export default SideMenu;