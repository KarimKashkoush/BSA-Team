import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { insert } from "../../state/rejesterSlice";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
// import moment from 'moment';
// import Swal from "Swal"
export default function ScientificDayForm() {
      const navigate = useNavigate();
      const scriptURL = "https://script.google.com/macros/s/AKfycbzoWz3vSMAOia92j5DjBf5izL9c7kcI5r4bAbgGTWwB2p3zvaMjXYl7RebmHzH2wwSB/exec";
      const dispatch = useDispatch();
      const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
      } = useForm();


      const onSubmit = async (data) => {
            const hasErrors = Object.keys(errors).length > 0;
            if (hasErrors) {
                  return;
            }

            try {
                  Swal.fire({
                        title: "Loading...",
                        text: "Please wait a moment",
                        allowOutsideClick: false, // لا يمكن إغلاق المودال عند النقر خارجها
                        showConfirmButton: false, // لا يظهر زر "موافق"
                        willOpen: () => {
                              Swal.showLoading(); // تظهر الأيقونة المتحركة الخاصة بالتحميل
                        },
                  });

                  const formData = new FormData();

                  Object.keys(data).forEach(key => {
                        formData.append(key, data[key]);
                  });

                  const currentDate = new Date();
                  const dateString = currentDate.toLocaleDateString('en-GB');
                  const timeString = currentDate.toLocaleTimeString('en-GB', { hour12: true });

                  const dateTimeString = `${dateString} - ${timeString}`;

                  formData.append('time', dateTimeString);

                  await fetch(scriptURL, {
                        method: "POST",
                        body: formData,
                  })
                        .then(() => {
                              Swal.fire({
                                    position: "center-center",
                                    icon: "success",
                                    title: "Your Data has been saved",
                                    showConfirmButton: false,
                                    timer: 1500
                              });
                              dispatch(insert(data));
                              navigate("/");
                        })
                        .catch(() => {
                              Swal.fire({
                                    position: "center-center",
                                    icon: "error",
                                    title: "Oops...",
                                    text: "Something went wrong!",
                              });
                        });
            } catch (err) {
                  if (err) {
                        Swal.fire({
                              position: "center-center",
                              icon: "error",
                              title: "Oops...",
                              text: "Something went wrong!",
                        });
                  }
            }
      };



      return (
            <section className="scientific-day-form">
                  <section className="container">
                        <form onSubmit={handleSubmit(onSubmit)} name="form-contact">
                              <section className="inputs">
                                    {/* Name in Arabic */}
                                    <section className="input-control">
                                          <label htmlFor="nameAr">Enter your full name in Arabic <span>*</span></label>
                                          <input
                                                name="nameAr"
                                                type="text"
                                                id="nameAr"
                                                {...register("nameAr", {
                                                      required: "This field is required",
                                                      pattern: {
                                                            value: /^[\u0600-\u06FF\s]+$/,
                                                            message: "Name must be in Arabic",
                                                      },
                                                })}
                                                placeholder="Enter Your Name in Arabic"
                                          />
                                          {errors.nameAr && <span className="error-message">{errors.nameAr.message}</span>}
                                    </section>

                                    {/* Name in English */}
                                    <section className="input-control">
                                          <label htmlFor="nameEn">Enter your full name in English <span>*</span></label>
                                          <input
                                                type="text"
                                                id="nameEn"
                                                name="nameEn"
                                                {...register("nameEn", {
                                                      required: "This field is required",
                                                      pattern: {
                                                            value: /^[a-zA-Z\s]+$/,
                                                            message: "Name must be in English",
                                                      },
                                                })}
                                                placeholder="Enter Your Name in English"
                                          />
                                          {errors.nameEn && <span className="error-message">{errors.nameEn.message}</span>}
                                    </section>

                                    {/* Age */}
                                    <section className="input-control">
                                          <label htmlFor="age">Enter your age <span>*</span></label>
                                          <input
                                                name="age"
                                                type="number"
                                                id="age"
                                                {...register("age", {
                                                      required: "This field is required",
                                                      min: {
                                                            value: 18,
                                                            message: "Age must be at least 18",
                                                      },
                                                      max: {
                                                            value: 99,
                                                            message: "Age must be less than 99",
                                                      },
                                                })}
                                                placeholder="Enter Your Age"
                                          />
                                          {errors.age && <span className="error-message">{errors.age.message}</span>}
                                    </section>

                                    {/* Email */}
                                    <section className="input-control">
                                          <label htmlFor="email">Enter your Email <span>*</span></label>
                                          <input
                                                type="email"
                                                id="email"
                                                {...register("email", {
                                                      required: "This field is required",
                                                      pattern: {
                                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                            message: "Invalid email address",
                                                      },
                                                })}
                                                placeholder="Enter Your Email"
                                          />
                                          {errors.email && <span className="error-message">{errors.email.message}</span>}
                                    </section>

                                    {/* Phone */}
                                    <section className="input-control">
                                          <label htmlFor="phone">Enter your phone number <span>*</span></label>
                                          <input
                                                type="tel"
                                                id="phone"
                                                {...register("phone", {
                                                      required: "This field is required",
                                                      pattern: {
                                                            value: /^[0-9]{10,15}$/,
                                                            message: "Phone number must be 10-15 digits",
                                                      },
                                                })}
                                                placeholder="Enter Your Phone Number"
                                          />
                                          {errors.phone && <span className="error-message">{errors.phone.message}</span>}
                                    </section>

                                    {/* National ID */}
                                    <section className="input-control">
                                          <label htmlFor="nationalId">Enter your National ID <span>*</span></label>
                                          <input
                                                type="text"
                                                id="nationalId"
                                                {...register("nationalId", {
                                                      required: "This field is required",
                                                      pattern: {
                                                            value: /^[0-9]{14}$/,
                                                            message: "National ID must be 14 digits",
                                                      },
                                                })}
                                                placeholder="Enter Your National ID"
                                          />
                                          {errors.nationalId && <span className="error-message">{errors.nationalId.message}</span>}
                                    </section>

                                    {/* University */}
                                    <section className="input-control">
                                          <label htmlFor="university">University / Institute Name <span>*</span></label>
                                          <select
                                                id="university"
                                                {...register("university", {
                                                      required: "This field is required",
                                                })}
                                          >
                                                <option value="">
                                                      Select University / Institute Name
                                                </option>
                                                <option value="Mansoura University">Mansoura University</option>
                                                <option value="Mansoura National University">Mansoura National University</option>
                                                <option value="Beni Suef University">Beni Suef University</option>
                                                <option value="Alexandria University">Alexandria University</option>
                                                <option value="Menoufia University">Menoufia University</option>
                                                <option value="Higher Technological Institute">Higher Technological Institute</option>
                                                <option value="Egypt-Japan University">Egypt-Japan University</option>
                                                <option value="Health Technical Institute">Health Technical Institute</option>
                                                <option value="Minia University">Minia University</option>
                                                <option value="Tenth of Ramadan Institute">Tenth of Ramadan Institute</option>
                                                <option value="October 6 University">October 6 University</option>
                                                <option value="Other">Other</option>
                                          </select>
                                          {errors.university && <span className="error-message">{errors.university.message}</span>}
                                          <input
                                                placeholder="Enter University Name"
                                                type="text"
                                                name="universityOther"
                                                id="university-input"
                                                className={`input-hidden ${watch("university") === "Other" ? "" : "hidden"}`}
                                                {...register("universityOther", {
                                                      required: watch("university") === "Other" && "Please specify the university",
                                                })}
                                          />
                                          {errors.universityOther && <span className="error-message">{errors.universityOther.message}</span>}
                                    </section>

                                    <section className="input-control ">
                                          <label htmlFor="faculty">Faculty Name <span>*</span></label>
                                          <select
                                                id="faculty"
                                                {...register("faculty", {
                                                      required: "This field is required",
                                                })}
                                          >
                                                <option value="">
                                                      Select Faculty Name
                                                </option>
                                                <option value="Faculty of Engineering">Faculty of Engineering</option>
                                                <option value="Faculty of Applied Medical Sciences">Faculty of Applied Medical Sciences</option>
                                                <option value="Other">Other</option>
                                          </select>
                                          {errors.faculty && <span className="error-message">{errors.faculty.message}</span>}
                                          <input
                                                placeholder="Enter Faculty Name"
                                                type="text"
                                                name="facultyOther"
                                                id="faculty-input"
                                                className={`input-hidden ${watch("faculty") === "Other" ? "" : "hidden"}`}
                                                {...register("facultyOther", {
                                                      required: watch("faculty") === "Other" && "Please specify the faculty",
                                                })}
                                          />
                                          {errors.facultyOther && <span className="error-message">{errors.facultyOther.message}</span>}
                                    </section>

                                    <section className="input-control">
                                          <label htmlFor="major">Major Name <span>*</span></label>
                                          <select
                                                id="major"
                                                {...register("major", {
                                                      required: "This field is required",
                                                })}
                                          >
                                                <option value="">
                                                      Select Major Name
                                                </option>
                                                <option value="Biomedical Engineering">Biomedical Engineering</option>
                                                <option value="Other">Other</option>
                                          </select>
                                          {errors.major && <span className="error-message">{errors.major.message}</span>}
                                          <input
                                                placeholder="Enter Major Name"
                                                type="text"
                                                name="majorOther"
                                                id="major-input"
                                                className={`input-hidden ${watch("major") === "Other" ? "" : "hidden"}`}
                                                {...register("majorOther", {
                                                      required: watch("major") === "Other" && "Please specify the major",
                                                })}
                                          />
                                          {errors.majorOther && <span className="error-message">{errors.majorOther.message}</span>}
                                    </section>

                                    <section className="input-control level">
                                          <label htmlFor="level">Academic Level <span>*</span></label>
                                          <select
                                                id="level"
                                                {...register("level", {
                                                      required: "This field is required",
                                                })}
                                          >
                                                <option value="">
                                                      Select Academic Level
                                                </option>
                                                <option value="Lv000 (Preparatory Level)">Lv000 (Preparatory Level)</option>
                                                <option value="Lv100 (First Year)">Lv100 (First Year)</option>
                                                <option value="Lv200 (Second Year)">Lv200 (Second Year)</option>
                                                <option value="Lv300 (Third Year)">Lv300 (Third Year)</option>
                                                <option value="Lv400 (Fourth Year)">Lv400 (Fourth Year)</option>
                                                <option value="Graduate">Graduate</option>
                                          </select>
                                          {errors.level && <span className="error-message">{errors.level.message}</span>}
                                    </section>

                                    {/* Comments */}
                                    <section className="input-control">
                                          <label htmlFor="comments">Any comments</label>
                                          <input
                                                {...register("comments")}
                                                type="text"
                                                id="comments"
                                                placeholder="Any comments"
                                          />
                                          {errors.comments && <span className="error-message">{errors.comments.message}</span>}
                                    </section>
                              </section>

                              {/* Submit */}
                              <button type="submit">
                                    Send <span> <i className="fa-solid fa-arrow-right"></i></span>
                              </button>
                        </form>

                  </section>
            </section>
      );
}
