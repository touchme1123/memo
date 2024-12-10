import React, {useState} from 'react';
import {register} from "../api/GroupAPI";

function CreateGroup({closeCreateGrp}) {
    const [name, setName] = useState(''); // 그룹 이름 상태 관리

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    // 그룹 생성 함수
    const handleCreateGroup = async () => {
        if (!name) {
            alert("Please enter a group name.");
            return;
        }

        const groupDTO = {groupName: name};

        try {
            const gno = await register(groupDTO); // register가 비동기 함수라면 await 추가
            console.log(gno); // 그룹 번호 또는 반환된 데이터 확인
            alert(`Group "${name}" Created`); // 그룹 생성 완료 메시지
            closeCreateGrp(); // 생성 후 팝업 닫기
        } catch (error) {
            console.error("Error creating group:", error);
            alert("There was an error creating the group. Please try again.");
        }
    };



    return (
        <div className="w-96 bg-white p-6 rounded-lg shadow-xl relative space-y-6"> {/* 더 깔끔한 여백과 그림자 */}
            {/* Close 버튼 */}
            <button
                onClick={closeCreateGrp}
                className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2 hover:bg-red-600 transition-colors"
            >
                X
            </button>

            {/* 제목 */}
            <h2 className="text-2xl font-semibold text-center text-gray-800">Create Group</h2>

            {/* 그룹 이름 입력 */}
            <div className="space-y-4">
                <input
                    type="text"
                    value={name}
                    onChange={handleChangeName}
                    placeholder="Enter your group name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Create 버튼 */}
            <div className="flex justify-center">
                <button
                    onClick={handleCreateGroup}
                    className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                    Create Group
                </button>
            </div>
        </div>
    );
}

export default CreateGroup;
