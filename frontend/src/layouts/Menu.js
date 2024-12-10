import React, {useState} from 'react';
import GroupList from "../component/GroupList";
import CreateGroup from "../component/CreateGroup";

function Menu({handleGroup}) {
    const [visibleGrpList, setVisibleGrpList] = useState(false);
    const [visibleCreateGrp, setVisibleCreateGrp] = useState(false);

    const openGrpList = () => {
        setVisibleGrpList(true);
    }

    const openCreateGrp = () => {
        setVisibleCreateGrp(true);
    }

    const closeGrpList = () => {
        setVisibleGrpList(false);
    }

    const closeCreateGrp = () => {
        setVisibleCreateGrp(false);
    }

    return (
        // Navigation Menu
        <nav className="flex justify-between items-center h-20 bg-white p-5 shadow-md">
            {/* Title */}
            <div className="flex-1">
                <button className="text-2xl md:text-4xl font-semibold text-gray-800 hover:text-blue-600">
                    SIMPLE BOARD
                </button>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-8">
                <button
                    className="text-xl md:text-2xl text-gray-600 hover:text-green-500 focus:outline-none"
                    onClick={openCreateGrp}
                >
                    CREATE
                </button>
                <button className="text-xl md:text-2xl text-gray-600 hover:text-red-500 focus:outline-none"
                        onClick={openGrpList}
                >
                    LIST
                </button>
            </div>

            {/* Group List Popup */}
            {visibleGrpList && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
                    <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-96">
                        <GroupList closeGrpList={closeGrpList} handleGroup={handleGroup}/>
                    </div>
                </div>
            )}

            {visibleCreateGrp && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
                    <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-96">
                        <CreateGroup closeCreateGrp={closeCreateGrp}/>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Menu;
