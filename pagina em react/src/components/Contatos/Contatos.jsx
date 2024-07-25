import { Layout } from '../../../src/Layout'
import './Contatos.css'

export default function contatos() {

    return ( 
      <Layout>
        <div className='backgroundVini'>
      <div class="card text-center card; mx-auto w-100 h-5 " style={{backgroundColor:  '#FFFFFF'}}>
          <div class="card-body; d-flex w-40 h-50" >
            <div className='buttonVini'>
              <div className='imgVini'>
                <img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/instagram.svg" alt="logo-instagram" />
              </div>
              <p class="card-text"></p>
              <a href="https://www.instagram.com/digitalcollegebr/" class="btn btn-danger">Fale Conosco</a>
              </div>
            <div className='buttonVini'>
              <div className='imgVini'>
                <img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/facebook.svg" alt="logo-facebook" />
              </div>
              <p class="card-text"></p>
              <a href="https://www.facebook.com/digitalcollegebr" class="btn btn-danger">Fale Conosco</a>
            </div>
            <div className='buttonVini'>
              <div className='imgVini'>
                <img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/twitter.svg" alt="logo-twitter" />
              </div>
                <p class="card-text"></p>
                <a href="https://x.com/eaicollegers" class="btn btn-danger">Fale Conosco</a>
            </div>
          </div>
        </div>
        </div>
        </Layout>
      );
};