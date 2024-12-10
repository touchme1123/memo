import React, {useEffect, useState} from 'react';
import {getAll} from "../api/GroupAPI";

function GroupList({closeGrpList, handleGroup }) {
    const [selectedGroup, setSelectedGroup] = useState(null); // 선택된 그룹 상태 관리
    const [groups, setGroups] = useState(null);

    const handleSelectGroup = (group) => {
        setSelectedGroup(group); // 그룹 선택 시 상태 업데이트

    };

    const handleJoinGroup = () => {
        if (selectedGroup) {
            handleGroup(selectedGroup);
            setSelectedGroup(selectedGroup);
            alert(`Joined ${selectedGroup}`);  // 그룹에 입장하는 로직 (예: 서버 요청)

        } else {
            alert("Please select a group to join.");
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await getAll();
            const groupList = res.data.map(item => item.groupName);  // groupName만 추출하여 리스트로 저장
            setGroups(groupList);
            console.log(groupList);
        };

        fetchData();  // 비동기 함수 호출
    }, []);  // 빈 배열을 의존성 배열로 전달하여 한 번만 실행되도록 수정

    return (
        <div className="w-96 bg-white p-4 rounded-lg shadow-lg relative">
            {/* Close 버튼 */}
            <button
                onClick={closeGrpList}
                className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2"
            >
                X
            </button>

            {/* 제목 */}
            <h2 className="text-2xl font-semibold text-center mb-4">Group List</h2>

            {/* 그룹 목록 */}
            <div className="space-y-2 mb-4">
                {groups && groups.map((group, index) => (
                    <div
                        key={index}
                        onClick={() => handleSelectGroup(group)}
                        className={`p-3 cursor-pointer rounded-lg hover:bg-gray-200 ${selectedGroup === group ? 'bg-blue-100' : 'bg-gray-100'}`}
                    >
                        {group}
                    </div>
                ))}
            </div>

            {/* Join 버튼 */}
            <div className="flex justify-center">
                <button
                    onClick={() => {
                        handleJoinGroup();
                        closeGrpList();
                    }}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                    JOIN
                </button>
            </div>
        </div>
    );
}

export default GroupList;
