import React from 'react';
import './App.css';
import { CarouselSection } from './components/carousel-section/carousel-section';

const categoryData = [
  {
    type: 'category',
    name: 'Com piscina',
    imageUrl:
      'https://ff4d20eb8f2d653d5c749147db95b818407879855553e003100789e-apidata.googleusercontent.com/download/storage/v1/b/instituto-taqtile/o/desafio%2Fpiscina.png?jk=ARTXCFEdtc5lZSI_qR-rrfP6smY0YDKnUcfZ_31F-6gECGmFFS20ScHpoBJLyjZdMYBEeRtRhd1u2W3mfX_r1GgLiRy63-19wR-Ys3SlHOOp4WH9te-bFJrNGwyIrMNjC4n7QilARQxpTCDSD_aOf942g-YmmLZbMFwllGmG2VBmWQsFf8ihP971tvxiWXuTBp2FD3g3iupQ2RjDGA6stKJfFWjG07mqlARq3-_3gZFvboqpKGHe16tvTOewTAInWrFxK90ywOxd_mibtG5P1Ev1YM4p6bfcMbg0V2XYR7NiB2fg9xYy9faWqY9CzwrPWaIxa-c4BQfs5QbzzbmoZ2ZiJHmL5CGHlnW0-BC14qsKcJzWmyo8zeE0PqW7Ve67WFX_Jm0a0Cnq0FPYS-diJPluHJuXfOW9Dki0A6Pc86NjhELmz54aGD3zwADgdqQkbVAg946arfGZalYYa7Ip3V_GygF06dnXFVAmIG6tKifKiIADcI8ufQDYoelCmjWWTXrallEcpoff2mejWOwpZ5o6c4CvUTisdGQqw2uwI_ngpXx-SQIirHYpgdFRBzTEEAnP217hmLth15suK7DDel0eFHO9BG4L9NWpRyXtmQEgzUrAIQaAvtBAaO59Jisqr9A3UR3lSW5HVz2uI0XGlpyiimqBK2_axLolF2YLXKNDPtAqszuzJKYz58n868FPN9q4roo9QQQmdCY5LyHVT3NsmkLlr2pRj3Oqk2uy7NoGeH7SAwDmIjUcDuC6pBnZ9m5yds8TYxKRbs2mAQuPPO1m7vo8qbtTLHVr7TD2SvCkgZETV1IojVrv4Zp55oTYbVO5dgUNy02WCUeVTM89lb7hiWS3diOGWc3jNw4T78bGPYxvjyist3dGAVE9230T3k7GUaFdycziFTjcynadDJVn3zt7e55Xk0tQKhZFb0E6JgZ68qyCwcfiziA7_Sub4NeoLewnaYayITTQ8qwBICxPZGykPseOlreZyc60NuZKVZkmpd4VFdxITJXxYvJrQnmC5J8cCIfwIx3GmsBCcke2OUFl-oYIlsBYJeT2TkIDxMbfLum97f6n2_yafWu15mqQME0tFsv9zNfUd6e11nbFCefGV3bDKpoBudSzoz0DLaSeSp0CoTPKR5ii3q0gH1TXaQ4i0v4bZJlx6egqrjMQzRp1OKT6cmAAH_QE&isca=1',
    numberOfProperties: 500,
  },
  {
    type: 'category',
    name: 'Varanda grande',
    imageUrl:
      'https://ff4d20eb8f2d653d5c749147db95b818407879855553e003100789e-apidata.googleusercontent.com/download/storage/v1/b/instituto-taqtile/o/desafio%2Fpiscina.png?jk=ARTXCFEdtc5lZSI_qR-rrfP6smY0YDKnUcfZ_31F-6gECGmFFS20ScHpoBJLyjZdMYBEeRtRhd1u2W3mfX_r1GgLiRy63-19wR-Ys3SlHOOp4WH9te-bFJrNGwyIrMNjC4n7QilARQxpTCDSD_aOf942g-YmmLZbMFwllGmG2VBmWQsFf8ihP971tvxiWXuTBp2FD3g3iupQ2RjDGA6stKJfFWjG07mqlARq3-_3gZFvboqpKGHe16tvTOewTAInWrFxK90ywOxd_mibtG5P1Ev1YM4p6bfcMbg0V2XYR7NiB2fg9xYy9faWqY9CzwrPWaIxa-c4BQfs5QbzzbmoZ2ZiJHmL5CGHlnW0-BC14qsKcJzWmyo8zeE0PqW7Ve67WFX_Jm0a0Cnq0FPYS-diJPluHJuXfOW9Dki0A6Pc86NjhELmz54aGD3zwADgdqQkbVAg946arfGZalYYa7Ip3V_GygF06dnXFVAmIG6tKifKiIADcI8ufQDYoelCmjWWTXrallEcpoff2mejWOwpZ5o6c4CvUTisdGQqw2uwI_ngpXx-SQIirHYpgdFRBzTEEAnP217hmLth15suK7DDel0eFHO9BG4L9NWpRyXtmQEgzUrAIQaAvtBAaO59Jisqr9A3UR3lSW5HVz2uI0XGlpyiimqBK2_axLolF2YLXKNDPtAqszuzJKYz58n868FPN9q4roo9QQQmdCY5LyHVT3NsmkLlr2pRj3Oqk2uy7NoGeH7SAwDmIjUcDuC6pBnZ9m5yds8TYxKRbs2mAQuPPO1m7vo8qbtTLHVr7TD2SvCkgZETV1IojVrv4Zp55oTYbVO5dgUNy02WCUeVTM89lb7hiWS3diOGWc3jNw4T78bGPYxvjyist3dGAVE9230T3k7GUaFdycziFTjcynadDJVn3zt7e55Xk0tQKhZFb0E6JgZ68qyCwcfiziA7_Sub4NeoLewnaYayITTQ8qwBICxPZGykPseOlreZyc60NuZKVZkmpd4VFdxITJXxYvJrQnmC5J8cCIfwIx3GmsBCcke2OUFl-oYIlsBYJeT2TkIDxMbfLum97f6n2_yafWu15mqQME0tFsv9zNfUd6e11nbFCefGV3bDKpoBudSzoz0DLaSeSp0CoTPKR5ii3q0gH1TXaQ4i0v4bZJlx6egqrjMQzRp1OKT6cmAAH_QE&isca=1',
    numberOfProperties: 600,
  },
  {
    type: 'category',
    name: 'Com piscina',
    imageUrl:
      'https://ff4d20eb8f2d653d5c749147db95b818407879855553e003100789e-apidata.googleusercontent.com/download/storage/v1/b/instituto-taqtile/o/desafio%2Fpiscina.png?jk=ARTXCFEdtc5lZSI_qR-rrfP6smY0YDKnUcfZ_31F-6gECGmFFS20ScHpoBJLyjZdMYBEeRtRhd1u2W3mfX_r1GgLiRy63-19wR-Ys3SlHOOp4WH9te-bFJrNGwyIrMNjC4n7QilARQxpTCDSD_aOf942g-YmmLZbMFwllGmG2VBmWQsFf8ihP971tvxiWXuTBp2FD3g3iupQ2RjDGA6stKJfFWjG07mqlARq3-_3gZFvboqpKGHe16tvTOewTAInWrFxK90ywOxd_mibtG5P1Ev1YM4p6bfcMbg0V2XYR7NiB2fg9xYy9faWqY9CzwrPWaIxa-c4BQfs5QbzzbmoZ2ZiJHmL5CGHlnW0-BC14qsKcJzWmyo8zeE0PqW7Ve67WFX_Jm0a0Cnq0FPYS-diJPluHJuXfOW9Dki0A6Pc86NjhELmz54aGD3zwADgdqQkbVAg946arfGZalYYa7Ip3V_GygF06dnXFVAmIG6tKifKiIADcI8ufQDYoelCmjWWTXrallEcpoff2mejWOwpZ5o6c4CvUTisdGQqw2uwI_ngpXx-SQIirHYpgdFRBzTEEAnP217hmLth15suK7DDel0eFHO9BG4L9NWpRyXtmQEgzUrAIQaAvtBAaO59Jisqr9A3UR3lSW5HVz2uI0XGlpyiimqBK2_axLolF2YLXKNDPtAqszuzJKYz58n868FPN9q4roo9QQQmdCY5LyHVT3NsmkLlr2pRj3Oqk2uy7NoGeH7SAwDmIjUcDuC6pBnZ9m5yds8TYxKRbs2mAQuPPO1m7vo8qbtTLHVr7TD2SvCkgZETV1IojVrv4Zp55oTYbVO5dgUNy02WCUeVTM89lb7hiWS3diOGWc3jNw4T78bGPYxvjyist3dGAVE9230T3k7GUaFdycziFTjcynadDJVn3zt7e55Xk0tQKhZFb0E6JgZ68qyCwcfiziA7_Sub4NeoLewnaYayITTQ8qwBICxPZGykPseOlreZyc60NuZKVZkmpd4VFdxITJXxYvJrQnmC5J8cCIfwIx3GmsBCcke2OUFl-oYIlsBYJeT2TkIDxMbfLum97f6n2_yafWu15mqQME0tFsv9zNfUd6e11nbFCefGV3bDKpoBudSzoz0DLaSeSp0CoTPKR5ii3q0gH1TXaQ4i0v4bZJlx6egqrjMQzRp1OKT6cmAAH_QE&isca=1',
    numberOfProperties: 500,
  },
  {
    type: 'category',
    name: 'Varanda grande',
    imageUrl:
      'https://ff4d20eb8f2d653d5c749147db95b818407879855553e003100789e-apidata.googleusercontent.com/download/storage/v1/b/instituto-taqtile/o/desafio%2Fpiscina.png?jk=ARTXCFEdtc5lZSI_qR-rrfP6smY0YDKnUcfZ_31F-6gECGmFFS20ScHpoBJLyjZdMYBEeRtRhd1u2W3mfX_r1GgLiRy63-19wR-Ys3SlHOOp4WH9te-bFJrNGwyIrMNjC4n7QilARQxpTCDSD_aOf942g-YmmLZbMFwllGmG2VBmWQsFf8ihP971tvxiWXuTBp2FD3g3iupQ2RjDGA6stKJfFWjG07mqlARq3-_3gZFvboqpKGHe16tvTOewTAInWrFxK90ywOxd_mibtG5P1Ev1YM4p6bfcMbg0V2XYR7NiB2fg9xYy9faWqY9CzwrPWaIxa-c4BQfs5QbzzbmoZ2ZiJHmL5CGHlnW0-BC14qsKcJzWmyo8zeE0PqW7Ve67WFX_Jm0a0Cnq0FPYS-diJPluHJuXfOW9Dki0A6Pc86NjhELmz54aGD3zwADgdqQkbVAg946arfGZalYYa7Ip3V_GygF06dnXFVAmIG6tKifKiIADcI8ufQDYoelCmjWWTXrallEcpoff2mejWOwpZ5o6c4CvUTisdGQqw2uwI_ngpXx-SQIirHYpgdFRBzTEEAnP217hmLth15suK7DDel0eFHO9BG4L9NWpRyXtmQEgzUrAIQaAvtBAaO59Jisqr9A3UR3lSW5HVz2uI0XGlpyiimqBK2_axLolF2YLXKNDPtAqszuzJKYz58n868FPN9q4roo9QQQmdCY5LyHVT3NsmkLlr2pRj3Oqk2uy7NoGeH7SAwDmIjUcDuC6pBnZ9m5yds8TYxKRbs2mAQuPPO1m7vo8qbtTLHVr7TD2SvCkgZETV1IojVrv4Zp55oTYbVO5dgUNy02WCUeVTM89lb7hiWS3diOGWc3jNw4T78bGPYxvjyist3dGAVE9230T3k7GUaFdycziFTjcynadDJVn3zt7e55Xk0tQKhZFb0E6JgZ68qyCwcfiziA7_Sub4NeoLewnaYayITTQ8qwBICxPZGykPseOlreZyc60NuZKVZkmpd4VFdxITJXxYvJrQnmC5J8cCIfwIx3GmsBCcke2OUFl-oYIlsBYJeT2TkIDxMbfLum97f6n2_yafWu15mqQME0tFsv9zNfUd6e11nbFCefGV3bDKpoBudSzoz0DLaSeSp0CoTPKR5ii3q0gH1TXaQ4i0v4bZJlx6egqrjMQzRp1OKT6cmAAH_QE&isca=1',
    numberOfProperties: 600,
  },
  {
    type: 'category',
    name: 'Com piscina',
    imageUrl:
      'https://ff4d20eb8f2d653d5c749147db95b818407879855553e003100789e-apidata.googleusercontent.com/download/storage/v1/b/instituto-taqtile/o/desafio%2Fpiscina.png?jk=ARTXCFEdtc5lZSI_qR-rrfP6smY0YDKnUcfZ_31F-6gECGmFFS20ScHpoBJLyjZdMYBEeRtRhd1u2W3mfX_r1GgLiRy63-19wR-Ys3SlHOOp4WH9te-bFJrNGwyIrMNjC4n7QilARQxpTCDSD_aOf942g-YmmLZbMFwllGmG2VBmWQsFf8ihP971tvxiWXuTBp2FD3g3iupQ2RjDGA6stKJfFWjG07mqlARq3-_3gZFvboqpKGHe16tvTOewTAInWrFxK90ywOxd_mibtG5P1Ev1YM4p6bfcMbg0V2XYR7NiB2fg9xYy9faWqY9CzwrPWaIxa-c4BQfs5QbzzbmoZ2ZiJHmL5CGHlnW0-BC14qsKcJzWmyo8zeE0PqW7Ve67WFX_Jm0a0Cnq0FPYS-diJPluHJuXfOW9Dki0A6Pc86NjhELmz54aGD3zwADgdqQkbVAg946arfGZalYYa7Ip3V_GygF06dnXFVAmIG6tKifKiIADcI8ufQDYoelCmjWWTXrallEcpoff2mejWOwpZ5o6c4CvUTisdGQqw2uwI_ngpXx-SQIirHYpgdFRBzTEEAnP217hmLth15suK7DDel0eFHO9BG4L9NWpRyXtmQEgzUrAIQaAvtBAaO59Jisqr9A3UR3lSW5HVz2uI0XGlpyiimqBK2_axLolF2YLXKNDPtAqszuzJKYz58n868FPN9q4roo9QQQmdCY5LyHVT3NsmkLlr2pRj3Oqk2uy7NoGeH7SAwDmIjUcDuC6pBnZ9m5yds8TYxKRbs2mAQuPPO1m7vo8qbtTLHVr7TD2SvCkgZETV1IojVrv4Zp55oTYbVO5dgUNy02WCUeVTM89lb7hiWS3diOGWc3jNw4T78bGPYxvjyist3dGAVE9230T3k7GUaFdycziFTjcynadDJVn3zt7e55Xk0tQKhZFb0E6JgZ68qyCwcfiziA7_Sub4NeoLewnaYayITTQ8qwBICxPZGykPseOlreZyc60NuZKVZkmpd4VFdxITJXxYvJrQnmC5J8cCIfwIx3GmsBCcke2OUFl-oYIlsBYJeT2TkIDxMbfLum97f6n2_yafWu15mqQME0tFsv9zNfUd6e11nbFCefGV3bDKpoBudSzoz0DLaSeSp0CoTPKR5ii3q0gH1TXaQ4i0v4bZJlx6egqrjMQzRp1OKT6cmAAH_QE&isca=1',
    numberOfProperties: 500,
  },
  {
    type: 'category',
    name: 'Varanda grande',
    imageUrl:
      'https://ff4d20eb8f2d653d5c749147db95b818407879855553e003100789e-apidata.googleusercontent.com/download/storage/v1/b/instituto-taqtile/o/desafio%2Fpiscina.png?jk=ARTXCFEdtc5lZSI_qR-rrfP6smY0YDKnUcfZ_31F-6gECGmFFS20ScHpoBJLyjZdMYBEeRtRhd1u2W3mfX_r1GgLiRy63-19wR-Ys3SlHOOp4WH9te-bFJrNGwyIrMNjC4n7QilARQxpTCDSD_aOf942g-YmmLZbMFwllGmG2VBmWQsFf8ihP971tvxiWXuTBp2FD3g3iupQ2RjDGA6stKJfFWjG07mqlARq3-_3gZFvboqpKGHe16tvTOewTAInWrFxK90ywOxd_mibtG5P1Ev1YM4p6bfcMbg0V2XYR7NiB2fg9xYy9faWqY9CzwrPWaIxa-c4BQfs5QbzzbmoZ2ZiJHmL5CGHlnW0-BC14qsKcJzWmyo8zeE0PqW7Ve67WFX_Jm0a0Cnq0FPYS-diJPluHJuXfOW9Dki0A6Pc86NjhELmz54aGD3zwADgdqQkbVAg946arfGZalYYa7Ip3V_GygF06dnXFVAmIG6tKifKiIADcI8ufQDYoelCmjWWTXrallEcpoff2mejWOwpZ5o6c4CvUTisdGQqw2uwI_ngpXx-SQIirHYpgdFRBzTEEAnP217hmLth15suK7DDel0eFHO9BG4L9NWpRyXtmQEgzUrAIQaAvtBAaO59Jisqr9A3UR3lSW5HVz2uI0XGlpyiimqBK2_axLolF2YLXKNDPtAqszuzJKYz58n868FPN9q4roo9QQQmdCY5LyHVT3NsmkLlr2pRj3Oqk2uy7NoGeH7SAwDmIjUcDuC6pBnZ9m5yds8TYxKRbs2mAQuPPO1m7vo8qbtTLHVr7TD2SvCkgZETV1IojVrv4Zp55oTYbVO5dgUNy02WCUeVTM89lb7hiWS3diOGWc3jNw4T78bGPYxvjyist3dGAVE9230T3k7GUaFdycziFTjcynadDJVn3zt7e55Xk0tQKhZFb0E6JgZ68qyCwcfiziA7_Sub4NeoLewnaYayITTQ8qwBICxPZGykPseOlreZyc60NuZKVZkmpd4VFdxITJXxYvJrQnmC5J8cCIfwIx3GmsBCcke2OUFl-oYIlsBYJeT2TkIDxMbfLum97f6n2_yafWu15mqQME0tFsv9zNfUd6e11nbFCefGV3bDKpoBudSzoz0DLaSeSp0CoTPKR5ii3q0gH1TXaQ4i0v4bZJlx6egqrjMQzRp1OKT6cmAAH_QE&isca=1',
    numberOfProperties: 600,
  },
  {
    type: 'category',
    name: 'Com piscina',
    imageUrl:
      'https://ff4d20eb8f2d653d5c749147db95b818407879855553e003100789e-apidata.googleusercontent.com/download/storage/v1/b/instituto-taqtile/o/desafio%2Fpiscina.png?jk=ARTXCFEdtc5lZSI_qR-rrfP6smY0YDKnUcfZ_31F-6gECGmFFS20ScHpoBJLyjZdMYBEeRtRhd1u2W3mfX_r1GgLiRy63-19wR-Ys3SlHOOp4WH9te-bFJrNGwyIrMNjC4n7QilARQxpTCDSD_aOf942g-YmmLZbMFwllGmG2VBmWQsFf8ihP971tvxiWXuTBp2FD3g3iupQ2RjDGA6stKJfFWjG07mqlARq3-_3gZFvboqpKGHe16tvTOewTAInWrFxK90ywOxd_mibtG5P1Ev1YM4p6bfcMbg0V2XYR7NiB2fg9xYy9faWqY9CzwrPWaIxa-c4BQfs5QbzzbmoZ2ZiJHmL5CGHlnW0-BC14qsKcJzWmyo8zeE0PqW7Ve67WFX_Jm0a0Cnq0FPYS-diJPluHJuXfOW9Dki0A6Pc86NjhELmz54aGD3zwADgdqQkbVAg946arfGZalYYa7Ip3V_GygF06dnXFVAmIG6tKifKiIADcI8ufQDYoelCmjWWTXrallEcpoff2mejWOwpZ5o6c4CvUTisdGQqw2uwI_ngpXx-SQIirHYpgdFRBzTEEAnP217hmLth15suK7DDel0eFHO9BG4L9NWpRyXtmQEgzUrAIQaAvtBAaO59Jisqr9A3UR3lSW5HVz2uI0XGlpyiimqBK2_axLolF2YLXKNDPtAqszuzJKYz58n868FPN9q4roo9QQQmdCY5LyHVT3NsmkLlr2pRj3Oqk2uy7NoGeH7SAwDmIjUcDuC6pBnZ9m5yds8TYxKRbs2mAQuPPO1m7vo8qbtTLHVr7TD2SvCkgZETV1IojVrv4Zp55oTYbVO5dgUNy02WCUeVTM89lb7hiWS3diOGWc3jNw4T78bGPYxvjyist3dGAVE9230T3k7GUaFdycziFTjcynadDJVn3zt7e55Xk0tQKhZFb0E6JgZ68qyCwcfiziA7_Sub4NeoLewnaYayITTQ8qwBICxPZGykPseOlreZyc60NuZKVZkmpd4VFdxITJXxYvJrQnmC5J8cCIfwIx3GmsBCcke2OUFl-oYIlsBYJeT2TkIDxMbfLum97f6n2_yafWu15mqQME0tFsv9zNfUd6e11nbFCefGV3bDKpoBudSzoz0DLaSeSp0CoTPKR5ii3q0gH1TXaQ4i0v4bZJlx6egqrjMQzRp1OKT6cmAAH_QE&isca=1',
    numberOfProperties: 500,
  },
  {
    type: 'category',
    name: 'Varanda grande',
    imageUrl:
      'https://ff4d20eb8f2d653d5c749147db95b818407879855553e003100789e-apidata.googleusercontent.com/download/storage/v1/b/instituto-taqtile/o/desafio%2Fpiscina.png?jk=ARTXCFEdtc5lZSI_qR-rrfP6smY0YDKnUcfZ_31F-6gECGmFFS20ScHpoBJLyjZdMYBEeRtRhd1u2W3mfX_r1GgLiRy63-19wR-Ys3SlHOOp4WH9te-bFJrNGwyIrMNjC4n7QilARQxpTCDSD_aOf942g-YmmLZbMFwllGmG2VBmWQsFf8ihP971tvxiWXuTBp2FD3g3iupQ2RjDGA6stKJfFWjG07mqlARq3-_3gZFvboqpKGHe16tvTOewTAInWrFxK90ywOxd_mibtG5P1Ev1YM4p6bfcMbg0V2XYR7NiB2fg9xYy9faWqY9CzwrPWaIxa-c4BQfs5QbzzbmoZ2ZiJHmL5CGHlnW0-BC14qsKcJzWmyo8zeE0PqW7Ve67WFX_Jm0a0Cnq0FPYS-diJPluHJuXfOW9Dki0A6Pc86NjhELmz54aGD3zwADgdqQkbVAg946arfGZalYYa7Ip3V_GygF06dnXFVAmIG6tKifKiIADcI8ufQDYoelCmjWWTXrallEcpoff2mejWOwpZ5o6c4CvUTisdGQqw2uwI_ngpXx-SQIirHYpgdFRBzTEEAnP217hmLth15suK7DDel0eFHO9BG4L9NWpRyXtmQEgzUrAIQaAvtBAaO59Jisqr9A3UR3lSW5HVz2uI0XGlpyiimqBK2_axLolF2YLXKNDPtAqszuzJKYz58n868FPN9q4roo9QQQmdCY5LyHVT3NsmkLlr2pRj3Oqk2uy7NoGeH7SAwDmIjUcDuC6pBnZ9m5yds8TYxKRbs2mAQuPPO1m7vo8qbtTLHVr7TD2SvCkgZETV1IojVrv4Zp55oTYbVO5dgUNy02WCUeVTM89lb7hiWS3diOGWc3jNw4T78bGPYxvjyist3dGAVE9230T3k7GUaFdycziFTjcynadDJVn3zt7e55Xk0tQKhZFb0E6JgZ68qyCwcfiziA7_Sub4NeoLewnaYayITTQ8qwBICxPZGykPseOlreZyc60NuZKVZkmpd4VFdxITJXxYvJrQnmC5J8cCIfwIx3GmsBCcke2OUFl-oYIlsBYJeT2TkIDxMbfLum97f6n2_yafWu15mqQME0tFsv9zNfUd6e11nbFCefGV3bDKpoBudSzoz0DLaSeSp0CoTPKR5ii3q0gH1TXaQ4i0v4bZJlx6egqrjMQzRp1OKT6cmAAH_QE&isca=1',
    numberOfProperties: 600,
  },
  {
    type: 'category',
    name: 'Com piscina',
    imageUrl:
      'https://ff4d20eb8f2d653d5c749147db95b818407879855553e003100789e-apidata.googleusercontent.com/download/storage/v1/b/instituto-taqtile/o/desafio%2Fpiscina.png?jk=ARTXCFEdtc5lZSI_qR-rrfP6smY0YDKnUcfZ_31F-6gECGmFFS20ScHpoBJLyjZdMYBEeRtRhd1u2W3mfX_r1GgLiRy63-19wR-Ys3SlHOOp4WH9te-bFJrNGwyIrMNjC4n7QilARQxpTCDSD_aOf942g-YmmLZbMFwllGmG2VBmWQsFf8ihP971tvxiWXuTBp2FD3g3iupQ2RjDGA6stKJfFWjG07mqlARq3-_3gZFvboqpKGHe16tvTOewTAInWrFxK90ywOxd_mibtG5P1Ev1YM4p6bfcMbg0V2XYR7NiB2fg9xYy9faWqY9CzwrPWaIxa-c4BQfs5QbzzbmoZ2ZiJHmL5CGHlnW0-BC14qsKcJzWmyo8zeE0PqW7Ve67WFX_Jm0a0Cnq0FPYS-diJPluHJuXfOW9Dki0A6Pc86NjhELmz54aGD3zwADgdqQkbVAg946arfGZalYYa7Ip3V_GygF06dnXFVAmIG6tKifKiIADcI8ufQDYoelCmjWWTXrallEcpoff2mejWOwpZ5o6c4CvUTisdGQqw2uwI_ngpXx-SQIirHYpgdFRBzTEEAnP217hmLth15suK7DDel0eFHO9BG4L9NWpRyXtmQEgzUrAIQaAvtBAaO59Jisqr9A3UR3lSW5HVz2uI0XGlpyiimqBK2_axLolF2YLXKNDPtAqszuzJKYz58n868FPN9q4roo9QQQmdCY5LyHVT3NsmkLlr2pRj3Oqk2uy7NoGeH7SAwDmIjUcDuC6pBnZ9m5yds8TYxKRbs2mAQuPPO1m7vo8qbtTLHVr7TD2SvCkgZETV1IojVrv4Zp55oTYbVO5dgUNy02WCUeVTM89lb7hiWS3diOGWc3jNw4T78bGPYxvjyist3dGAVE9230T3k7GUaFdycziFTjcynadDJVn3zt7e55Xk0tQKhZFb0E6JgZ68qyCwcfiziA7_Sub4NeoLewnaYayITTQ8qwBICxPZGykPseOlreZyc60NuZKVZkmpd4VFdxITJXxYvJrQnmC5J8cCIfwIx3GmsBCcke2OUFl-oYIlsBYJeT2TkIDxMbfLum97f6n2_yafWu15mqQME0tFsv9zNfUd6e11nbFCefGV3bDKpoBudSzoz0DLaSeSp0CoTPKR5ii3q0gH1TXaQ4i0v4bZJlx6egqrjMQzRp1OKT6cmAAH_QE&isca=1',
    numberOfProperties: 500,
  },
  {
    type: 'category',
    name: 'Varanda grande',
    imageUrl:
      'https://ff4d20eb8f2d653d5c749147db95b818407879855553e003100789e-apidata.googleusercontent.com/download/storage/v1/b/instituto-taqtile/o/desafio%2Fpiscina.png?jk=ARTXCFEdtc5lZSI_qR-rrfP6smY0YDKnUcfZ_31F-6gECGmFFS20ScHpoBJLyjZdMYBEeRtRhd1u2W3mfX_r1GgLiRy63-19wR-Ys3SlHOOp4WH9te-bFJrNGwyIrMNjC4n7QilARQxpTCDSD_aOf942g-YmmLZbMFwllGmG2VBmWQsFf8ihP971tvxiWXuTBp2FD3g3iupQ2RjDGA6stKJfFWjG07mqlARq3-_3gZFvboqpKGHe16tvTOewTAInWrFxK90ywOxd_mibtG5P1Ev1YM4p6bfcMbg0V2XYR7NiB2fg9xYy9faWqY9CzwrPWaIxa-c4BQfs5QbzzbmoZ2ZiJHmL5CGHlnW0-BC14qsKcJzWmyo8zeE0PqW7Ve67WFX_Jm0a0Cnq0FPYS-diJPluHJuXfOW9Dki0A6Pc86NjhELmz54aGD3zwADgdqQkbVAg946arfGZalYYa7Ip3V_GygF06dnXFVAmIG6tKifKiIADcI8ufQDYoelCmjWWTXrallEcpoff2mejWOwpZ5o6c4CvUTisdGQqw2uwI_ngpXx-SQIirHYpgdFRBzTEEAnP217hmLth15suK7DDel0eFHO9BG4L9NWpRyXtmQEgzUrAIQaAvtBAaO59Jisqr9A3UR3lSW5HVz2uI0XGlpyiimqBK2_axLolF2YLXKNDPtAqszuzJKYz58n868FPN9q4roo9QQQmdCY5LyHVT3NsmkLlr2pRj3Oqk2uy7NoGeH7SAwDmIjUcDuC6pBnZ9m5yds8TYxKRbs2mAQuPPO1m7vo8qbtTLHVr7TD2SvCkgZETV1IojVrv4Zp55oTYbVO5dgUNy02WCUeVTM89lb7hiWS3diOGWc3jNw4T78bGPYxvjyist3dGAVE9230T3k7GUaFdycziFTjcynadDJVn3zt7e55Xk0tQKhZFb0E6JgZ68qyCwcfiziA7_Sub4NeoLewnaYayITTQ8qwBICxPZGykPseOlreZyc60NuZKVZkmpd4VFdxITJXxYvJrQnmC5J8cCIfwIx3GmsBCcke2OUFl-oYIlsBYJeT2TkIDxMbfLum97f6n2_yafWu15mqQME0tFsv9zNfUd6e11nbFCefGV3bDKpoBudSzoz0DLaSeSp0CoTPKR5ii3q0gH1TXaQ4i0v4bZJlx6egqrjMQzRp1OKT6cmAAH_QE&isca=1',
    numberOfProperties: 600,
  },
];

