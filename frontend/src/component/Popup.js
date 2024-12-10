import React, {useState, useRef, useEffect} from 'react';
import {register, remove} from "../api/postAPI";

function Popup({id, handleClickClose, currentGroup, content}) {
    const [position, setPosition] = useState({x: 300, y: 300});
    const [originalPosition, setOriginalPosition] = useState({x: 300, y: 300});
    const dragging = useRef(false);
    const offset = useRef({x: 0, y: 0});
    const [clickPost, setClickPost] = useState(false);
    const [tempContent, setTempContent] = useState();

    const handleClickPost = () => {
        setClickPost(true);
    };

    const handleClickDelete = () => {
        remove(id);
        handleClickClose(id)
    }

    const handleChange = (e) => {
        setTempContent(e.target.value);
    };

    const handleClickSave = async () => {
        const postDTO = {
            content: tempContent,
            uuid: id,
            groupName: currentGroup,
        };
        if(content) await remove(id);
        const res = await register(postDTO);
        alert("Successfully registered");
    };

    const handleBoundaryCheck = (e) => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        if (e.pageX < 0 || e.pageX > viewportWidth || e.pageY < 0 || e.pageY > viewportHeight) {
            setPosition(originalPosition);
        }
    };

    const handleDragStart = (e) => {
        dragging.current = true;
        offset.current = {
            x: e.pageX - position.x,
            y: e.pageY - position.y,
        };

        window.addEventListener('mousemove', handleDrag);
        window.addEventListener('mouseup', handleDragEnd);
        window.addEventListener('mousemove', handleBoundaryCheck);
    };

    const handleDrag = (e) => {
        if (!dragging.current) return;

        setPosition({
            x: e.pageX - offset.current.x,
            y: e.pageY - offset.current.y,
        });
    };

    const handleDragEnd = () => {
        dragging.current = false;
        window.removeEventListener('mousemove', handleDrag);
        window.removeEventListener('mouseup', handleDragEnd);
        window.removeEventListener('mousemove', handleBoundaryCheck);
    };

    useEffect(() => {
        if (content) {
            setTempContent(content);
        }
    }, [content]); // content가 변경될 때마다 호출

    return (
        <div
            id={id}
            className="absolute bg-white border border-gray-300 shadow-xl rounded-lg p-4"
            style={{
                top: `${position.y}px`,
                left: `${position.x}px`,
                minWidth: '300px', // 최소 너비 지정
            }}
        >
            {/* Popup Header */}
            <div className="flex justify-between items-center mb-4 cursor-move" onMouseDown={handleDragStart}>
                <h2 className="text-xl font-semibold text-gray-700">Memo</h2>
                <button
                    onClick={() => {
                        handleClickClose(id);
                    }}
                    className="text-red-500 hover:text-white hover:bg-red-500 p-2 rounded-full focus:outline-none"
                >
                    X
                </button>
            </div>

            {/* Popup Content */}
            <textarea
                placeholder="Please write your memo here"
                className="w-full min-h-32 bg-yellow-100 border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                style={{
                    resize: "both",  // 텍스트 영역 크기 조절 가능
                }}
                onChange={handleChange}
                value={tempContent}
            />

            {/* Button Container */}
            <div className="flex justify-between gap-4 mt-4">
                <button
                    onClick={handleClickDelete}
                    className="px-6 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 focus:outline-none transition-all"
                >
                    Delete
                </button>
                <button
                    onClick={handleClickSave}
                    className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 focus:outline-none transition-all"
                >
                    Save
                </button>

            </div>
        </div>
    );
}

export default Popup;
