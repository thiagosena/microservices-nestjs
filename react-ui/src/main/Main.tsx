import React, { useEffect, useState } from 'react';
import { Product } from '../interfaces/Product';

const Main = () => {
   const [products, setProducts] = useState([] as Product[])

   useEffect(() => {
      (
         async () => {
            const response = await fetch('http://localhost:8001/api/products')

            const data = await response.json()

            setProducts(data)

            if (data.length === 0) {
               let element = document.getElementsByClassName('noProductsInCart')
               element.item(0)?.classList.add('show')
            }
         }
      )()
   }, [])

   const like = async (id: number) => {
      console.log('id selected: ', id)
      await fetch(`http://localhost:8002/api/products/${id}/like`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' }
      })

      setProducts(products.map(
         (p: Product) => {
            if (p.id === id) {
               p.likes++;
            }
            return p;
         }
      ))
   }
   return (
      <div>
         <main>
            <div className="header_section">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-3">
                        <div className="logo"><a href="#"><img src={'images/logo.png'} /></a></div>
                     </div>
                     <div className="col-sm-9">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon" />
                           </button>
                           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                              <div className="navbar-nav">
                                 <a className="nav-item nav-link" href="/">Home</a>
                                 <a className="nav-item nav-link" href="/admin/products">Admin</a>
                              </div>
                           </div>
                        </nav>
                     </div>
                  </div>
               </div>
               {/* <div className="banner_section">
                  <div className="container-fluid">
                     <section className="slide-wrapper">
                        <div className="container-fluid">
                           <div id="myCarousel" className="carousel slide" data-ride="carousel">
                              <ol className="carousel-indicators">
                                 <li data-target="#myCarousel" data-slide-to="0" className="active"/>
                              </ol>

                              <div className="carousel-inner">
                                 <div className="carousel-item active">
                                    <div className="row">
                                       <div className="col-sm-2 padding_0">
                                       </div>
                                       <div className="col-sm-5">
                                          <div className="banner_taital">
                                             <h1 className="banner_text">New Running Shoes </h1>
                                             <h1 className="mens_text"><strong>Men's Like Plex</strong></h1>
                                             <p className="lorem_text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                             <button className="buy_bt">Buy Now</button>
                                             <button className="more_bt">See More</button>
                                          </div>
                                       </div>
                                       <div className="col-sm-5">
                                          <div className="shoes_img"><img src={'images/running-shoes.png'} alt={'Shoes'}/></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>
                  </div>
               </div> */}
            </div>

            <div className="layout_padding collection_section">
               <div className="container">
                  <div className="row">
                     {products.map(
                        (p: Product) => {
                           return (

                              <div className="col-md-4" key={p.id}>
                                 <div className="card mb-4 shadow-sm">
                                    <img src={p.image} width="420" alt={'Product'} />
                                    <div className="card-body">
                                       <p className="card-text">{p.title}</p>
                                       <div className="d-flex justify-content-between align-items-center">
                                          <div className="btn-group">
                                             <button type="button" className="btn btn-sm btn-outline-secondary"
                                                onClick={() => like(p.id)}>Like
                                             </button>
                                          </div>
                                          <small className="text-muted">{p.likes} likes</small>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           )
                        }
                     )}
                  </div>
                  <div className={`noProductsInCart`}>
                     <img width="120" src={'images/exclamation-circle.png'} alt="no-products-found"></img>
                     <h3>No Products Have Been Added Yet!</h3>
                  </div>
               </div>
            </div>

         </main>
      </div>
   );
};

export default Main;