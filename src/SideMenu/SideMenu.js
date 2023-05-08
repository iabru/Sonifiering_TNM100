import React, { useEffect, useState } from 'react';
import SideMenuOptions from './SideMenuOptions';
import History from '../History/History';

const SideMenu = () => {
    //const [childData, setChildData] = useState(false);
    const [historyUpdate, setHistoryUpdate] = useState({
        "tab1Option": [0,0],
        "tab2Option": [0,0,0],
        "tab3Option": [0,0],
        "tab4Option": [0,0]
    });

    //TODO Remove just for debuging
    useEffect(() => {
        console.log(historyUpdate);
    }, [historyUpdate])

    return(
        <>
        <SideMenuOptions history={historyUpdate} updateHistory={setHistoryUpdate}/>
        <History history={historyUpdate} updateHistory={setHistoryUpdate}/>
        </>
    );
}

export default SideMenu;