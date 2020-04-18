import React from 'react';

import Modal from 'react-modal';

import signature from '../../assets/signature.png';

import { ModalBody, DeliveryInfo, DeliveryDate, RecipientSignature } from './styles';

export default function CustomModal({object, showModal, setShowModal}) {

    function closeModal(){
        setShowModal(false);
    }

  return (
    <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="ExampleModal"
    >
        <ModalBody>
            {object.recipient ? (
                <>
            <DeliveryInfo>
                <strong>Informações da encomenda</strong>
                <span>{object.recipient.street}, {object.recipient.number}</span>
                <span>{object.recipient.city} - {object.recipient.state}</span>
                <span>{object.recipient.number}</span>
            </DeliveryInfo>

            <DeliveryDate>
                <strong>Datas</strong>
                <div>
                    <strong>Retirada:</strong>
                    <span> {object.formattedStartDate ? object.formattedStartDate : '-'}</span>
                </div>
                <div>
                    <strong>Entrega:</strong>
                    <span> {object.formattedEndDate ? object.formattedEndDate : '-'}</span>
                </div>
            </DeliveryDate>
            {object.signature_id &&
            <RecipientSignature>
                <strong>Assinatura do destinatário</strong>
                <img src={signature} />
            </RecipientSignature>}</>)
            :
            (<>
                <strong>VISUALIZAR PROBLEMA</strong>
                <span>{object.description}</span>
             </>)}
            
            <button onClick={() => closeModal()}>Fechar</button>
        </ModalBody>
    </Modal>
  );
}
