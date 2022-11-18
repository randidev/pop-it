import Image from 'next/image';

import { ProductLists } from './config';
import { IProduct } from './types';

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <div className="hero__content--items">
              <h1
                className="hero__title"
                data-aos="fade-right"
              >
                POP IT!
              </h1>
              <p
                className="hero__subtitle"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                Lorem ipsum dolor sit
                amet, consectetur
                adipiscing elit. Aenean
                commodo nulla sed
                vehicula imperdiet.
                Proin id libero id nibh
                tempor commodo non ac
                lectus
              </p>
              <button
                className="hero__button"
                data-aos="fade-right"
                data-aos-delay="1000"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us">
        <div className="about-us__container">
          <div className="about-us__content">
            <h2
              className="about-us__title"
              data-aos="zoom-in"
            >
              About Us
            </h2>
            <p
              className="about-us__description"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Lorem ipsum dolor sit
              amet, consectetur
              adipiscing elit. Aenean
              commodo nulla sed vehicula
              imperdiet. Proin id libero
              id nibh tempor commodo non
              ac lectus. Praesent
              sodales diam nec ex
              sollicitudin, nec
              fringilla libero
              convallis. Suspendisse
              volutpat risus ut nisi
              tristique sodales. Etiam
              tristique tempor suscipit.
              Phasellus ut risus in
              lorem vehicula tincidunt
              ac ut erat. Donec et
              rutrum erat. Donec et mi
              felis. Phasellus in turpis
              libero. Nam auctor mi ut
              sagittis dapibus.
            </p>
          </div>
        </div>
      </div>

      <div className="products">
        <div className="products__container">
          <div className="products__content">
            <h2
              className="products__title"
              data-aos="zoom-out"
            >
              Let's Try Pop-It!
            </h2>
            <div className="products__lists">
              {ProductLists.map(
                (
                  product: IProduct,
                  index: number,
                ) => (
                  <div
                    key={index}
                    className="products__lists__item"
                    data-aos="zoom-in"
                    data-aos-delay={
                      index * 500
                    }
                  >
                    <Image
                      src={
                        product.image
                      }
                      alt=""
                      width={120}
                      height={120}
                      className="mx-auto"
                    />
                    <h3 className="products__lists__item__title">
                      {product.name}
                    </h3>
                    <button className="products__lists__item__button">
                      Detail
                    </button>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="contact__container">
          <div className="contact__content">
            <div className="contact__items">
              <div className="contact__content__item">
                <h2
                  className="contact__content__item__title"
                  data-aos="fade-right"
                >
                  Contact
                </h2>
                <p
                  className="contact__content__item__description"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  Lorem ipsum dolor sit
                  amet, consectetur
                  adipiscing elit.
                  Aenean commodo nulla
                  sed vehicula
                  imperdiet. Proin id
                  libero id nibh tempor
                  commodo non ac lectus.
                  Praesent sodales diam
                  nec ex sollicitudin,
                  nec fringilla libero
                  convallis. Suspendisse
                  volutpat risus ut nisi
                  tristique sodales.
                  Etiam tristique tempor
                  suscipit. Phasellus ut
                  risus in lorem
                  vehicula tincidunt ac
                  ut erat. Donec et
                  rutrum erat. Donec et
                  mi felis. Phasellus in
                  turpis libero. Nam
                  auctor mi ut sagittis
                  dapibus.
                </p>
              </div>
              <div
                className="contact__content__item"
                data-aos="fade-left"
                data-aos-delay="1000"
              >
                <Image
                  src={
                    '/assets/images/photo.jpg'
                  }
                  alt=""
                  width={400}
                  height={311}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
