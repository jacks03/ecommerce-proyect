import React from 'react'

const Head = () => {
  return (
    <>
    <section className='Head'>
        <div className="container d_flex">
            <div className="left row">
                <i className='fa fa-phone'></i>
                <label> 123 321 123</label>
                <i className='fa fa-envelope'></i>
                <label> ejemplo@gmail.com</label>
            </div>
            <div className="right row RText">
            <label> Theme FAQ' s</label>
            <label> ¿Necesita ayuda?</label>
            <span>Peru</span>
            <label htmlFor="">EN</label>
            <span>Chile</span>
            <label htmlFor="">USD</label>
            
            </div>
        </div>
    </section>
    </>
  )
}

export default Head
