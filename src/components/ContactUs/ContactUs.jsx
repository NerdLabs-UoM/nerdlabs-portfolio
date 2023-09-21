import React, { useEffect, useState } from "react";
import check from "../../assets/tick 1.png";
import downIcon from "../../assets/down-arrow.png";
import stylesContact from "./ContactUs.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerSchema } from "../../schema/formSchema";
function ContactUs() {
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(registerSchema),
  });
  console.log(errors);
  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <section className={stylesContact.sec}>
      <div className={stylesContact.container}>
        <h2 className={stylesContact.title}>How can we help?</h2>
        <form
          className={stylesContact.frm} onSubmit={handleSubmit(submitForm)}
        >
          <div className={stylesContact.row}>
            <div className={stylesContact.content}>
              <div className={stylesContact.inputDiv}>
                <input
                  className={stylesContact.field}
                  type="text"
                  name="firstname"
                  {...register("firstname")}
                  required
                />
                <span className={stylesContact.placehld}>First Name*</span>
              </div>
              <div className={stylesContact.warn}>
                {errors.firstname ? (
                  <span className={stylesContact.err}>
                    {errors.firstname.message}
                  </span>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className={stylesContact.content}>
              <div className={stylesContact.inputDiv}>
                <input
                  className={stylesContact.field}
                  type="text"
                  name="lastname"
                  {...register("lastname")}
                  required
                />
                <span className={stylesContact.placehld}>Last Name*</span>
              </div>
              <div className={stylesContact.warn}>
                {errors.lastname ? (
                  <span className={stylesContact.err}>
                    {errors.lastname.message}
                  </span>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className={stylesContact.row}>
            <div className={stylesContact.content}>
              <div className={stylesContact.inputDiv}>
                <input
                  className={stylesContact.fieldEmail}
                  type="text"
                  name="email"
                  {...register("email")}
                  required
                />
                <span className={stylesContact.placehld}>Email*</span>
              </div>
              <div className={stylesContact.warn}>
                {errors.email ? (
                  <span className={stylesContact.err}>
                    {errors.email.message}
                  </span>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className={stylesContact.content}>
              <div className={stylesContact.selectBox}>
                <div
                  onClick={() => setOpen(!open)}
                  className={stylesContact.selector}
                >
                  <span className={stylesContact.placehld}>
                    {selected ? selected : "Country*"}
                  </span>
                  <img className={stylesContact.downIcon} src={downIcon} />
                </div>
                <ul
                  className={` bg-purple-700 mt-1 ml-6 w-[350px] md:w-[180px] lg:w-[250px] overflow-y-auto z-[1] absolute ${open ? "max-h-48" : "max-h-0"
                    }`}
                >
                  {countries?.map((country) => (
                    <li
                      key={country?.name}
                      className={stylesContact.options}
                      onClick={() => {
                        if (country?.name !== selected) {
                          setSelected(country?.name);
                          setOpen(false);
                        }
                      }}
                    >
                      {country?.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={stylesContact.txtarea}>
            <div className={stylesContact.inputDivTxt}>
              <textarea
                className={stylesContact.msg}
                name="message"
                {...register("message")}
                required
              />
              <span className={stylesContact.placehld}>Message*</span>
            </div>
            <div className={stylesContact.warn}>
              {errors.message ? (
                <span className={stylesContact.err}>
                  {errors.message.message}
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className= {stylesContact.accept}>
            <div className={stylesContact.check}>
              <div className={stylesContact.checkbox}>
                <input className={stylesContact.cbox} type="checkbox" name="remember" value="" />
                <img className={stylesContact.tick} src={check} />
              </div>
              <label className={stylesContact.lbl}>
                I have read and accept the Legal Notice and the Privacy Policy.
              </label>
            </div>
            <div className={stylesContact.warn2}>
              {errors.remember ? (
                <span className={stylesContact.err}>
                  {errors.remember.message}
                </span>
              ) : (
                <></>
              )}
            </div>
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
