import React from 'react';
import {
  MDBFooter,   
  MDBIcon
} from 'mdbreact';

export default function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <div className='container p-4 pb-0'>
        <section className='mb-4'>
          <a
            className='btn btn-primary btn-floating m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a
            className='btn btn-info btn-floating m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </a>

          <a
            className='btn btn-danger btn-floating m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </a>
          <a
            className='btn btn-warning btn-floating m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a
            className='btn btn-dark btn-floating m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </a>
        </section>
      </div>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright: 
        <a className='text-white' href='https://engdeveloper.com/'>
          Engdeveloper.com
        </a>
      </div>
    </MDBFooter>
  );
}