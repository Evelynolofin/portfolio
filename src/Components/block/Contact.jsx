import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className="text-[3.25rem] text-[#D91F50] font-bold pb-[10px] max-md:text-[28px] max-md:pb-[20px]">
        Contact Us
      </h1>
      <p className="text-[#D91F50] mb-5 max-md:w-[300px] max-md:text-[14px]">
        Let's bring an incredible idea to life!
      </p>
      <div className='flex items-center justify-between max-md:flex-col'>
        <form>
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Your email" /> <br />
          <textarea
            placeholder="Your message"
            cols="80"
            rows="5"
          ></textarea>
          <br />
          <span className="text-left text-[#D91F50]">
            <input type="checkbox" /> Send me a copy
          </span>
        </form>

        <div className="text-[#D91F50] text-3xl pb-[50px] max-md:text-xl">
          <p>
            Telephone:<a href="">+2349025105188</a>
          </p>
          <p>
            Email:<a href="">olofinevelyn@gmail.com</a>
          </p>

          <div className="socials">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
