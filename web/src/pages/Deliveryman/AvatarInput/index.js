import React, {useState} from 'react';

import api from '../../../services/api';

import { Container } from './styles';

export default function AvatarInput({preview, file, handleChange}) {

    return (
    <Container>
        <label htmlFor="avatar">
            <img src={preview || "https://api.adorable.io/avatars/285/abott@adorable.png"} alt="" />

            <input type="file"
                type="file"
                id="avatar"
                accept="image/*"
                data-file={file}
                onChange={handleChange}
            />
        </label>
    </Container>
    );
}
