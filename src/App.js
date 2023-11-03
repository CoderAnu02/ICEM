import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img width="293" height="106" src="https://telphatech.com/wp-content/uploads/2023/10/Telphatech-1200-293x106.png" />

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">SERVICES</a>
              </li>
            
            <li class="nav-item">
                <a class="nav-link" href="#">PRODUCTS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">BLOG</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"> CAREERS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"> CONTACTS</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="poster-container">
        <div>
          <h2>Welcome To Telphatech </h2>
          <h3>Innovating  To Change The Technical World</h3>
          <button type="button" class="btn btn-light">Explore More</button>
          <button type="button" class="btn btn-info">Get in Touch</button>
        </div>
        <div>
          <img width="493px" height="740px" src="https://telphatech.com/wp-content/uploads/2023/10/Untitled-design-2-1365x2048.png" />
        </div>
      </div>
    </div>
  );
}

export default App;
