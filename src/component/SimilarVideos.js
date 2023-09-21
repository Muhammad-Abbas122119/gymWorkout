import React from 'react'


const SimilarVideos = (props) => {

  const { similarVideos } = props;
  // console.log(similarVideos);

  return (
    <div id="similar-video">

      <div className="container">
        <h3 className="pt-5 pb-3 text-capitalize" style={{ fontWeight: 'bold', color: 'var(--main-color)', fontFamily: "Roboto Serif" }}>
          Watch similar videos on YouTube
        </h3>
        <div className="row py-3">
          {
            similarVideos ? similarVideos.contents.slice(0, 6).map((item, index) => {
              return (
                <div key={index} className="col-sm-12 col-md-6 col-lg-4  w-sm-100 text-center">
                  <a
                   href={`http://www.youtube.com/watch?v=${item.video.videoId
                    }`}
                   target='_blank'
                   className='text-decoration-none text-dark'
                   >

                    <img src={item.video.thumbnails[0].url} />

                    <div className='mb-5' style={{ fontFamily: 'serif' }}>
                      <h5 className="mt-3 text-capitalize">
                        description :  <span style={{color:'var(--main-color)'}}>{item.video.description ? item.video.description:':('}</span>
                      </h5>
                      <h6>channelName : <span style={{ color: 'var(--main-color)' }}>{item.video.channelName}</span></h6>
                    </div>
                  </a>
                </div>
              )
            })
              : <div className="d-flex justify-content-center mt-5 ms-5" style={{ width: '100vw', color: "var(--main-color)" }}>
                <div className="spinner-border" role="status">
                </div>
              </div>
          }

        </div>

      </div>

    </div>
  )
}

export default SimilarVideos