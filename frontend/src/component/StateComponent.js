import React, {useState} from 'react';
import GroupList from './GroupList';
import Menu from "../layouts/Menu";
import Main from "../pages/Main";


function StateComponent() {
    const [currentGroup, setCurrentGroup] = useState(null);

    // 그룹을 업데이트하는 함수
    const handleGroup = (group) => {
        setCurrentGroup(group);  // 선택된 그룹 상태 업데이트
    };

    return (
        <>
            <Menu handleGroup={handleGroup}/>

            <Main currentGroup={currentGroup}/>
        </>
    );
}

export default StateComponent;
