import React from 'react';
import Image from 'next/image';
import phone from "../assets/starter-files-nextjs-animated/assets/phone.png";
import mail from "../assets/starter-files-nextjs-animated/assets/mail.png";

const Contact = () => {
  return (
    <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-black/70 pt-20 pb-8
    rounded-lg space-y-8 lg:space-y-0 lg:space-x-8' id='contact'>

      <div className='flex justify-center items-center'>
        <ul className='space-y-4'>
          <li className='flex items-center'>
            <Image src={phone} alt="phone" className='h-[110px] w-auto mr-6' />
            <p className='text-xl'>+91 9871167878</p>
          </li>
          <li className='flex items-center'>
            <Image src={mail} alt="mail" className='h-[110px] w-auto mr-6' />
            <p className='text-xl'>aryushikapoor@gmail.com</p>
          </li>
        </ul>
      </div>

      {/* Updated div for the "Let's Connect" section */}
      <div className='bg-black/10 pt-12 pb-12 rounded-xl flex-1'> {/* Use flex-1 for full width */}
        <h2 className='text-5xl font-bold text-orange-400 mb-4 pl-4 pr-4'>Let&apos;s Connect</h2>
        <p className='text-black/70 mb-6 pl-4 pr-4'>Feel free to drop a message, and we can schedule a call.</p>
        <form className='space-y-4 pl-4 pr-4' action="https://getform.io/f/akkgqpva" method='POST'>
          <div className='grid md:grid-cols-2 gap-4 '>
            <input type="text" name='first-name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 '
              placeholder='First Name' />
            <input type="text" name='last-name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 '
              placeholder='Last Name' />
            <input type="email" name='email' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 '
              placeholder='Email' />
            <input type="phone" name='phone' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 '
              placeholder='Phone' />
          </div>
          <textarea className='bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 pl-4 pr-4'
            placeholder='Your Message' />
          <button className='bg-orange-700 hover:bg-orange-500 text-black px-6 py-2 w-full font-semibold
          text-xl rounded-xl pl-4 pr-4'>Send Message</button>
        </form>
      </div>

    </div>
  );
}

export default Contact;
