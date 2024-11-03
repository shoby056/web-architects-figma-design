import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div>

    <nav>
      <Image
        src="/images/logo-test.png"  
        alt="Image"
        width={70}
        height={43.71}
        className="logo"
      />

      <div className="main">
        <label>Main</label>
      </div>
      
      <ul>
       <li> <Link href="#">Projects</Link></li>
        <li><Link href="#">Certificatins</Link></li>
       <li> <Link href="#">Contact</Link></li>
      </ul>
    </nav>

<div className="main-container">
<div className="left-side">
  
  <p className="text-left">PROJECT <br/> <span className="lorum" >Lorum</span></p>
  
  
  
  <div className="buttons">  
    <button className="left-arrow"> ⬅️ </button>
    <button className="right-arrow"> ➡️ </button>

   
      </div>
 
<p className="bottom-text">0 &nbsp; &nbsp;  /&nbsp; &nbsp;    02 <br/>2</p>


</div>
<div className="right">
  <button className="img-button" >VIEW PROJECTS ➡️</button>
<Image
        src="/images/building.png"  
        alt="Image"
        width={770}
        height={829}
        className="building"
      />
</div>

</div>


{/* 2nd section */}
<div className="second-parent">
  <div className="second-left">

    <Image
        src="/images/img-one.png"  
        alt="Image"
        width={290}
        height={265}
        className="img-one"
      />


<Image
        src="/images/img-two.png"  
        alt="Image"
        width={270}
        height={200}
        className="img-two"
      />

      

  



  </div>




  <div className="second-right">

    <div className="inner-left"> <Image
        src="/images/img-three.png"  
        alt="Image"
        width={270}
        height={140}
        className="img-three"
      />
      
    


      
  </div>


  <div className="inner-right">
    <h1 className="heading">About</h1>
    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Aut autem officiis iste, reprehenderit quia consectetur quibusdam,
        hic enim odio iure velit iusto minima,
       veritatis tempora fuga nobis temporibus a ipsam! 
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatibus illum officia at consectetur quidem sit aut.
        Explicabo totam quod earum aperiam voluptates amet quas optio harum, id similique. Repellendus!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime error harum fugiat iste adipisci beatae placeat dolorum cumque perspiciatis,
        </p>


        <button className="readmore">READ MORE ➡️</button>
    </div>
</div>


</div>



{/* 3rd section */}

<div className="third-section">
  <h1 className="third-heading">Main Focus/Mission Statement</h1>
<div className="third-main">
<div className="left-third"><h1 className="one">1</h1> 
<p className="third-left-content">Lorem ipsum dolor sit amet, <br/>
consectetur adipisicin elit. <br/>
Sed effictuir,lectus et <br/>
facilisis placerat <br/>
</p>
</div>







<div className="third-right">
<h1 className="two">2</h1>
<p className="third-right-content">Lorem ipsum dolor sit amet,dtdyfjfvgv .vghgvcg nmb jhvbj hjvjh <br/>
consectetur adipisicin elit.khbjbj  ,njb <br/>
Sed effictuir,lectus et mbjb vhgvjm <br/>
facilisis placerat <br/>
</p>



</div>
</div>
</div>


{/* // 4th section */}
<div className="four-parent">
  <div className="inner-one">

    <h1 className="four-heading" >Sample<br/>Projects</h1>
    <button className="view-more">VIEW MORE &nbsp; ➡️</button>
<Image
        src="/images/Rectangle 12.png"  
        alt="Image"
        width={650}
        height={255}
        className="rectangle"
        
      />

<Image
        src="/images/Rectangle 17.png"  
        alt="Image"
        width={630}
        height={255}
        className="rectangle"
        id="shoby"
      />


<Image
        src="/images/Image 15.png"  
        alt="Image"
        width={570}
        height={255}
        className="rectangle"
      />
      </div>
<div className="inner-two">
<Image
        src="/images/image 16.png"  
        alt="Image"
        width={270}
        height={255}
        className="rectangle-sixteen"
      />

<Image
        src="/images/image 17.png"  
        alt="Image"
        width={490}
        height={255}
        className="rectangle-sixteen"
      />


<Image
        src="/images/image 18.png"  
        alt="Image"
        width={400}
        height={255}
        className="rectangle-sixteen"
      />
</div>

<button className="all-projects">ALL PROJECTS ➡️</button>







</div>

{/* 5th section */}
<div className="five-parent">
<h1 className="five-main-heading">Contact Us</h1>
<div className="five-child">
  <div className="inner-five-left">
    <form action="">
    <input type="text" name="name" placeholder="Name " required />
    <input type="number" name="number"   placeholder="Phone Number *" required  />
    <input type="text" name="email"   placeholder="Email *" required  />
    <input type="text" name="interested-in"   placeholder="Interested in "   />

    <textarea id="message" name="message" placeholder="Message *"required rows={5} cols={33} ></textarea>

 </form>

  </div>

  <div className="inner-five-right">
  <Image
        src="/images/image 12.png"  
        alt="Image"
        width={749}
        height={359}
        className="image-twelve"
      />
  </div>
</div>


</div>


<footer>


  <div className="parent-footer">
    <div className="one-coloumn">
<Image
        src="/images/Group 11 1.png"  
        alt="Image"
        width={70}
        height={43.71}
        className="logoo"
      />
      </div>

<div className="two-coloumn">
<p className="second-content " id="akash" >Information</p>
  <p className="second-content ">Main</p>
  <p className="second-content ">Gallery</p>
  <p className="second-content ">Projects</p>
  <p className="second-content ">Certifications</p>
  <p className="second-content ">Contacs</p>

</div>


<div className="three-coloumn"><div className="icon"><i className="fa-solid fa-location-dot" aria-hidden="true"><span className="shobii">  1234 Sample Street Austin </span></i></div>


  <br/>
  <br/>
  <div className="icon"><i className="fa-solid fa-phone" aria-hidden="true"><span className="shobii"> 03142209326</span></i></div>
  
  <div className="icon"><i className="fa-solid fa-envelope" aria-hidden="true"><span className="shobii"> shkshoaib056@gmail.com</span></i></div>

</div>


<div className="four-coloumn">
<h1 className="social">Social Media</h1>
  
<i className="fa-brands fa-facebook" aria-hidden="true"></i>
<i className="fa-brands fa-linkedin" aria-hidden="true"></i>
<i className="fa-brands fa-square-twitter" aria-hidden="true"></i>
<i className="fa-brands fa-github" aria-hidden="true"></i>

</div>










</div>
<hr className="hec" />
</footer>

</div>
  );
}
