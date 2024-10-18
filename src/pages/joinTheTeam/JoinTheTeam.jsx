import './joinTheTeam.css'

import { useState } from "react";
export default function MyForm() {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [whatsapp, setWhatsapp] = useState("");


      const [whatsappError, setWhatsappError] = useState("");
      const [nameError, setNameError] = useState("");
      const [emailError, setEmailError] = useState("");

      const handleNameChange = (e) => {
            const newName = e.target.value;
            setName(newName);


            if (newName.trim() === "") {
                  setNameError("الاسم مطلوب");
            } else if (newName.trim().length < 3) {
                  setNameError("أدخل الاسم رباعي بشكل صحيح")
            } else {
                  setNameError("");
            }
      };

      const handleEmailChange = (e) => {
            const newEmail = e.target.value;
            setEmail(newEmail);


            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (newEmail.trim() === "") {
                  setEmailError("البريد الإلكتروني مطلوب");
            } else if (!emailPattern.test(newEmail)) {
                  setEmailError("البريد الإلكتروني غير صالح");
            } else {
                  setEmailError("");
            }
      };

      const handleWhatsappChange = (e) => {
            const newWhatsapp = e.target.value;

            // إذا كان الإدخال يتكون من أرقام فقط، قم بتحديث الحالة
            if (/^\d*$/.test(newWhatsapp)) {
                  // قطع الرقم إلى 11 رقم
                  const formattedWhatsapp = newWhatsapp.slice(0, 11);
                  setWhatsapp(formattedWhatsapp);

                  // التحقق من صحة الرقم
                  if (formattedWhatsapp.trim() === "") {
                        setWhatsappError("رقم واتساب مطلوب");
                  } else if (formattedWhatsapp.length < 10) {
                        setWhatsappError("رقم واتساب يجب أن يكون على الأقل 10 أرقام");
                  } else {
                        setWhatsappError("");
                  }
            }
      };

      const handleSubmit = (e) => {
            e.preventDefault();
      };


      return (
            <section className="join">
                  <section className="container">
                        <section className="section-header">
                              <h2>Join the BSA family</h2>
                        </section>

                        <section className="form">
                              <form onSubmit={handleSubmit}>

                                    <section className="form-control">
                                          <input
                                                type="text"
                                                placeholder="الاسم"
                                                value={name}
                                                onChange={handleNameChange}
                                          />
                                          {nameError && <span className="errorMessage">{nameError}</span>}
                                    </section>

                                    <section className="form-control">
                                          <input
                                                type="email"
                                                placeholder="البريد الإلكتروني"
                                                value={email}
                                                onChange={handleEmailChange}
                                          />
                                          {emailError && <span className="errorMessage">{emailError}</span>}
                                    </section>

                                    <section className="form-control">
                                          <input
                                                type="text"
                                                placeholder="Whatsapp numper"
                                                value={whatsapp}
                                                onChange={handleWhatsappChange}
                                          />
                                          {whatsappError && <span className="errorMessage">{whatsappError}</span>}
                                    </section>

                                    <button type="submit">إرسال</button>
                              </form>
                        </section>
                  </section>
            </section>
      );
}
