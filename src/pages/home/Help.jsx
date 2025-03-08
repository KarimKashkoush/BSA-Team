import { useState, useEffect, useRef } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box } from '@mui/material';

const pData = [400, 420, 450, 570];
const uData = [150, 180, 200, 240];
const xLabels = ['4th', '5th', '6th', '7th'];

const ppData = [800];
const uuData = [400];
const xxLabels = ['8th'];

const bioData = [200, 350];
const bioLabels = ['2024', '2025'];

export default function Help() {
      const [count, setCount] = useState(0);
      const [isInView, setIsInView] = useState(false); // لتحديد ما إذا كان العنصر في العرض
      const targetRef = useRef(null); // استخدام المرجع لمراقبة العنصر الذي يحتوي على الرقم

      useEffect(() => {
            // إنشاء Intersection Observer لمراقبة التمرير
            const observer = new IntersectionObserver(
                  (entries) => {
                        entries.forEach((entry) => {
                              if (entry.isIntersecting) {
                                    setIsInView(true); // إذا كان العنصر في العرض، نبدأ العد
                              } else {
                                    setIsInView(false); // إذا لم يكن العنصر في العرض، نوقف العد
                              }
                        });
                  },
                  { threshold: 0.5 } // عندما يكون 50% من العنصر في العرض
            );

            if (targetRef.current) {
                  observer.observe(targetRef.current); // مراقبة العنصر
            }

            // تنظيف الـ observer عند مغادرة الصفحة
            return () => {
                  if (targetRef.current) {
                        observer.unobserve(targetRef.current);
                  }
            };
      }, []);

      useEffect(() => {
            if (isInView && count < 1980) {
                  const interval = setInterval(() => {
                        setCount((prevCount) => {
                              if (prevCount < 1980) {
                                    return Math.min(prevCount + 10, 1980); // زيادة العد ببطء حتى 1980
                              } else {
                                    clearInterval(interval); // إيقاف العداد عند الوصول إلى 1980
                                    return 1980;
                              }
                        });
                  }, 2); // تحديث العداد كل 20 ملي ثانية

                  return () => clearInterval(interval); // تنظيف الـ interval عند مغادرة العنصر
            }
      }, [isInView, count]);

      return (
            <section className="help">
                  <section className="container">
                        <section className="section-header">
                              <h2>What we have recently presented</h2>
                        </section>

                        <Box
                              sx={{
                                    marginBlock: '50px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    gap: 1,
                                    textAlign: 'center',
                              }}

                              className="counter"
                        >
                              <h2 ref={targetRef}>{count}</h2> 
                              <p>Who the team helped</p>
                        </Box>

                        <section className="sup-title">
                              <h3>Conferences</h3>
                              From 4th generation to 8th generation
                        </section>

                        {/* أول Box (المخطط الأول) */}
                        <Box
                              sx={{
                                    marginBottom: '50px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 3,
                                    '@media(min-width: 786px)': {
                                          flexDirection: 'row',
                                          gap: 3,
                                    },
                              }}
                        >
                              <Box
                                    sx={{
                                          flex: 0.5,
                                          minWidth: '300px',
                                          height: '400px',
                                    }}
                                    data-aos="zoom-in-up"
                              >
                                    <BarChart
                                          width={undefined}
                                          height={undefined}
                                          title="Registration and Audience"
                                          series={[
                                                {
                                                      data: ppData,
                                                      label: 'Registration',
                                                      id: 'pvId',
                                                      color: '#3492E0',
                                                },
                                                {
                                                      data: uuData,
                                                      label: 'Audience',
                                                      id: 'uvId',
                                                      color: '#02b2af',
                                                },
                                          ]}
                                          xAxis={[{ data: xxLabels, scaleType: 'band' }]}
                                          sx={{
                                                backgroundColor: '#f5f5f5',
                                                borderRadius: '8px',
                                                padding: '16px',
                                                width: '100%',
                                                height: '100%',
                                          }}
                                    />
                              </Box>

                              <Box
                                    sx={{
                                          flex: 1,
                                          minWidth: '300px',
                                          height: '400px',
                                    }}
                                    data-aos="zoom-in-up"
                              >
                                    <BarChart
                                          width={undefined}
                                          height={undefined}
                                          title="Registration and Audience"
                                          series={[
                                                {
                                                      data: pData,
                                                      label: 'Registration',
                                                      id: 'pvId',
                                                      color: '#3492E0',
                                                },
                                                {
                                                      data: uData,
                                                      label: 'Audience',
                                                      id: 'uvId',
                                                      color: '#02b2af',
                                                },
                                          ]}
                                          xAxis={[{ data: xLabels, scaleType: 'band' }]}
                                          sx={{
                                                backgroundColor: '#f5f5f5',
                                                borderRadius: '8px',
                                                padding: '16px',
                                                width: '100%',
                                                height: '100%',
                                          }}
                                    />
                              </Box>
                        </Box>

                        <section className="sup-title">
                              <h3>Bioverse</h3>
                              Summer 2024 and 2025
                        </section>

                        <Box
                              sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 3,
                                    '@media(min-width: 786px)': {
                                          flexDirection: 'row',
                                          gap: 3,
                                    },
                              }}
                        >
                              <Box
                                    sx={{
                                          flex: 1,
                                          minWidth: '300px',
                                          height: '400px',
                                    }}
                                    data-aos="zoom-in-up"
                              >
                                    <BarChart
                                          width={undefined}
                                          height={undefined}
                                          title="Registration and Audience"
                                          series={[
                                                {
                                                      data: bioData,
                                                      label: 'Audience',
                                                      id: 'uvId',
                                                      color: '#02b2af',
                                                },
                                          ]}
                                          xAxis={[{ data: bioLabels, scaleType: 'band' }]}
                                          sx={{
                                                backgroundColor: '#f5f5f5',
                                                borderRadius: '8px',
                                                padding: '16px',
                                                width: '100%',
                                                height: '100%',
                                          }}
                                    />
                              </Box>
                        </Box>
                  </section>
            </section>
      );
}
