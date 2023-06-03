import React from 'react'

import PropTypes from 'prop-types'

import Social from './social'

const Footer = (props) => {
  return (
    <>
      <div className="footer-footer">
        <div className="footer-content">
          <div className="footer-information">
            <div className="footer-heading">
              <img
                alt={props.pastedImage_alt}
                src={props.pastedImage_src}
                className="footer-pasted-image"
              />
              <p className="footer-text">{props.text2}</p>
            </div>
            <div className="footer-socials">
              <Social rootClassName="social-root-class-name"></Social>
              <Social
                Insider_src="/pastedimage-k0l6.svg"
                rootClassName="social-root-class-name1"
              ></Social>
              <Social
                Insider_src="/pastedimage-ld65.svg"
                rootClassName="social-root-class-name2"
              ></Social>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-list">
              <span className="footer-header">Contatti</span>
              <div className="footer-links1">
                <span className="footer-link">
                  <span className="footer-text1">
                    Via Fratelli Piccinno, 63
                  </span>
                  <br></br>
                  <span>73024 Maglie (LE)</span>
                  <br></br>
                  <br className="footer-text5"></br>
                  <br className="footer-text6"></br>
                </span>
                <a
                  href="mailto:contact@template.new?subject=Main"
                  className="footer-link1"
                >
                  digio@cheapnet.it
                </a>
                <a
                  href="tel:3471811467"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link2"
                >
                  Cel.: +39 3471811467
                </a>
                <a
                  href="tel:3471811467"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link3"
                >
                  Officina: 0836 428213
                </a>
              </div>
            </div>
            <div className="footer-list1">
              <span className="footer-header1">Menu</span>
              <div className="footer-links2">
                <span className="footer-link4">Home</span>
                <span href="#info" className="footer-link5">
                  Informazioni
                </span>
                <span href="#ourservice" className="footer-link6">
                  Servizi
                </span>
              </div>
            </div>
          </div>
        </div>
        <span className="footer-text7">{props.text}</span>
      </div>
      <style jsx>
        {`
          .footer-footer {
            gap: var(--dl-space-space-threeunits);
            color: white;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #000000;
          }
          .footer-content {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-information {
            gap: var(--dl-space-space-unit);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .footer-heading {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 265px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-pasted-image {
            width: 150px;
          }
          .footer-text {
            color: rgb(255, 255, 255);
            font-size: 14px;
            line-height: 21px;
          }
          .footer-socials {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 265px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .footer-links {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            z-index: 15;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .footer-list {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-header {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .footer-links1 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-link {
            color: rgb(255, 255, 255);
            width: 215px;
            cursor: pointer;
            transition: 0.3s;
          }
          .footer-link:hover {
            opacity: 0.5;
          }
          .footer-text1 {
            width: 215px;
            cursor: pointer;
            transition: 0.3s;
          }
          .footer-text1:hover {
            opacity: 0.5;
          }
          .footer-text6:hover {
            opacity: 0.5;
          }
          .footer-link1 {
            color: rgb(255, 255, 255);
            width: 215px;
            cursor: pointer;
            transition: 0.3s;
            text-decoration: none;
          }
          .footer-link1:hover {
            opacity: 0.5;
          }
          .footer-link2 {
            color: rgb(255, 255, 255);
          }
          .footer-link3 {
            color: rgb(255, 255, 255);
          }
          .footer-list1 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-header1 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .footer-links2 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-link4 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .footer-link4:hover {
            opacity: 0.5;
          }
          .footer-link5 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .footer-link5:hover {
            opacity: 0.5;
          }
          .footer-link6 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .footer-link6:hover {
            opacity: 0.5;
          }
          .footer-text7 {
            color: #c4c4c4;
            width: 100%;
            font-size: 14px;
            max-width: 1200px;
            line-height: 21px;
          }
          @media (max-width: 1600px) {
            .footer-text {
              color: rgb(255, 255, 255);
              font-size: 14px;
              line-height: 21px;
            }
          }
          @media (max-width: 1200px) {
            .footer-header {
              color: rgb(255, 255, 255);
              font-style: normal;
              font-weight: 600;
            }
            .footer-link {
              color: rgb(255, 255, 255);
            }
            .footer-text5 {
              color: #ffffff;
            }
            .footer-link1 {
              color: rgb(255, 255, 255);
              text-decoration: none;
            }
            .footer-link5 {
              color: rgb(255, 255, 255);
            }
            .footer-link6 {
              color: rgb(255, 255, 255);
            }
          }
          @media (max-width: 991px) {
            .footer-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              gap: var(--dl-space-space-twounits);
            }
            .footer-content {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .footer-information {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .footer-heading {
              gap: var(--dl-space-space-halfunit);
            }
            .footer-pasted-image {
              width: 100px;
            }
            .footer-socials {
              gap: var(--dl-space-space-halfunit);
            }
            .footer-links {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .footer-links {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  Link9: 'Careers',
  Link1: 'Responsive Prototypes',
  Link: 'Responsive Web Design',
  Link8: 'Partners',
  Link3: 'Static Website Builder',
  Link10: 'Press & Media',
  text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  Header1: 'Company',
  pastedImage_src: '/pastedimage-qqc.svg',
  pastedImage_alt: 'pastedImage',
  Link7: 'News',
  Link2: 'Design to Code',
  Link5: 'About',
  text: '© 2022 finbest. All Rights Reserved.',
  Header: 'Solutions',
  text2: 'Assistenza rapida e professionale per il tuo radiatore auto',
  Link6: 'Team',
  Link4: 'Static Website Generator',
}

Footer.propTypes = {
  Link9: PropTypes.string,
  Link1: PropTypes.string,
  Link: PropTypes.string,
  Link8: PropTypes.string,
  Link3: PropTypes.string,
  Link10: PropTypes.string,
  text1: PropTypes.string,
  Header1: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  Link7: PropTypes.string,
  Link2: PropTypes.string,
  Link5: PropTypes.string,
  text: PropTypes.string,
  Header: PropTypes.string,
  text2: PropTypes.string,
  Link6: PropTypes.string,
  Link4: PropTypes.string,
}

export default Footer
