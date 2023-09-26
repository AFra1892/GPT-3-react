import React from 'react'
import './header.css'
import ai from '../../assets/ai.png'
import people from '../../assets/people.png'

const Header = () => {
  return (
//my code
    // <div className='gpt3__header'>
    //   <div className='gpt3__header-left-side'>
    //     <h1 className='gpt3__header-left-side_heading'>Let's Build Something amazing with GPT-3 OpenAI</h1>
    //     <p className='gpt3__header-left-side_description'>
    //     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
    //     </p>
    //     <div className='gpt3__header-left-side_search-box'>
    //       <input placeholder='Your Email Address' type='text'/>
    //       <button>Get Started</button>
    //     </div>
    //   </div>
    //   <div className='gpt3__header-right-side'>
    //     <img src={lo}/>
    //   </div>
    // </div>

  
    <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
  )
}

export default Header