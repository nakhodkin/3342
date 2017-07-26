import React from 'react';
import { FACE_SHAPE } from './constants';

const FACE_SHAPES = [
    {
        type: FACE_SHAPE.OVAL,
        DOM: [
            <g id="svga-group-faceshape-wrap" data-updown="0" data-leftright="0" data-dist="0" data-scaleX="1"
               data-scaleY="1" data-rotate="0" className="">
                <g id="svga-group-faceshape-single" data-updown="0" data-leftright="0" data-dist="0" data-scaleX="1"
                   data-scaleY="1" data-rotate="0" className="">
                    <path id="SvgjsPath3040"
                          d="M158.785 78.006l-0.005 0c-0.01 0.046-12.197 40.27-15.879 52.418 -0.715 2.358-1.931 4.551-3.556 6.386 -6.375 7.194-23.768 25.057-39.324 25.057 -15.849 0-33.591-19.045-39.708-26.214 -1.442-1.688-2.507-3.633-3.172-5.765 -3.607-11.551-16.126-51.648-16.137-51.694h-0.001c-1.298-4.992-1.994-10.231-2.002-15.634C38.949 28.536 66.155 0.92 99.773 0.867c33.621-0.053 60.913 27.476 60.964 61.499C160.746 67.769 160.068 73.01 158.785 78.006z"
                          data-colored="true" data-filltype="tone" data-stroketype="none" fill="#f0c7b1"
                          strokeWidth="none"
                          opacity="1" stroke="none"></path>
                    <path id="SvgjsPath3041"
                          d="M132.168 10.26c14.31 11.135 23.671 29.457 23.699 50.208 0.009 5.404-0.615 10.645-1.796 15.641l-0.004 0c-0.009 0.046-11.223 40.27-14.608 52.417 -0.658 2.358-1.776 4.551-3.271 6.385 -5.865 7.195-21.866 25.059-36.178 25.059 -14.582 0-30.904-19.047-36.531-26.215 -1.327-1.689-2.306-3.633-2.918-5.764 -3.318-11.552-14.836-51.649-14.846-51.695h-0.001c-1.194-4.992-1.834-10.231-1.842-15.634 -0.029-20.827 9.348-39.239 23.713-50.412C50.392 21.159 38.967 40.508 39.001 62.56c0.008 5.403 0.704 10.643 2.002 15.634h0.001c0.01 0.046 12.53 40.143 16.137 51.694 0.666 2.132 1.73 4.076 3.172 5.765 6.116 7.169 23.858 26.214 39.708 26.214 15.557 0 32.949-17.862 39.324-25.057 1.625-1.835 2.841-4.027 3.556-6.386 3.682-12.148 15.869-52.372 15.879-52.418l0.005 0c1.283-4.997 1.961-10.237 1.952-15.641C160.704 40.389 149.297 21.135 132.168 10.26z"
                          data-colored="true" data-filltype="sd05" data-stroketype="none" fill="#e8b9a0"
                          strokeWidth="none"
                          opacity="1" stroke="none"></path>
                    <path id="SvgjsPath3042"
                          d="M158.785 78.006l-0.005 0c-0.01 0.046-12.197 40.27-15.879 52.418 -0.715 2.358-1.931 4.551-3.556 6.386 -6.375 7.194-23.768 25.057-39.324 25.057 -15.849 0-33.591-19.045-39.708-26.214 -1.442-1.688-2.507-3.633-3.172-5.765 -3.607-11.551-16.126-51.648-16.137-51.694h-0.001c-1.298-4.992-1.994-10.231-2.002-15.634C38.949 28.536 66.155 0.92 99.773 0.867c33.621-0.053 60.913 27.476 60.964 61.499C160.746 67.769 160.068 73.01 158.785 78.006z"
                          data-colored="true" data-filltype="none" data-stroketype="sd3" fill="none" stroke="#c27b55"
                          strokeWidth="1.5" opacity="1"></path>
                </g>
            </g>
        ]
    },
    {
        type: FACE_SHAPE.TRIANGLE,
        DOM: [
            <g id="svga-group-faceshape-wrap" data-updown="0" data-leftright="0" data-dist="0" data-scaleX="1"
               data-scaleY="1" data-rotate="0" className="">
                <g id="svga-group-faceshape-single" data-updown="0" data-leftright="0" data-dist="0" data-scaleX="1"
                   data-scaleY="1" data-rotate="0" className="">
                    <path id="SvgjsPath3258"
                          d="M143.337 131.62c-6.672 9.643-30.551 25.524-39.142 30.485 -1.757 1.015-6.626 1.015-8.383-0.001 -8.584-4.966-33.469-20.844-40.144-30.484 -8.127-11.736-14.519-54.063-14.53-54.116 -1.3-4.948-1.996-10.14-2.004-15.495C39.082 28.29 66.289 0.92 99.907 0.867c33.621-0.053 60.913 27.231 60.963 60.95 0.009 5.355-0.669 10.55-1.952 15.501C158.901 77.372 151.488 119.842 143.337 131.62z"
                          data-colored="true" data-filltype="tone" data-stroketype="none" fill="#f0c7b1"
                          strokeWidth="none"
                          opacity="1"></path>
                    <path id="SvgjsPath3259"
                          d="M133.322 10.831c13.736 11.102 22.65 28.894 22.679 48.972 0.008 5.355-0.616 10.549-1.796 15.501 -0.016 0.053-6.836 42.523-14.335 54.302 -6.138 9.643-28.106 25.523-36.011 30.483 -1.616 1.017-6.096 1.017-7.712-0.001 -7.897-4.965-30.792-20.842-36.932-30.482 -7.478-11.737-13.357-54.063-13.368-54.117 -1.196-4.947-1.836-10.14-1.843-15.495 -0.029-20.154 8.906-38.034 22.7-49.174C50.079 21.741 39.101 40.587 39.134 62.01c0.008 5.354 0.704 10.547 2.004 15.495 0.012 0.053 6.403 42.379 14.53 54.116 6.675 9.641 31.56 25.519 40.144 30.484 1.756 1.016 6.626 1.016 8.383 0.001 8.591-4.961 32.47-20.843 39.142-30.485 8.151-11.778 15.564-54.249 15.581-54.302 1.283-4.952 1.961-10.146 1.952-15.501C160.838 40.472 149.882 21.716 133.322 10.831z"
                          data-colored="true" data-filltype="sd05" data-stroketype="none" fill="#e8b9a0"
                          strokeWidth="none"
                          opacity="1"></path>
                    <path id="SvgjsPath3260"
                          d="M143.337 131.62c-6.672 9.643-30.551 25.524-39.142 30.485 -1.757 1.015-6.626 1.015-8.383-0.001 -8.584-4.966-33.469-20.844-40.144-30.484 -8.127-11.736-14.519-54.063-14.53-54.116 -1.3-4.948-1.996-10.14-2.004-15.495C39.082 28.29 66.289 0.92 99.907 0.867c33.621-0.053 60.913 27.231 60.963 60.95 0.009 5.355-0.669 10.55-1.952 15.501C158.901 77.372 151.488 119.842 143.337 131.62z"
                          data-colored="true" data-filltype="none" data-stroketype="sd3" fill="none" stroke="#c27b55"
                          strokeWidth="1.5" opacity="1"></path>
                </g>
            </g>
        ]
    }
];

export { FACE_SHAPES };