const propertyData = [
  {
    type: 'propertyData',
    name: 'Com piscina',
    imageUrl: 'https://img.olx.com.br/thumbs256x256/81/816346163347311.jpg',
    numberOfProperties: 500,
    dataproperty: [
      { category: 'bathroom', detail: '2 Bathrooms' },
      { category: 'room', detail: '3 Rooms' },
      { category: 'square-meter', detail: '150 sqm' },
    ],
  },
  {
    type: 'propertyData',
    name: 'Com piscina',
    imageUrl: 'https://img.olx.com.br/thumbs256x256/81/816346163347311.jpg',
    numberOfProperties: 500,
    dataproperty: [
      { category: 'bathroom', detail: '2 Bathrooms' },
      { category: 'room', detail: '3 Rooms' },
      { category: 'square-meter', detail: '150 sqm' },
    ],
  },
  {
    type: 'propertyData',
    name: 'Com piscina',
    imageUrl: 'https://img.olx.com.br/thumbs256x256/81/816346163347311.jpg',
    numberOfProperties: 500,
    dataproperty: [
      { category: 'bathroom', detail: '2 Bathrooms' },
      { category: 'room', detail: '3 Rooms' },
      { category: 'square-meter', detail: '150 sqm' },
    ],
  },
  {
    type: 'propertyData',
    name: 'Com piscina',
    imageUrl: 'https://img.olx.com.br/thumbs256x256/81/816346163347311.jpg',
    numberOfProperties: 500,
    dataproperty: [
      { category: 'bathroom', detail: '2 Bathrooms' },
      { category: 'room', detail: '3 Rooms' },
      { category: 'square-meter', detail: '150 sqm' },
    ],
  },
  {
    type: 'propertyData',
    name: 'Com piscina',
    imageUrl: 'https://img.olx.com.br/thumbs256x256/81/816346163347311.jpg',
    numberOfProperties: 500,
    dataproperty: [
      { category: 'bathroom', detail: '2 Bathrooms' },
      { category: 'room', detail: '3 Rooms' },
      { category: 'square-meter', detail: '150 sqm' },
    ],
  },
  {
    type: 'propertyData',
    name: 'Com piscina',
    imageUrl: 'https://img.olx.com.br/thumbs256x256/81/816346163347311.jpg',
    numberOfProperties: 500,
    dataproperty: [
      { category: 'bathroom', detail: '2 Bathrooms' },
      { category: 'room', detail: '3 Rooms' },
      { category: 'square-meter', detail: '150 sqm' },
    ],
  },
  {
    type: 'propertyData',
    name: 'Com piscina',
    imageUrl: 'https://img.olx.com.br/thumbs256x256/81/816346163347311.jpg',
    numberOfProperties: 500,
    dataproperty: [
      { category: 'bathroom', detail: '2 Bathrooms' },
      { category: 'room', detail: '3 Rooms' },
      { category: 'square-meter', detail: '150 sqm' },
    ],
  },
  {
    type: 'propertyData',
    name: 'Com piscina',
    imageUrl: 'https://img.olx.com.br/thumbs256x256/81/816346163347311.jpg',
    numberOfProperties: 500,
    dataproperty: [
      { category: 'bathroom', detail: '2 Bathrooms' },
      { category: 'room', detail: '3 Rooms' },
      { category: 'square-meter', detail: '150 sqm' },
    ],
  },
  {
    type: 'propertyData',
    name: 'Com piscina',
    imageUrl: 'https://img.olx.com.br/thumbs256x256/81/816346163347311.jpg',
    numberOfProperties: 500,
    dataproperty: [
      { category: 'bathroom', detail: '2 Bathrooms' },
      { category: 'room', detail: '3 Rooms' },
      { category: 'square-meter', detail: '150 sqm' },
    ],
  },
  {
    type: 'propertyData',
    name: 'Com piscina',
    imageUrl: 'https://img.olx.com.br/thumbs256x256/81/816346163347311.jpg',
    numberOfProperties: 500,
    dataproperty: [
      { category: 'bathroom', detail: '2 Bathrooms' },
      { category: 'room', detail: '3 Rooms' },
      { category: 'square-meter', detail: '150 sqm' },
    ],
  },
];

export function App() {
  return (
    <div className="App">
      <CarouselSection title={'Encontre o imóvel ideal para o seu estilo de vida!'} cardsData={categoryData} />
      <CarouselSection title={'Encontre o imóvel ideal para o seu estilo de vida!'} cardsData={propertyData} />
    </div>
  );
}

export default App;
