import React, {useEffect, useState} from 'react'
import LeftLayout from './LeftLayout'
import {getPartners} from "../redux/action/authAction";
import {connect} from "react-redux";
import {API_PATH} from "../tools/constants";
import {Modal, ModalBody, ModalFooter} from "reactstrap";

const Partners = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPartner, setSelectedPartner] = useState(null);

    useEffect(() => {
        props.getPartners();
    }, [])

    const changeModal = (partner) => {
        setSelectedPartner(partner);
        setIsOpen(!isOpen);
    }

    return (
        <>
        <div className="partners position-relative">
        <LeftLayout>
            <div className="row pt-5 ">
                {props.partners?.map(item => (
                    <div className="col-lg-4 col-6 mb-4">
                        <div className="myCard myRadius pinks partners-card-content">
                            <div className="cardHeader">
                                <i><img src={API_PATH + "file/get/" + item.photo?.id} className='w-100' alt="" /></i>
                            </div>

                            <div className="cardBody">
                                <button className="btn topBtn" onClick={() => changeModal(item)}>Подробнее</button>

                                <div className="d-flex align-center justify-content-between">
                                    <div className="d-flex flex-column">
                                        <h6>Категория</h6>
                                        <h5>{item.category}</h5>
                                    </div>

                                    {/*<div className="d-flex align-center bottomBtn">*/}
                                    {/*    <button className="btn mr-2"><img src="/assets/icon/circle3.svg" alt="" /></button>*/}
                                    {/*    <button className="btn mr-2"><img src="/assets/icon/share.svg" alt="" /></button>*/}
                                    {/*    <button className="btn"><img src="/assets/icon/star.svg" alt="" /></button>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </LeftLayout>
            <Modal isOpen={isOpen} toggle={changeModal} className="bg-dark">
                <ModalBody className="bg-dark">
                    <h3 className="text-center mb-3">{selectedPartner?.name}</h3>
                    <img src={API_PATH + "file/get/" + selectedPartner?.photo?.id} alt="partner" className="w-100"/>
                    <p className="mt-4">{selectedPartner?.description}</p>
                </ModalBody>
                <ModalFooter className="bg-dark">
                    <button type="button" className="btn bg-white" onClick={changeModal}>Закрыт</button>
                </ModalFooter>
            </Modal>
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        partners: state.auth.partners
    }
}

export default connect(mapStateToProps, {getPartners})(Partners)
