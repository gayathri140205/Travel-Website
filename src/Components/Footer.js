/* eslint-disable react/jsx-no-target-blank */
import "./FooterStyle.css";


const Footer = () =>{
 
    return (
      <div className="Footer">
      <div className="top">
        <div>
            <h1>Travella</h1>
            <p>Choose  your favourite destination</p>
        </div>
        <div>
        <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-square"></i></a>
        <a href="https://www.whatsapp.com" target="_blank"><i class="fab fa-whatsapp-square"></i></a>
        <a href="https://www.youtube.com" target="_blank"><i class="fab fa-youtube-square"></i></a>
        <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram-square"></i></a>

        </div>
        </div>
        <div className="bottom">
        <div>
    <h4>Company</h4>
    <ol>
        <li>About Us</li>
        <li>Careers</li>
        <li>Contact</li>
        <li>Press</li>
    </ol>    
</div>
<div>
    <h4>Resources</h4>
    <ol>
        <li>Blog</li>
        <li>Guides</li>
        <li>FAQs</li>
        <li>Support Center</li>
    </ol>  
</div>
<div>
    <h4>Legal</h4>
    <ol>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>Cookie Policy</li>
        <li>Compliance</li>
    </ol>          
</div>
<div>
    <h4>Social</h4>
    <ol>
        <li>Join Our Community</li>
        <li>Subscribe to Newsletter</li>
        <li>Events</li>
        <li>Webinars</li>
    </ol>  
</div>

        </div>
        </div>
    )
  }


export default Footer;