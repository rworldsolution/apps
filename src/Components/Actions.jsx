import React, { useState } from 'react'
import img1 from '../assets/img/toggle.svg'
import img2 from '../assets/img/edit.svg'
import img3 from '../assets/img/delete.svg'
import img4 from '../assets/img/toggle-hover.svg'
export default function Actions() {
    const [imageSrc , setImageSrc] = useState(img1)
  return (
    <>
                           <span className="dropdown hoverimg ps-0">
                              <img data-bs-toggle="dropdown" aria-expanded="true" src={imageSrc} onMouseEnter={() => setImageSrc(img4)} onMouseLeave={() => setImageSrc(img1)} className="w-20" />
                              <ul className="dropdown-menu min-w-110" aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-end">
                                 <li className="fromDB"><a className="dropdown-item drop-item bb-1" href="#"><img src={img2} /> Edit </a></li>
                                 <li className="fromDB"><a className="dropdown-item drop-item" href="#"><img src={img3} /> Delete </a></li>
                              </ul>
                           </span>
    </>
  )
}