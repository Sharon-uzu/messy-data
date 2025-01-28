import React from 'react'
import m1 from '../Images/how it works.jpg'

const How = () => {
  return (
    <div className='h-w'>
        <div className="works">

            <div className='h-one'>
                <h2>How It Work</h2>
                <p>Open the Door To Your Future and Elevate Your Tech Career</p>
            </div>
            
            <div className="h-two">
                <img src={m1} alt="" />
            </div>

            <div className="h-three">
                <div className="crd">
                    <div className="c-c">
                        <h1>1</h1>
                        <div>
                            <h3>Selection</h3>
                            <p>Applicants are carefully selected.</p>
                        </div>
                    </div>
                </div>

                <div className="crd">
                    <div className="c-c">
                        <h1>2</h1>
                        <div>
                            <h3>Selection</h3>
                            <p>Applicants are carefully selected.</p>
                        </div>
                    </div>
                </div>

                <div className="crd">
                    <div className="c-c">
                        <h1>3</h1>
                        <div>
                            <h3>Selection</h3>
                            <p>Applicants are carefully selected.</p>
                        </div>
                    </div>
                </div>

                <div className="crd">
                    <div className="c-c">
                        <h1>4</h1>
                        <div>
                            <h3>Selection</h3>
                            <p>Applicants are carefully selected.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default How