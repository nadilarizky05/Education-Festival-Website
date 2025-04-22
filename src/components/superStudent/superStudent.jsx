import React from 'react'
import '../superStudent/superStudent.css'

const superstudent = () => {
  return (
    <>
      <div className="superstudent  bg-image" id="wef">
        <div className="container p-6">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="about-content">
                {/* <span>Apa itu WEF ?</span> */}
                <h1>Temukan Kampus Yang Tepat Disini</h1>
                <h5>Lengkap dengan info beasiswa & biaya kuliah</h5>
                <br />
                <a className='btn-a' href='https://superstudent.niecindonesia.com/ ' target='blank'>Download Super Student</a>
                {/* <p>
                World Education Festival adalah pameran pendidikan luar negeri yang dihadiri puluhan kampus dari banyak negara. Para peserta memiliki kesempatan untuk berkonsultasi eksklusif dengan lebih dari 300 universitas luar negeri, diwakili oleh perwakilan kampus dan konsultan <a href="https://www.niecindonesia.com/" target="blank">NIEC Indonesia</a>. </p>
                 */}
                {/* <p>
                Banyak hal menarik yang ditawarkan mulai dari informasi beasiswa luar negeri, biaya hidup di luar negeri, info gaji part time job, workshop gratis, tes kemampuan bahasa Inggris, talent mapping, translate dokumen, kursus bahasa Inggris, hingga games dan kompetisi dengan hadiah menarik seperti merchandise, e-money, hingga doorprize tiket pesawat ke Singapore.
                </p> */}
                
              </div>
            </div>

            {/* <div className="col-lg-6">
              <div className="about-image">
                <img
                  src={GambarAbout}
                  className="about-img1"
                  alt="about"
                  width={500}
                  height={350}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
  // return (
  //   <div>
  //     <div className="description">
  //       <h6>Apa itu WEF? </h6>
  //       <h2>Pameran Konsultasi Gratis Kuliah Luar Negeri</h2>
  //       <p>World Education Festival adalah pameran pendidikan luar negeri yang dihadiri puluhan kampus dari banyak negara. Para peserta memiliki kesempatan untuk berkonsultasi eksklusif dengan lebih dari 300 universitas luar negeri, diwakili oleh perwakilan kampus dan konsultan NIEC Indonesia. Banyak hal menarik yang ditawarkan mulai dari informasi beasiswa luar negeri, biaya hidup di luar negeri, info gaji part time job, workshop gratis, tes kemampuan bahasa Inggris, talent mapping, translate dokumen, kursus bahasa Inggris, hingga games dan kompetisi dengan hadiah menarik seperti merchandise, e-money, hingga doorprize tiket pesawat ke Singapore.</p>
  //     </div>
  //     <div className="gambar-about">
  //       <img src={GambarAbout} alt="" />
  //     </div>
  //   </div>
  // )
}

export default superstudent