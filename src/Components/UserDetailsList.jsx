import React from 'react'

export default function UserDetailsList(props) {
  return (
    <>
    <div className='col-sm-6'>
        <div className='box_gray' style={{paddingTop: '15px' , paddingBottom: '15px'}}>
            <img src={props.img} />
            <div className='mt-10'>
                <p className='box_subtext'>{props.text}</p>
                <p className='box_lgtext'>{props.count}</p>
            </div>
        </div>
    </div>
    </>
  )
}
