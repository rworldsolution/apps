import React from 'react'

export default function OverviewCard(props) {
  return (
    <>
        <div className='col-sm-6'>
            <div className={`${props.bg_primary}`}>
                <img src={props.img} className='w-30 me-10'></img>
                <div>
                    <p className='box_subtext'>{props.text}</p>
                    <p className='box_lgtext'>{props.cout}</p>
                </div>
            </div>
        </div>
    </>
  )
}
