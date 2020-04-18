import React, {useState} from 'react';

import { useDispatch } from 'react-redux';

import { MdMoreHoriz, MdVisibility, MdDeleteForever, MdCreate } from 'react-icons/md';
import { Link } from 'react-router-dom';

import CustomModal from '../CustomModal';



import { Container, ActionItem, ActionText } from './styles';

export default function MoreActions({object, handleDelete, editRequest, toggleView, hideEdit}) {
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function handleClickOnMore(){
        setIsVisible(!isVisible);
    }

    

    function handleEdit(object){
        dispatch(editRequest(object));
    }

    function openModal(){
        setShowModal(true);
    }

    return (
        <>
            <Link>
                <MdMoreHoriz size={24} color="#C6C6C6" onClick={()=>handleClickOnMore()}/>
            </Link>
            <Container isVisible={isVisible}>
                {toggleView && (<Link onClick={() => openModal()}>
                    <ActionItem>
                        <MdVisibility size={14} color="#8E5BE8" />
                        <ActionText>Visualizar</ActionText>
                    </ActionItem>
                </Link>)}
                {!hideEdit && (<Link onClick={() => handleEdit(object)}>
                    <ActionItem>
                        <MdCreate size={14} color="#4D85EE" />
                        <ActionText>Editar</ActionText>
                    </ActionItem>
                </Link>)}
                <Link onClick={() => handleDelete(object.id)}>
                    <ActionItem>
                        <MdDeleteForever size={14} color="#DE3B3B" />
                        <ActionText>Excluir</ActionText>
                    </ActionItem>
                </Link>
                {showModal && 
                    <CustomModal 
                        object={object}
                        showModal={showModal}
                        setShowModal={setShowModal}
                    />}
            </Container>
        </>
    );
}
