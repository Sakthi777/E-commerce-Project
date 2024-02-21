import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>
        <div className='office-discount'>
                <div className='discount'>
                    <div className='image'>
                        <img src={"icons/shopping.png"} alt='' />
                        <div className='percent'>
                            <div className='geting'>
                                <h3>Get 20% Discount For Subscriber</h3>
                                <p>Lorem ipsum dolor consectetur adipisicing accusantium</p>
                            </div>
                            <div className='subscribe'>
                                <input type='text' placeholder='Enter Your Email Address' />
                                <button class="sub-button">
                                    @ Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='office-delivary'>
                <div className='delivary'>
                    <div className='del-title'>
                        <div className='del'>
                            <div className='home'>
                                <h4>Free Home Delivery</h4>
                                <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                            </div>
                        </div>
                        <div className='del'>
                            <div className='return'>
                                <h4>Instant Return Policy</h4>
                                <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                            </div>
                        </div>
                        <div className='del'>
                            <div className='support'>
                                <h4>Quick Support System</h4>
                                <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                            </div>
                        </div>
                        <div className='del'>
                            <div className='payment'>
                                <h4>Secure Payment Way</h4>
                                <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
      <div className='footer'>
            <div className='footer-part'>
                <div className='footer_box_social'>
                    <div className='footer-logo'>
                        <img src={"icons/grocery-logo.png"} alt='' height={"100px"} width={250} />
                    </div>
                    <div className='text'>
                        <p className='footer-desc'>Adipisci asperiores ipsum ipsa repellat consequatur repudiandae quisquam assumenda dolor perspiciatis sit ipsum dolor amet.</p>
                    </div>
                    <div className='footer_social'>
                        {/* <ul>
                            <div className='google'>
                                <li> <a href='...'>
                                    <img src={"icons/Google-Logo.jpg"} alt='' />
                                </a></li>
                            </div>
                            <div className='facebook'>
                                <li><a href='#'>
                                    <img src={"icons/Facebook_Logo.png"} alt='' />
                                </a></li>
                            </div>
                            <div className='insta'>
                                <li><a href='#'>
                                    <img src={"icons/insta-logo.png"} alt='' />
                                </a></li>
                            </div>
                            <div className='twitter'>
                                <li><a href='#'>
                                    <img src={"icons/Logo_Twitter.png"} alt='' />
                                </a></li>
                            </div>
                        </ul> */}
                    </div>
                </div>
            </div>
            <div className='footer-part '>
                <h3 className='footer-title'>Contact Us</h3>
                <div className='footer-contact'>
                   
                        <li>
                            <p>
                                support@example.com<br />
                                carrer@example.com
                            </p>
                        </li>
                        <br/>
                        <li>
                            <p>
                                <span>+120 279 532 13</span><br />
                                <span>+120 279 532 14</span>
                            </p>
                        </li>
                        <br/>
                        <li>
                            <p>1Hd- 50, 010 Avenue,
                                <br />United States</p>
                        </li>
                   
                </div>

            </div>
            <div className='footer-part link'>
                <h3 className='footer-title link1'>Quick Links</h3>
                <div className='footer-links'>
                    <div className='table'>
                        <tr>
                            <td>

                                <a href='...' >My&nbsp;&nbsp;Account</a>
                            </td>

                            <td>

                                <a href='...' >Location</a>
                            </td></tr>
                        <tr>
                            <td>

                                <a href='...' >Order&nbsp;&nbsp;History</a>
                            </td>
                            <td>

                                <a href='...' >Affiliates</a>

                            </td>
                        </tr>
                        <tr>
                            <td>

                                <a href='...' >Order&nbsp;&nbsp;Tracking</a>
                            </td>
                            <td>


                                <a href='...' >Contact</a>
                            </td>
                        </tr>
                        <tr>
                            <td>

                                <a href='...' >Best Seller</a>
                            </td>
                            <td>

                                <a href='...' >Carrer</a>
                            </td>
                        </tr>
                        <tr><td>

                            <a href='...' >New Arrivals</a>
                        </td>
                            <td>

                                <a href='...' >Faq</a>
                            </td></tr>

                    </div>

                </div>
            </div>
            <div className='footer-part' >
                <div className='app'>
                    <h3 className='footer-title'>Download App</h3>
                    <p className='footer-desc'>Lorem ipsum dolor sit amet tenetur dignissimos ipsum eligendi autem obcaecati minus ducimus totam reprehenderit exercitationem!</p>
                    <div className='footer-app'>
                        <a href='...'>
                            <img src={"icons/app-store.png"} alt='' />
                        </a>
                        <a href='...'>
                            <img src={"icons/google-store.png"} alt='' />
                        </a>

                    </div>
                </div>

            </div>
            
            </div>
            <div className='coder'>
                <p className='copytext'>© All Copyrights Reserved by 
                <a href='...'> Mironcoder</a>
                </p>
                <div className='coder-card'>
                    <a href='...'>
                        <img src={"icons/visa.jpg"} alt=''/>
                    </a>
                    <a href='...'>
                        <img src={"icons/paypal.jpg"} alt=''/>
                    </a>
                    <a href='...'>
                        <img src={"icons/maestro.jpg"} alt=''/>
                    </a>
                    <a href='...'>
                        <img src={"icons/discover.jpg"} alt=''/>
                    </a>

                </div>

            </div>
    </div>
  )
}
