import React from 'react'
export default function Nav(props) {
  return (
    <>
    <li className='nav-item'>
                <a className={`nav-link-btn ${props.active}`}>
                    <img src={props.img} />
                    <span>{props.navText}</span>
                </a>
            </li>
    </>
  )
}
