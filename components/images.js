import React from 'react'

import PropTypes from 'prop-types'

const Images = (props) => {
  return (
    <>
      <div className={`images-images ${props.rootClassName} `}>
        <div className="images-column">
          <img
            alt={props.pastedImage_alt}
            src={props.pastedImage_src}
            className="images-pasted-image"
          />
        </div>
        <div className="images-column1">
          <img
            alt={props.pastedImage_alt1}
            src={props.pastedImage_src1}
            className="images-pasted-image1"
          />
          <img
            alt={props.pastedImage_alt2}
            src={props.pastedImage_src2}
            className="images-pasted-image2"
          />
        </div>
        <div className="images-column2">
          <img
            alt={props.pastedImage_alt3}
            src={props.pastedImage_src3}
            className="images-pasted-image3"
          />
          <img
            alt={props.pastedImage_alt4}
            src={props.pastedImage_src4}
            className="images-pasted-image4"
          />
        </div>
      </div>
      <style jsx>
        {`
          .images-images {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            overflow: hidden;
            position: relative;
            transform: rotate(-30deg);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .images-column {
            gap: var(--dl-space-space-oneandhalfunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .images-pasted-image {
            width: 240px;
          }
          .images-column1 {
            gap: var(--dl-space-space-oneandhalfunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .images-pasted-image1 {
            width: 240px;
          }
          .images-pasted-image2 {
            width: 240px;
          }
          .images-column2 {
            gap: var(--dl-space-space-oneandhalfunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .images-pasted-image3 {
            width: 240px;
          }
          .images-pasted-image4 {
            width: 240px;
          }
          @media (max-width: 991px) {
            .images-images {
              left: 0px;
              right: -100px;
              bottom: -325px;
              margin: auto;
            }
            .images-pasted-image {
              width: 200px;
            }
            .images-pasted-image1 {
              width: 200px;
            }
            .images-pasted-image2 {
              width: 200px;
            }
            .images-pasted-image3 {
              width: 200px;
            }
            .images-pasted-image4 {
              width: 200px;
            }
          }
          @media (max-width: 767px) {
            .images-images {
              bottom: -250px;
            }
          }
          @media (max-width: 479px) {
            .images-images {
              bottom: -300px;
            }
            .images-pasted-image {
              width: 150px;
            }
            .images-pasted-image1 {
              width: 150px;
            }
            .images-pasted-image2 {
              width: 150px;
            }
            .images-pasted-image3 {
              width: 150px;
            }
            .images-pasted-image4 {
              width: 150px;
            }
          }
        `}
      </style>
    </>
  )
}

Images.defaultProps = {
  pastedImage_alt4: 'pastedImage',
  pastedImage_alt3: 'pastedImage',
  pastedImage_alt2: 'pastedImage',
  pastedImage_src2: '/pastedimage-c39.svg',
  pastedImage_src1: '/pastedimage-v31-300w.png',
  rootClassName: '',
  pastedImage_src4: '/pastedimage-06e.svg',
  pastedImage_alt1: 'pastedImage',
  pastedImage_src3: '/pastedimage-iqnj.svg',
  pastedImage_alt: 'pastedImage',
  pastedImage_src: '/pastedimage-oy26-300w.png',
}

Images.propTypes = {
  pastedImage_alt4: PropTypes.string,
  pastedImage_alt3: PropTypes.string,
  pastedImage_alt2: PropTypes.string,
  pastedImage_src2: PropTypes.string,
  pastedImage_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  pastedImage_src4: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  pastedImage_src3: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  pastedImage_src: PropTypes.string,
}

export default Images
