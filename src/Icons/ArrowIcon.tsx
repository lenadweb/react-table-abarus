import React, { FC } from 'react';

interface IArrowIcon {
    isDown?: boolean;
}

const ArrowIcon:FC<IArrowIcon> = ({ isDown = false }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        transform={`rotate(${isDown ? 90 : 270})`}
        enableBackground="new 0 0 512 512"
        viewBox="0 0 6.35 6.35"
    >
        <g xmlns="http://www.w3.org/2000/svg" transform="translate(0 -290.65)">
            <path
                fill="#fff"
                d="M2.258 291.965a.265.265 0 00-.174.469l1.619 1.387-1.62 1.386a.265.265 0 10.345.4l1.853-1.585a.265.265 0 000-.403l-1.853-1.587a.265.265 0 00-.17-.067z"
                data-original="#000000"
                vectorEffect="none"
            />
        </g>
    </svg>
);

export default ArrowIcon;
