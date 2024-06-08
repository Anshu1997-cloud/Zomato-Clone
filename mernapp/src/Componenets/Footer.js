import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className="row row-cols-5 py-5 my-5 border-top">
    <div class="col">
      <Link href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
       
      </Link>
      <p className="text-muted">© 2024 Zomato</p>
    </div>

    <div className="col">

    </div>

    <div className="col">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
        <li className="nav-item mb-2"><Link to="/features" className="nav-link p-0 text-muted">Features</Link></li>
        <li className="nav-item mb-2"><Link to="/Pricing" className="nav-link p-0 text-muted">Pricing</Link></li>
        <li className="nav-item mb-2"><Link to="/Faq" className="nav-link p-0 text-muted">FAQs</Link></li>
        <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-muted">About</Link></li>
      </ul>
    </div>

    <div className="col">
      <h5>Section</h5>
      <ul className="nav flex-column">
      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
        <li className="nav-item mb-2"><Link to="/features" className="nav-link p-0 text-muted">Features</Link></li>
        <li className="nav-item mb-2"><Link to="/Pricing" className="nav-link p-0 text-muted">Pricing</Link></li>
        <li className="nav-item mb-2"><Link to="/Faq" className="nav-link p-0 text-muted">FAQs</Link></li>
        <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-muted">About</Link></li>
      </ul>
    </div>

    <div className="col">
      <h5>Section</h5>
      <ul className="nav flex-column">
      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
        <li className="nav-item mb-2"><Link to="/features" className="nav-link p-0 text-muted">Features</Link></li>
        <li className="nav-item mb-2"><Link to="/Pricing" className="nav-link p-0 text-muted">Pricing</Link></li>
        <li className="nav-item mb-2"><Link to="/Faq" className="nav-link p-0 text-muted">FAQs</Link></li>
        <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-muted">About</Link></li>
      </ul>
    </div>
  </footer>
    </div>
  )
}

export default Footer