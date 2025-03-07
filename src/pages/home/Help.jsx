import { BarChart } from '@mui/x-charts/BarChart';
import { Box } from '@mui/material'; // استيراد Box

const pData = [400, 420, 450, 570];
const uData = [150, 180, 200, 240];
const xLabels = ['4th', '5th', '6th', '7th'];

const ppData = [800];
const uuData = [400];
const xxLabels = ['8th'];

export default function Help() {
      return (
            <section className="help">
                  <section className="container">
                        <section className="section-header">
                              <h2>What we have recently presented</h2>
                        </section>

                        <section className="sup-title">
                              <h3>Conferences</h3>
                              From 4rd generation to 8th generation
                        </section>

                        {/* أول Box (المخطط الأول) */}
                        <Box
                              sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 3, // المسافة بين الأعمدة في الشاشات الصغيرة
                                    '@media(min-width: 786px)': {
                                          flexDirection: 'row', // في الشاشات الكبيرة، عرض الأعمدة بجانب بعض
                                          gap: 3, // المسافة بين الأعمدة في الشاشات الكبيرة
                                    },
                              }}
                        >
                              {/* المربع الأول */}
                              <Box
                                    sx={{
                                          flex: 0.5, // المربع الثاني يأخذ نصف عرض المربع الأول
                                          minWidth: '300px', // تحديد عرض الحد الأدنى للمربع الثاني
                                          height: '400px', // تحديد ارتفاع ثابت
                                    }}

                                    data-aos="zoom-in-up"
                              >
                                    <BarChart
                                          width={undefined} // إزالة العرض الثابت
                                          height={undefined} // إزالة الارتفاع الثابت
                                          title='Registration and Audience'
                                          series={[
                                                {
                                                      data: ppData,
                                                      label: 'Registration',
                                                      id: 'pvId',
                                                      color: '#3492E0', // لون السلسلة الأولى
                                                },
                                                {
                                                      data: uuData,
                                                      label: 'Audience',
                                                      id: 'uvId',
                                                      color: '#02b2af', // لون السلسلة الثانية
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

                              {/* المربع الثاني */}
                              <Box
                                    sx={{
                                          flex: 1, // المربع الأول يأخذ المساحة المتاحة بالكامل
                                          minWidth: '300px', // تحديد عرض الحد الأدنى للمربع الأول
                                          height: '400px', // تحديد ارتفاع ثابت
                                    }}

                                    data-aos="zoom-in-up"
                              >
                                    <BarChart
                                          width={undefined} // إزالة العرض الثابت
                                          height={undefined} // إزالة الارتفاع الثابت
                                          title='Registration and Audience'
                                          series={[
                                                {
                                                      data: pData,
                                                      label: 'Registration',
                                                      id: 'pvId',
                                                      color: '#3492E0', // لون السلسلة الأولى
                                                },
                                                {
                                                      data: uData,
                                                      label: 'Audience',
                                                      id: 'uvId',
                                                      color: '#02b2af', // لون السلسلة الثانية
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

                  </section>
            </section>
      );
}
