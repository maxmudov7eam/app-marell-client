import React, {useState} from 'react'
import LeftLayout from './LeftLayout'
import {AvInput, AvForm} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {register} from "../redux/action/authAction";

const SignIn = (props) => {
    const [passwordShown, setPasswordShown] = useState(false)
    const [passwordShown2, setPasswordShown2] = useState(false)
    return (
        <div className="private-office signIn">
            <LeftLayout>
                <div className="signInWrap d-flex align-items-center justify-content-center vh-100">
                    <div className="myMainCard d-flex ">
                        <div className="left d-flex flex-column position-relative">
                            <i><img src="/assets/image/prMini.svg" alt=""/></i>
                            <h6>MARELL</h6>
                        </div>
                        <AvForm onValidSubmit={props.register}>
                            <div className="mid">

                                <div className="columnWrap d-flex align-items-center justify-content-between">

                                    <div className="wrap">
                                        <label htmlFor="surname">Фамилия</label>
                                        <AvInput type="text" id="surname" name='lastName' required/>
                                    </div>

                                    <div className="wrap mx-2">
                                        <label htmlFor="name">Имя</label>
                                        <AvInput type="text" id="name" name='firstName' required/>
                                    </div>

                                    <div className="wrap">
                                        <label htmlFor="fatherName">Отчество</label>
                                        <AvInput type="text" id='fatherName' name="patron" required/>
                                    </div>

                                </div>

                                <div className="columnWrap d-flex align-items-center justify-content-between">

                                    <div className="wrap mr-2">
                                        <label htmlFor="login">Логин</label>
                                        <AvInput type="text" id='login' name="login" required/>
                                    </div>

                                    <div className="wrap">
                                        <label htmlFor="id">ID/почта/логин Прегласителя</label>
                                        <AvInput type="number" id='id' className="bigInput" name="inviteId"/>
                                    </div>

                                </div>

                                <div className="columnWrap d-flex align-items-center justify-content-between">

                                    <div className="wrap mr-2">
                                        <label htmlFor="email">E-mail</label>
                                        <AvInput type="email" id='email' name="email" required/>
                                    </div>

                                    <div className="wrap">
                                        <label htmlFor="number">Телефон</label>
                                        <AvInput type="number" id='number' name="phoneNumber" required/>
                                    </div>

                                </div>

                                <div className="columnWrap d-flex align-items-center justify-content-between mt-4">

                                    <div className="wrap mr-2">
                                        <label htmlFor="password">Пароль</label>
                                        <div className="inputWrap">
                                            <AvInput type={passwordShown ? 'text' : 'password'} id='password' name="password" required/>
                                            <div className='miniEye ' onClick={() => {
                                                setPasswordShown(!passwordShown)
                                            }}><img src="/assets/icon/miniEye.svg" alt=""/></div>
                                        </div>
                                    </div>

                                    {/*<div className="wrap">*/}
                                    {/*    <label htmlFor="email2">Подтверждение почты</label>*/}
                                    {/*    <input type="email" id='email2' className="form-control "/>*/}
                                    {/*</div>*/}

                                </div>

                                <div className="columnWrap d-flex align-items-center justify-content-between">

                                    <div className="wrap mr-2">
                                        <label htmlFor="password2">Подтверждение пароля</label>
                                        <div className="inputWrap">
                                            <AvInput type={passwordShown2 ? 'text' : 'password'} id='password2' name="rePassword" required validate={{match:{value:'password'}}}/>
                                            <div className='miniEye ' onClick={() => {
                                                setPasswordShown2(!passwordShown2)
                                            }}><img src="/assets/icon/miniEye.svg" alt=""/></div>
                                        </div>
                                    </div>

                                    {/*<div className="wrap">*/}
                                    {/*    <label htmlFor="number2">Подтверждение Телефона</label>*/}
                                    {/*    <input type="number" id='number2' className="form-control "/>*/}
                                    {/*</div>*/}

                                </div>

                                <div className="d-flex align-items-center mb-2 mt-3">
                                    <input type="checkbox" id="agree"/>
                                    <label className='m-0 mx-2' htmlFor="agree">Я даю согласие на обработку
                                        данных</label>
                                </div>

                                <div className="d-flex align-items-center">
                                    <input type="checkbox" id="understand"/>
                                    <label className='m-0 mx-2' htmlFor="understand">Я принимаю условия и
                                        положения</label>
                                </div>


                                <div className="d-flex align-items-center justify-content-center btnWrap">
                                    <a>
                                        <button type="submit" className="btn nyBtn blue" disabled={props.isLoading}>
                                            {props.isLoading && <span className="spinner-border spinner-border-sm"/>}
                                            Регистрация
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </AvForm>
                        <div className="right">
                            <i><img src="/assets/image/pure.png" alt=""/></i>

                            <h5><span className="square"></span> Один аккаунт для всех компаний</h5>
                            <h5><span className="square"></span> Единая финансовая система</h5>
                            <h5><span className="square"></span> ID для всех мероприятий компании</h5>
                            <h5><span className="square"></span> Единая партнерская сеть</h5>
                            <h5><span className="square"></span> Система лояльности бонусы и скидки</h5>
                        </div>
                    </div>

                </div>
            </LeftLayout>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.auth.isLoading
    }
}

export default connect(mapStateToProps, {register})(SignIn)
