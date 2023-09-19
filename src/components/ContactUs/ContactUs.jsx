import React, { useEffect, useState } from "react";
import warning from "../../assets/warningIcon.png";
import check from "../../assets/tick 1.png";
import downIcon from "../../assets/down-arrow.png";
import stylesContact from "./ContactUs.module.css";
function ContactUs() {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState()
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
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
                <span className={stylesContact.err}>
                  Sorry, You've entered incorrect data.
                </span>
              </div>
            </div>
            <div className={stylesContact.content}>
              <div className={stylesContact.inputDiv}>
                <input className={stylesContact.field} type="text" required />
                <span className={stylesContact.placehld}>Last Name*</span>
              </div>
              <div className={stylesContact.warn}>
                <img className={stylesContact.image} src={warning} />
                <span className={stylesContact.err}>
                  Sorry, You've entered incorrect data.
                </span>
              </div>
            </div>
          </div>
          <div className={stylesContact.row}>
            <div className={stylesContact.content}>
              <div className={stylesContact.inputDiv}>
                <input
                  className={stylesContact.fieldEmail}
                  type="text"
                  required
                />
                <span className={stylesContact.placehld}>Email*</span>
              </div>
              <div className={stylesContact.warn}>
                <img className={stylesContact.image} src={warning} />
                <span className={stylesContact.err}>
                  Sorry, You've entered incorrect data.
                </span>
              </div>
            </div>
            <div className={stylesContact.content}>
              <div className={stylesContact.selectBox}>
                <div
                  onClick={() => setOpen(!open)}
                  className={stylesContact.selector}
                >
                  <span className={stylesContact.placehld}>Country*</span>
                  <img className={stylesContact.downIcon} src={downIcon} />
                </div>
                <ul
                  className={` bg-purple-700 mt-1 ml-6 w-[350px] md:w-[250px] overflow-y-auto z-[1] absolute ${
                    open ? "max-h-48" : "max-h-0"
                  }`}
                >
                  {countries?.map((country) => (
                    <li
                      key={country?.name}
                      className={stylesContact.options}
                      onClick={() => {
                        if (country?.name !== selected) setSelected();
                      }}
                    >
                      {country?.name}
                    </li>
                  ))}
                </ul>
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
            <div className={stylesContact.warn}>
              <img className={stylesContact.image} src={warning} />
              <span className={stylesContact.err}>
                Sorry, You've entered incorrect data.
              </span>
            </div>
          </div>
          <div className={stylesContact.check}>
            <div className={stylesContact.checkbox}>
              <input className={stylesContact.cbox} type="checkbox" />
              <img className={stylesContact.tick} src={check} />
            </div>
            <label className={stylesContact.lbl}>
              I have read and accept the Legal Notice and the Privacy Policy.
            </label>
          </div>
          <div className={stylesContact.btn}>
            <button className={stylesContact.bttn} type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
