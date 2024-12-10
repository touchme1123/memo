import React, { useEffect, useState } from 'react';
import Popup from "../component/Popup";
import { v4 as uuidv4 } from 'uuid';
import { getAll } from "../api/postAPI";

function Main({ currentGroup }) {
    const [tempPost, setTempPost] = useState([]); // id와 content를 함께 저장
    const [postsSaved, setPostsSaved] = useState([]);

    const onClickAdd = () => {
        const ranId = uuidv4();
        setTempPost((preId) => [...preId, { id: ranId, content: "" }]);  // id와 content를 함께 추가
    };

    const onClickClean = () => {
        setTempPost([]);  // 배열 초기화
    };

    // Popup을 닫는 함수
    const handleClosePopup = (id) => {
        setTempPost((preId) => preId.filter((p) => p.id !== id));  // id와 일치하지 않는 팝업만 남김
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await getAll(currentGroup);

            // 각 항목에 대해 랜덤 id 생성하고 content와 함께 저장
            const result = res.data.map((post) => ({
                id: post.uuid,  // 랜덤 id 생성
                content: post.content,  // 해당 post의 content
            }));

            setTempPost(result);  // tempPost 상태에 id와 content 설정
            console.log(res.data);  // 생성된 id와 content 배열 출력
        };

        fetchData();
    }, [currentGroup]);  // currentGroup이 변경될 때마다 호출

    return (
        <>
            {/* Main Content Area */}
            <div
                className="bg-gradient-to-br from-green-200 via-yellow-150 to-red-200 w-full flex flex-col p-5 h-[calc(100vh-80px)] overflow-hidden"
            >
                {/* Content Container */}
                <div
                    className="w-full flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-5 flex-grow overflow-hidden"
                >
                    {/* Add/Clean Buttons */}
                    <div className="flex space-x-8">
                        <button
                            className="text-xl md:text-2xl text-gray-600 hover:text-green-500 focus:outline-none"
                            onClick={onClickAdd}
                        >
                            ADD
                        </button>
                        <button
                            className="text-xl md:text-2xl text-gray-600 hover:text-red-500 focus:outline-none"
                            onClick={onClickClean}
                        >
                            CLEAN
                        </button>
                    </div>

                    {/* Popup Container */}
                    <div className="flex flex-wrap justify-center gap-4 min-h-full overflow-auto">
                        {tempPost.map((post) => (
                            <Popup
                                key={post.id}
                                id={post.id}
                                content={post.content}  // id와 content를 전달
                                handleClickClose={handleClosePopup}
                                currentGroup={currentGroup}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
