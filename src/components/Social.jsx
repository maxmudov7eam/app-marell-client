import React from 'react'
import { connect } from 'react-redux'
import { login, updateState } from '../redux/action/statesAction'

const Social = (props) => {
    return (
        <>
            <div className={`social ${props.states ? 'actived' : ''}`}>
                <div className="container">
                    <div className="row  myRow">
                        <div className="col-md-8">
                            <div className="myRadius">
                                <p><strong>MARELL</strong> – цифровая экосистема, адаптированная  под формат современной жизни.</p>
                                <p className='margin'>В ней вы найдете <strong className='pink'>ОДЕЖДУ</strong>, в которой удобно захватывать мир. </p>
                                <p><strong className='blue'>ЕДУ</strong> для поддержания физического тела в идеальном состоянии.</p>
                                <p>И <strong className='light'>ИГРЫ</strong> для развития вашего разума и финансовой грамотности.</p>
                                <p className='margin'>Главной особенностью экосистемы стала возможность зарабатывать на ней!</p>
                                <p className='margin'><strong>MARELL</strong> – неугасаемый источник вдохновения и стимул для твоего совершенствования. Время идет.</p>
                            </div>
                        </div>

                        <div className="col-md-4 rightLogo d-flex justify-content-end">
                            <i><img src="/assets/image/circleLogo.png" alt="" /></i>
                        </div>
                    </div>

                    <div className="row mobileRow">
                        <div className="col-12 text-center">
                            <h6>КОНТАКТЫ</h6>
                        </div>
                        <div className="col-12 d-flex align-items-center justify-content-between sociality">
                            <a className='d-flex align-items-center' target='_blank' href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=marta@marell.store">
                                <i className='mr-lg-4'><img src="/assets/icon/email.svg" alt="" /></i>
                                <p>Info@marell.com</p>
                            </a>

                            <a className='d-flex align-items-center' target='_blank' href="https://t.me/MARELL_shop"><i className='mr-lg-4'><img src="/assets/icon/tg.svg" alt="" /></i>
                                <p>@marell</p>
                            </a>

                            <a className='d-flex align-items-center' target='_blank' href="https://instagram.com/m.a.r.e.l.l?utm_medium=copy_link"><i className='mr-lg-4'><img src="/assets/icon/insta.svg" alt="" /></i>
                                <p>@M.A.R.E.L.L</p>
                            </a>

                            <a className='d-flex align-items-center' target='_blank' href="tel: +79253487408"><i className='mr-lg-4'><img src="/assets/icon/phone.svg" alt="" /></i>
                                <p>+7 925 348 47 08</p>
                            </a>
                        </div>
                    </div>

                    <div onClick={(e) => {props.updateState({ show: false }); e.stopPropagation()}} className={`logo eye cursor ${props.states ? 'trans' : ''}`}>
                        {/* <img src="/assets/image/eye.png" alt=""/> */}
                        <div className="eyeWrap position-relative ">

                            <div className="eye1 position-absolute">
                                <img src="/assets/image/line/eye1.svg" alt="" />
                                <img src="/assets/image/line/eye2.svg" alt="" />
                            </div>

                            <div className="eye2 position-absolute">
                                <img src="/assets/image/line/eye3.svg" alt="" />
                                <img src="/assets/image/line/eye4.svg" alt="" />
                            </div>

                            <div className="eye3 position-absolute">
                                <img src="/assets/image/line/eye5.png" alt="" />
                                <img src="/assets/image/line/eye6.png" alt="" />
                            </div>

                            <div className="eye4 position-absolute">
                                <img src="/assets/image/line/eye7.png" alt="" />
                                <img src="/assets/image/line/eye8.png" alt="" />
                            </div>

                            <div className="eye5 position-absolute">
                                <img src="/assets/image/line/eye9.png" alt="" />
                                <img src="/assets/image/line/eye10.png" alt="" />
                            </div>

                            <div className="eye6 position-absolute">
                                <img src="/assets/image/line/eye11.png" alt="" />
                                <img src="/assets/image/line/eye12.png" alt="" />
                            </div>

                            <div className="eye7 position-absolute">
                                <img src="/assets/image/line/eye13.png" alt="" />
                                <img src="/assets/image/line/eye14.png" alt="" />
                            </div>

                            <div className="eye8 position-absolute">
                                <img src="/assets/image/line/eye15.png" alt="" />
                                <img src="/assets/image/line/eye16.png" alt="" />
                            </div>

                            <div className="eye9 position-absolute">
                                <img src="/assets/image/line/eye17.png" alt="" />
                                <img src="/assets/image/line/eye18.png" alt="" />
                            </div>

                            <div className="eye10 position-absolute">
                                <img src="/assets/image/line/eye19.png" alt="" />
                                <img src="/assets/image/line/eye20.png" alt="" />
                            </div>

                            <div className="eye11 position-absolute">
                                <img src="/assets/image/line/eye21.png" alt="" />
                                <img src="/assets/image/line/eye22.png" alt="" />
                            </div>

                            <div className="eye12 position-absolute">
                                <img src="/assets/image/line/eye25.png" alt="" />
                                <img src="/assets/image/line/eye26.png" alt="" />
                            </div>

                            <div className="eye13 position-absolute">
                                <img src="/assets/image/line/eye23.png" alt="" />
                                <img src="/assets/image/line/eye24.png" alt="" />
                            </div>

                            <div className="eye14 position-absolute">
                                <img src="/assets/image/line/eye25.png" alt="" />
                                <img src="/assets/image/line/eye26.png" alt="" />
                            </div>

                            <div className="eye18 position-absolute">
                                <img src="/assets/image/line/eye35.png" alt="" />
                                <img src="/assets/image/line/eye36.png" alt="" />
                            </div>

                            <div className="eye19 position-absolute">
                                <img src="/assets/image/line/eye37.png" alt="" />
                                <img src="/assets/image/line/eye38.png" alt="" />
                            </div>

                            <div className="eye20 position-absolute">
                                <img src="/assets/image/line/eye39.png" alt="" />
                                <img src="/assets/image/line/eye40.png" alt="" />
                            </div>

                            <div className="eye21 position-absolute">
                                <img src="/assets/image/line/eye41.png" alt="" />
                                <img src="/assets/image/line/eye42.png" alt="" />
                            </div>

                            <div className="eye22 position-absolute">
                                <img src="/assets/image/line/eye43.png" alt="" />
                                <img src="/assets/image/line/eye44.png" alt="" />
                            </div>

                            <div className="eye23 position-absolute">
                                <img src="/assets/image/line/eye45.png" alt="" />
                                <img src="/assets/image/line/eye46.png" alt="" />
                            </div>

                            <div className="eye24 position-absolute">
                                <img src="/assets/image/line/eye47.png" alt="" />
                                <img src="/assets/image/line/eye48.png" alt="" />
                            </div>

                            <div className="eye25 position-absolute">
                                <img src="/assets/image/line/eye49.png" alt="" />
                                <img src="/assets/image/line/eye50.png" alt="" />
                            </div>

                            <div className="eye26 position-absolute">
                                <img src="/assets/image/line/eye51.png" alt="" />
                                <img src="/assets/image/line/eye52.png" alt="" />
                            </div>

                            <div className="eye27 position-absolute">
                                <img src="/assets/image/line/eye53.png" alt="" />
                                <img src="/assets/image/line/eye54.png" alt="" />
                            </div>

                            <div className="eye28 position-absolute">
                                <img src="/assets/image/line/eye55.png" alt="" />
                                <img src="/assets/image/line/eye56.png" alt="" />
                            </div>

                            <div className="eye29 position-absolute">
                                <img src="/assets/image/line/eye57.png" alt="" />
                                <img src="/assets/image/line/eye58.png" alt="" />
                            </div>

                            <div className="eye30 position-absolute">
                                <img src="/assets/image/line/eye59.png" alt="" />
                                <img src="/assets/image/line/eye60.png" alt="" />
                            </div>

                            <div className="eye31 position-absolute">
                                <img src="/assets/image/line/eye61.png" alt="" />
                                <img src="/assets/image/line/eye62.png" alt="" />
                            </div>

                            <div className="eye32 position-absolute">
                                <img src="/assets/image/line/eye63.png" alt="" />
                                <img src="/assets/image/line/eye64.png" alt="" />
                            </div>


                            {/* <img className='eyeAll' src="/assets/image/line/eyeAll.png" alt=""/> */}
                            <img className='uch' src="/assets/image/uchburche.png" alt="" />
                            <img className='eyes' src="/assets/image/eyes.png" alt="" />
                        </div>

                    </div>
                </div>

            </div>



        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        states: state.states.show
    }
}

export default connect(mapStateToProps, { login, updateState })(Social)
