import React from 'react'
import Button from '../reuseable/Button';

const Contact = () => {
  return (
    <div id="contacts">
      <h1 className="text-[3.25rem] text-[#f0a6ba] font-bold pb-[10px] mt-[80px] max-md:text-[28px] max-md:pb-[20px]">
        Contact Us
      </h1>
      <p className="text-[#f0a6ba] mb-5 max-md:w-[300px] max-md:text-[14px]">
        Let's bring an incredible idea to life!
      </p>
      <div className="flex items-center justify-between max-md:flex-col">
        <form>
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Your email" /> <br />
          <textarea placeholder="Your message" cols="80" rows="5"></textarea>
          <br />
          <span className="text-left text-[#f0a6ba]">
            <input type="checkbox" /> Send me a copy
          </span>
          <div className='pb-[30px]'>
            <Button
              title="Send a message"
              textColor="#D91F50"
              bgColor="#f0a6ba"
            />
          </div>
        </form>

        <div className="text-[#f0a6ba] text-3xl pb-[50px] max-md:text-xl">
          <p>
            Telephone:<a href="">+2349025105188</a>
          </p>
          <p>
            Email:<a href="">olofinevelyn@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact
