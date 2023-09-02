import React from 'react'
import warning from '../ContactUs/warningIcon.png'
import check from '../ContactUs/tick 1.png'
import stylesContact from './ContactUs.module.css'

function ContactUs() {
  return (
    <section className={stylesContact.sec}>
      <div className={stylesContact.container}>
        <h2 className={stylesContact.title}>How can we help?</h2>
        <form className={stylesContact.frm}>
          <div className={stylesContact.row}>
            <div className={stylesContact.content}>
              <div className={stylesContact.inputDiv}>
                <input className={stylesContact.field} type="text" required />
                <span className={stylesContact.placehld}>First Name*</span>
              </div>
              <div className={stylesContact.warn}>
                <img className={stylesContact.image} src={warning} />
                <span className={stylesContact.err}>Sorry, You've entered incorrect data.</span>
              </div>
            </div>
            <div className={stylesContact.content}>
              <div className={stylesContact.inputDiv}>
                <input className={stylesContact.field} type="text" required />
                <span className={stylesContact.placehld}>Last Name*</span>
              </div>
              <div className={stylesContact.warn} >
                <img className={stylesContact.image} src={warning} />
                <span className={stylesContact.err}>Sorry, You've entered incorrect data.</span>
              </div>
            </div>
          </div>
          <div className={stylesContact.row}>
            <div className={stylesContact.content}>
              <div className={stylesContact.inputDiv}>
                <input className={stylesContact.fieldEmail} type="text" required />
                <span className={stylesContact.placehld}>Email*</span>
              </div>
              <div className={stylesContact.warn}>
                <img className={stylesContact.image} src={warning} />
                <span className={stylesContact.err}>Sorry, You've entered incorrect data.</span>
              </div>
            </div>
            <div className={stylesContact.content}>
              <div>
                <select data-te-select-init>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="America">America</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Japan">Japan</option>
                  <option value="India">India</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="France">France</option>
                </select>
                <label data-te-select-label-ref>Country*</label>
              </div>
              <div className={stylesContact.warn}>
                <img className={stylesContact.image} src={warning} />
                <span className={stylesContact.err}>Sorry...</span>
              </div>
            </div>
          </div>
          <div className={stylesContact.txtarea}>
            <div className={stylesContact.inputDivTxt}>
              <textarea className={stylesContact.msg} required />
              <span className={stylesContact.placehld}>Massage*</span>
            </div>
            <div className={stylesContact.warn} >
              <img className={stylesContact.image} src={warning} />
              <span className={stylesContact.err}>Sorry, You've entered incorrect data.</span>
            </div>
          </div>
          <div className={stylesContact.check}>
            <div className={stylesContact.checkbox}>
              <input className={stylesContact.cbox} type="checkbox" />
              <img className={stylesContact.tick} src={check} />
            </div>
            <label className={stylesContact.lbl}>I have read and accept the Legal Notice and the Privacy Policy.</label>
          </div>
          <div className={stylesContact.btn}>
            <button className={stylesContact.bttn} type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactUs