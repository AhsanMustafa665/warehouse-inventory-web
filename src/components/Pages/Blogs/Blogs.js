import React from 'react';

const Blogs = () => {
    return (
        <div style={{textAlign:'left'}} className='container'>
           <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     <strong> 1. Difference between javascript and nodeJS?</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
                <strong>Javascript:</strong> <br />
                i) It is a runtime environment for Javascript that lets a user run this programming language on the server-side as well.<br />
                            ii) NodeJS helps us run JS outside the browser as well.
                            <br />
                            iii) C, C++, and also Javascript are used for writing Node.JS.<br />
                <strong>NodeJS:</strong> <br />
                i) 	It is a programming language. We use JS mainly to write scripts on a website that makes web pages more dynamic in nature.<br />
                ii) We can only run JS on browsers. <br />
                iii) The Javascript is nothing but the ECMA script’s updated version that makes use of the Chrome V8 engine that is written in the C++ language
 </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>2. When should you use NodeJs and when should you use mongoDB? </strong> <br />
                
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Nodejs use:</strong><br />
                            At the same time, while we have mentioned the great things that Node.js brings to web development, for fairness sake, we should also touch upon the Node.js disadvantages, as nothing is perfect.<br />
                            <br />
                            <strong>Mongodb use:</strong><br />
                            MongoDB facilitate to store database in json(javascript object notation) (or simply when data in form of key value pair) this is very fast and efficient so you should use it when you have key value pair to store(json data).
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>3. Difference between SQL and noSQL database?</strong> <br />
            </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>SQL:</strong><br />
      i) SQL or the Structured Query Language is the most common and popular programming language for the relational database management system.  <br />
                            ii) It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis. <br />
                            iii) SQL is easy to learn and manage. <br />
                            <strong>NoSQL:</strong><br />
                            i) NoSQL database provides a mechanism for storage and retrieval of data that is modelled other than tabular form. <br />
                            ii) Simple API for easy user interfaces. <br />
                            iii) Does not require data normalization
                
      </div>
   </div>
   
                </div>
                <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>4. What is the purpose of JWT and how does it work?</strong> <br />
            </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
      i) Implementing a JWT-based authentication solution  <br />
                            ii) Designing an in-house authentication solution <br />
                            iii) Choosing third-party libraries and understanding their documentation<br />
      </div>
   </div>
                </div>
                </div>
                </div>

    );
};

export default Blogs;