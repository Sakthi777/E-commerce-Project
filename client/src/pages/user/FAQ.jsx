import React from "react";
import '../../styles/user/FAQ.css'
import faqimg from '../../../src/assets/images/contactus-image/back-faq.jpg';


export default function FAQ() {
  return (
    <div>
      <div className="faq">
        <div>
          <div className="faqback">
            <img
              src={faqimg}
              alt=""
              width={"100%"}
              height={"350px"}
            />
            <div class="faq-title">FAQ QUESTIONS</div>
            <div className="offers-banner-anchors">
						<p>
							<a href="/">Home</a> / FAQ
						</p>
					</div>
          </div>
        </div>
        <div className="faq-body">
          <div className="faq-body-part">
            <div className="ques-ans">
              <div className="faq-ques">
                <button className="faqbtn">How to contact with Customer Service?</button>
              </div>
              <div className="faq-ans">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, repellendus ducimus? Culpa tempore saepe fuga
                  excepturi eius! Nulla quam, minus, id ipsa ad distinctio rem
                  nihil voluptatem eaque quaerat recusandae?
                </p>
              </div>
            </div>
            <div className="ques-ans">
              <div className="faq-ques">
                <button className="faqbtn">App installation failed, how to update system information?</button>
              </div>
              <div className="faq-ans">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, repellendus ducimus? Culpa tempore saepe fuga
                  excepturi eius! Nulla quam, minus, id ipsa ad distinctio rem
                  nihil voluptatem eaque quaerat recusandae?
                </p>
              </div>
            </div>
            <div className="ques-ans">
              <div className="faq-ques">
                <button className="faqbtn">Website reponse taking time, how to improve?</button>
              </div>
              <div className="faq-ans">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, repellendus ducimus? Culpa tempore saepe fuga
                  excepturi eius! Nulla quam, minus, id ipsa ad distinctio rem
                  nihil voluptatem eaque quaerat recusandae?
                </p>
              </div>
            </div>
            <div className="ques-ans">
              <div className="faq-ques">
                <button className="faqbtn">How do I create a account?</button>
              </div>
              <div className="faq-ans">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, repellendus ducimus? Culpa tempore saepe fuga
                  excepturi eius! Nulla quam, minus, id ipsa ad distinctio rem
                  nihil voluptatem eaque quaerat recusandae?
                </p>
              </div>
            </div>
            <div className="ques-ans">
              <div className="faq-ques">
                <button className="faqbtn">I cannot find an answer to my question!</button>
              </div>
              <div className="faq-ans">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, repellendus ducimus? Culpa tempore saepe fuga
                  excepturi eius! Nulla quam, minus, id ipsa ad distinctio rem
                  nihil voluptatem eaque quaerat recusandae?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
