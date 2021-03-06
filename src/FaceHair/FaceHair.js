import React from 'react';
import { FACE_HAIR } from './constants';
import { HAIR_TYPES } from './FaceHairShapes';

function renderFaceHair(type) {
    return HAIR_TYPES.find(hair => hair.type === type).preview;
}

function FaceHair({ type }) {
    const [faceHairBack, faceHairFront] = renderFaceHair(type);
    return (
        <g>
            { faceHairBack }
            { faceHairFront }
        </g>
    );
}

FaceHair.defaultProps = {
    type: FACE_HAIR.SHORT
};

export { FaceHair };