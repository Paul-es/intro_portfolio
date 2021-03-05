import React,{Component} from 'react';
import Box from '@material-ui/core/Box';
import './style.css'

class Portfoilio extends Component {
    render() {
      return (
        <section id="portfolio">
        <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
        <Box p={1}>
          <h1>Projects</h1>
        </Box>
        </Box>
            <div class="cards-list" style={{width:'100%', backgroundColor:'white'}}>

        <a
          href="https://cci-fisat.web.app/"
        >
        <div class="card 1">
          <div class="card_image"> <img src="https://media.giphy.com/media/ZgTR3UQ9XAWDvqy9jv/giphy.gif" /> </div>
          <div class="card_title title-white">
              <br />
            <h1 style={{color:'black',fontSize:20}}>CCI Web App</h1>
          </div>
        </div>
        </a>
        
        <a
         href="https://gitlab.com/paul.eliassojan"
         >
        <div class="card 3">
          <div class="card_image">
            <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
          </div>
          <div class="card_title">
            <p>Native Apps</p>
          </div>
        </div>
        </a>

        <a
          href="https://gitlab.com/paul.eliassojan/face-mask-detection"
         >
          <div class="card 4">
          <div class="card_image">
            <img src="https://media.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif" />
            </div>
          <div class="card_title title-black">
              <br/>
            <h1 style={{color:'white',fontSize:18}}>Face Mask Detection</h1>
          </div>
          </div>
          </a>  
        </div>
        </section>
            );
        }
      }
export default Portfoilio;
