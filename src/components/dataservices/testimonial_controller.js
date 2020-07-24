import React, {useState, useEffect } from "react";
import "../pages/mainpages/landingPage/landingPage.css";

const Testimonial = () => {
  const [testimonials, setTestimonial] = useState("");
  useEffect(() => {
    const apiUrl = "https://api.github.com/users/hacktivist123/repos";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setTestimonial(data));
  });

  return (

    testimonials ? 
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
</div>
     : ''
  )
}

export default Testimonial;
