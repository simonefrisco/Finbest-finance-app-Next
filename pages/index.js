import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Announcement from '../components/announcement'
import Navbar from '../components/navbar'
import Highlight from '../components/highlight'
import Point from '../components/point'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Digio Radiatorista Maglie Lecce</title>
          <meta name="description" content="Description of the website" />
          <meta property="og:title" content="Digio Radiatorista Maglie Lecce" />
          <meta
            property="og:description"
            content="Description of the website"
          />
        </Head>
        <div className="home-header">
          <div className="home-heading">
            <div id="notifcation" className="home-notification">
              <Link href="/">
                <a>
                  <Announcement
                    rootClassName="announcement-root-class-name"
                    className="home-component"
                  ></Announcement>
                </a>
              </Link>
            </div>
            <Navbar></Navbar>
          </div>
          <section id="home" className="home-hero">
            <div className="home-content">
              <h1 id="service-name" className="home-title">
                <span>Digio</span>
                <br></br>
                <span>Radiatorista</span>
              </h1>
              <h2 className="home-caption">
                Assistenza rapida e professionale per il tuo radiatore auto
              </h2>
              <h2 className="home-caption1">
                Zona Industriale, Maglie 73024 (LE)
              </h2>
              <div className="home-hero-buttons">
                <div className="home-io-btn">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128-128-256-192-256-192 192-192 192c0 128 131.5 387.5 256 512s384 256 512 256c0 0 192-128 192-192s-192-256-256-192z"></path>
                  </svg>
                  <a
                    href="tel:3471811467"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Chiamaci Ora
                  </a>
                </div>
              </div>
            </div>
            <div className="home-container1">
              <div className="home-image"></div>
            </div>
          </section>
        </div>
        <div className="home-stats">
          <div className="home-stat">
            <span className="home-caption2">Manutenzione</span>
            <span className="home-description">
              Manutenzione ordinaria e straordinaria
            </span>
          </div>
          <div className="home-stat1">
            <span className="home-caption3">Check Up</span>
            <span className="home-description1">
              Controllo e Cambio Olio, Lubrificanti, Ricarica Aria Condizionata
            </span>
          </div>
          <div className="home-stat2">
            <span className="home-caption4">Assistenza</span>
            <span className="home-description2">
              Consulenza e Assistenza gratuita su interventi auto
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
        <div className="home-sections">
          <div className="home-section">
            <div className="home-image1">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1599474151975-1f978922fa02?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;h=600&amp;q=80"
                loading="eager"
                className="home-image2"
              />
            </div>
            <div className="home-content1">
              <h2 className="home-text03">Servizi Radiatori</h2>
              <Highlight
                Title="Compravendita"
                Description="Vendita diretta e installazione di radiatori nuovi o usati"
              ></Highlight>
              <Highlight
                Title="Manutenzione"
                Description="Diagnosi rapida e precisa sullo stato del tuo radiatore auto"
              ></Highlight>
              <div className="home-explore">
                <span>Explore pricing plans -&gt;</span>
              </div>
            </div>
          </div>
          <div className="home-section1">
            <div className="home-content2">
              <div className="home-heading1">
                <h2 className="home-text05">Aria Condizionata</h2>
                <span className="home-text06">
                  Effettuiamo tutti i servizi indispensabili per la manutenzione
                  del tuo impianto. Servizi speciali per furgoni e veicoli
                  aziendali.
                </span>
              </div>
              <div className="home-content3">
                <div className="home-points">
                  <Point text="Riparazaione impianti di aerazione"></Point>
                  <Point text="Sostituzione impianti"></Point>
                  <Point text="Ricariche Aria Condizionata"></Point>
                </div>
                <Link href="/">
                  <a className="home-link2">
                    <div className="home-get-started">
                      <span className="home-sign-up">Get started now</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="home-image3"></div>
          </div>
        </div>
        <div className="home-banner-container">
          <div className="home-banner">
            <div className="home-stat3">
              <span className="home-caption5">Contattaci</span>
              <span className="home-description3">
                Siamo disponibili per assistenza auto, consigli su interventi e
                manutenzione, preventivi.
              </span>
            </div>
            <div className="home-container2">
              <div className="home-io-btn1">
                <svg viewBox="0 0 1024 1024" className="home-icon2">
                  <path d="M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128-128-256-192-256-192 192-192 192c0 128 131.5 387.5 256 512s384 256 512 256c0 0 192-128 192-192s-192-256-256-192z"></path>
                </svg>
                <a
                  href="tel:3471811467"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Chiamaci Ora
                </a>
              </div>
              <span className="home-text07">oppure</span>
              <div className="home-io-btn2">
                <span className="home-caption6">Scrivici</span>
                <svg viewBox="0 0 1024 1024" className="home-icon4">
                  <path d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="home-book">
          <div className="home-heading2">
            <h2 id="title-form" className="home-heading3">
              <span className="home-text08">Compila il Form</span>
              <br className="home-text09"></br>
              <br className="home-text10"></br>
              <span className="home-text11">
                Ti ricontatteremo il prima possibile
              </span>
              <br className="home-text12"></br>
            </h2>
          </div>
          <div className="home-container3">
            <iframe
              src="https://solara-form-docker.onrender.com"
              scrolling="no"
              className="home-iframe"
            ></iframe>
          </div>
          <form
            id="form-element"
            name="subform"
            enctype="application/x-www-form-urlencoded"
            className="home-form"
          >
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              autoComplete="name"
              className="input book-input"
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              className="input book-input"
            />
            <input
              type="text"
              id="tel"
              name="tel"
              placeholder="Telefono"
              autoComplete="tel"
              className="home-textinput2 input book-input"
            />
            <input
              type="text"
              id="mess"
              name="mess"
              required
              placeholder="Messaggio"
              className="input book-input"
            />
            <button
              type="button"
              onclick="submitForm(event)"
              className="home-book1 button-main button"
            >
              <span>Invia</span>
            </button>
            <div className="home-inputs">
              <div className="home-lower">
                <div className="home-button">
                  <p className="home-text14">
                    <span>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span className="home-text18">adipiscing elit</span>
                    <span>
                      <span>
                        , sed do eiusmod tempor
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span className="home-text22">incididunt</span>
                    <span>.</span>
                  </p>
                </div>
              </div>
            </div>
            <iframe
              src="https://www.youtube.com/embed/DeQkMK5LME4"
              className="home-iframe1"
            ></iframe>
          </form>
        </div>
        <div className="home-features">
          <div className="home-container4">
            <div className="home-container5">
              <span className="home-caption7">Dove Siamo</span>
              <span className="home-description4">Maglie, 73024 (LE)</span>
            </div>
            <div className="home-container6">
              <div>
                <DangerousHTML
                  html={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d762.5845725132749!2d18.288771534959587!3d40.13474769360892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13443d812353aa8d%3A0x9ecc780bc8b7aa1!2sVia%20Fratelli%20Piccinno%2C%20106%2C%2073024%20Maglie%20LE!5e0!3m2!1sen!2sit!4v1681856722553!5m2!1sen!2sit"  width="100%" height="450px" style="border:0;" allowfullscreen="True" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
                ></DangerousHTML>
              </div>
            </div>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
function submitForm(event) {
      event.preventDefault(); // Prevent the default form submission

      // Get form values
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;
      var tel = document.getElementById('tel').value;

      // Create an object with the form data
      var formData = {
        name: name,
        email: email,
        mess: message,
        tel: tel
      };
      console.log(formData);
      // Create a new XMLHttpRequest object
      var xhr = new XMLHttpRequest();
      console.log(formData);
      // Configure the request
      xhr.open('POST', 'https://fastapi-vercel-gonw5mj4a-simonefrisco.vercel.app/form', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

      // Convert the form data to JSON format
      var jsonData = JSON.stringify(formData);

      // Set up the callback function for when the request completes
      xhr.onload = function() {
        if (xhr.status === 200) {
          // Request was successful
          console.log(xhr.responseText);
          // You can perform any additional actions here, such as showing a success message
        } else {
          // Request failed
          console.error(xhr.status);
          // You can perform any error handling here, such as showing an error message
        }
      };

      // Send the request
      xhr.send(jsonData);
    }
</script>`}
          ></DangerousHTML>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-notification {
            width: 100%;
          }
          .home-component {
            text-decoration: none;
          }
          .home-hero {
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            max-height: 800px;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-content {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0.5;
            width: 50%;
            display: flex;
            z-index: 20;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-title {
            font-size: 64px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 76px;
          }
          .home-caption {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 400;
            line-height: 27px;
          }
          .home-caption1 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 400;
            line-height: 27px;
          }
          .home-hero-buttons {
            gap: var(--dl-space-space-unit);
            display: flex;
            z-index: 15;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-io-btn {
            gap: var(--dl-space-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-io-btn:hover {
            background-color: rgba(0, 0, 0, 0.75);
          }
          .home-icon {
            width: 24px;
            height: 24px;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image {
            width: 370px;
            height: 600px;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: 24px;
            flex-direction: row;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('https://images.unsplash.com/photo-1543747255-94b72995ac74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&h=600&q=80');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-stats {
            width: 100%;
            display: flex;
            z-index: 10;
            max-width: 1200px;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-stat {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            border-color: #dbdbdb;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            border-right-width: 1px;
            border-bottom-width: 0px;
          }
          .home-caption2 {
            color: var(--dl-color-gray-white);
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-description {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            max-width: 350px;
            text-align: center;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-stat1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            border-color: #dbdbdb;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            border-bottom-width: 0px;
          }
          .home-caption3 {
            color: var(--dl-color-gray-white);
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-description1 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            max-width: 350px;
            text-align: center;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-stat2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            border-color: #dbdbdb;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            border-left-width: 1px;
            border-bottom-width: 0px;
          }
          .home-caption4 {
            color: var(--dl-color-gray-white);
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-description2 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            max-width: 350px;
            text-align: center;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-sections {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-section {
            gap: var(--dl-space-space-sixunits);
            width: 100%;
            display: flex;
            z-index: 10;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-image1 {
            width: 400px;
            height: 540px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 24px;
          }
          .home-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text03 {
            font-size: 40px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-explore {
            cursor: pointer;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            align-items: flex-start;
            border-width: 0px;
            flex-direction: column;
            padding-bottom: 4px;
            border-bottom-width: 1px;
          }
          .home-explore:hover {
            color: rgba(0, 0, 0, 0.5);
            border-color: rgba(0, 0, 0, 0.3);
          }
          .home-section1 {
            gap: var(--dl-space-space-sixunits);
            width: 100%;
            display: flex;
            z-index: 10;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-content2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text05 {
            font-size: 40px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-text06 {
            font-size: 18px;
            max-width: 535px;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-content3 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-points {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-link2 {
            display: contents;
          }
          .home-get-started {
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .home-get-started:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-sign-up {
            font-style: normal;
            font-weight: 500;
          }
          .home-image3 {
            width: 370px;
            height: 600px;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: 24px;
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1632733711679-529326f6db12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&h=600&q=80');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-banner-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .home-banner {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            max-width: 1200px;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: 16px;
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
            background-color: #375ee0;
          }
          .home-stat3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 80%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            padding-left: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .home-caption5 {
            color: var(--dl-color-gray-white);
            font-size: 40px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-description3 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            text-align: center;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-container2 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: center;
          }
          .home-io-btn1 {
            gap: var(--dl-space-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            min-width: 220px;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            margin-right: 0px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: flex-start;
            background-color: #000000;
          }
          .home-io-btn1:hover {
            background-color: rgba(0, 0, 0, 0.75);
          }
          .home-icon2 {
            width: 24px;
            height: 24px;
          }
          .home-text07 {
            color: var(--dl-color-gray-white);
          }
          .home-io-btn2 {
            gap: var(--dl-space-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            min-width: 220px;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-io-btn2:hover {
            background-color: rgba(0, 0, 0, 0.75);
          }
          .home-caption6 {
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-icon4 {
            width: 24px;
            height: 24px;
          }
          .home-book {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-self: center;
            align-items: stretch;
            padding-top: 60px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 60px;
          }
          .home-heading2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading3 {
            font-size: 56px;
            max-width: 600px;
            text-align: center;
            font-weight: 600;
          }
          .home-text08 {
            font-size: 32px;
          }
          .home-text09 {
            font-size: 32px;
          }
          .home-text10 {
            font-size: 32px;
          }
          .home-text11 {
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
          }
          .home-container3 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-iframe {
            width: 424px;
            height: 400px;
          }
          .home-form {
            gap: var(--dl-space-space-unit);
            width: 80%;
            height: 100%;
            display: none;
            padding: var(--dl-space-space-unit);
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-textinput2 {
            align-self: stretch;
          }
          .home-book1 {
            width: 100%;
            border-width: 0px;
          }
          .home-inputs {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-lower {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-button {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text14 {
            font-size: 10px;
            max-width: 700px;
            text-align: left;
            line-height: 15px;
          }
          .home-text18 {
            color: #2461ff;
            font-style: normal;
            font-weight: 600;
          }
          .home-text22 {
            color: #2461ff;
            font-style: normal;
            font-weight: 600;
          }
          .home-iframe1 {
            width: 320px;
            height: 200px;
          }
          .home-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .home-container4 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .home-container5 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-caption7 {
            color: rgb(0, 0, 0);
            font-size: 40px;
            font-style: normal;
            text-align: left;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-description4 {
            color: rgb(16, 16, 16);
            width: auto;
            font-size: 18px;
            text-align: right;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-container6 {
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          @media (max-width: 1600px) {
            .home-book {
              height: 100%;
              align-self: center;
              align-items: stretch;
              padding-top: 60px;
              border-color: #ffffff;
              margin-bottom: 6px;
              padding-bottom: 60px;
            }
            .home-text08 {
              font-style: normal;
            }
            .home-text09 {
              font-style: normal;
            }
            .home-text10 {
              font-style: normal;
            }
            .home-text11 {
              font-size: 32px;
              font-style: inherit;
              font-weight: 400;
            }
            .home-text12 {
              font-style: normal;
            }
            .home-form {
              width: 100%;
              height: 100%;
              align-self: center;
              justify-content: center;
            }
          }
          @media (max-width: 1200px) {
            .home-heading3 {
              font-size: 56px;
              font-style: normal;
              font-weight: 600;
            }
            .home-form {
              width: 100%;
              height: auto;
              align-self: center;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .home-header {
              height: 100%;
            }
            .home-hero {
              height: auto;
              flex-direction: column;
            }
            .home-content {
              gap: var(--dl-space-space-unit);
              flex: 0 0 auto;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .home-title {
              font-size: 50px;
              align-self: center;
              text-align: center;
              line-height: 58px;
            }
            .home-caption {
              font-size: 16px;
              align-self: center;
            }
            .home-caption1 {
              font-size: 16px;
              align-self: center;
            }
            .home-hero-buttons {
              width: 100%;
            }
            .home-io-btn {
              flex: 1;
              max-width: 220px;
            }
            .home-container1 {
              display: none;
            }
            .home-stats {
              padding-top: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-stat {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-bottom: var(--dl-space-space-threeunits);
              border-right-width: 0px;
            }
            .home-caption2 {
              text-align: center;
              line-height: 32px;
            }
            .home-stat1 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-caption3 {
              text-align: center;
              line-height: 32px;
            }
            .home-stat2 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
              border-left-width: 0px;
            }
            .home-caption4 {
              text-align: center;
              line-height: 32px;
            }
            .home-section {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-fourunits);
              flex-direction: column-reverse;
            }
            .home-content1 {
              gap: var(--dl-space-space-unit);
            }
            .home-explore {
              margin-top: var(--dl-space-space-halfunit);
            }
            .home-section1 {
              padding-top: var(--dl-space-space-fourunits);
              border-color: #dbdbdb;
              flex-direction: column;
              border-top-width: 1px;
            }
            .home-content2 {
              gap: var(--dl-space-space-unit);
            }
            .home-content3 {
              gap: var(--dl-space-space-twounits);
            }
            .home-stat3 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-bottom: var(--dl-space-space-threeunits);
              border-right-width: 0px;
            }
            .home-caption5 {
              text-align: center;
              line-height: 32px;
            }
            .home-container2 {
              align-items: center;
            }
            .home-io-btn1 {
              flex: 1;
              margin-right: 0px;
            }
            .home-text07 {
              color: var(--dl-color-gray-white);
            }
            .home-io-btn2 {
              flex: 1;
            }
            .home-caption6 {
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
            }
            .home-heading3 {
              font-size: 32px;
            }
            .home-text08 {
              font-size: 56px;
              font-style: normal;
              font-weight: 600;
            }
            .home-text09 {
              font-style: normal;
            }
            .home-text10 {
              font-style: normal;
            }
            .home-text11 {
              font-size: 32px;
              font-style: inherit;
              font-weight: 400;
            }
            .home-text12 {
              font-style: normal;
            }
            .home-caption7 {
              text-align: center;
              line-height: 32px;
            }
            .home-container6 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
              padding-right: 0px;
            }
          }
          @media (max-width: 767px) {
            .home-title {
              font-size: 40px;
              line-height: 48px;
            }
            .home-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption2 {
              font-size: 32px;
            }
            .home-description {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption3 {
              font-size: 32px;
            }
            .home-description1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption4 {
              font-size: 32px;
            }
            .home-description2 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text03 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text05 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text06 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-get-started {
              display: none;
            }
            .home-caption5 {
              font-size: 32px;
            }
            .home-description3 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container4 {
              grid-template-columns: 1fr;
            }
            .home-caption7 {
              font-size: 32px;
            }
            .home-description4 {
              font-size: 16px;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              margin-top: 0px;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-content {
              width: 80%;
            }
            .home-hero-buttons {
              width: 100%;
              flex-direction: column;
            }
            .home-io-btn {
              width: 100%;
            }
            .home-image1 {
              width: 100%;
              max-width: 400px;
            }
            .home-container2 {
              flex-direction: column;
            }
            .home-io-btn1 {
              width: 100%;
            }
            .home-io-btn2 {
              width: 100%;
            }
            .home-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container5 {
              align-items: center;
              padding-top: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container6 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 470px) {
            .home-book {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
