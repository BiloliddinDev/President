import React from 'react'

const notfound = () => {
  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        backgroundColor: '#fff',
        padding: '1rem'
      }}>
        <h1 style={{fontFamily: 'Inter',fontWeight: 400,fontSize: '72px',lineHeight: '60px',letterSpacing: '-2%',textAlign: 'center',color: '#000000',marginBottom: '1rem'}}>404</h1>
        <p style={{fontFamily: 'Inter',fontWeight: 500,fontSize: '20px',lineHeight: '10px',letterSpacing: '0%',textAlign: 'center', color:'#0E1422', marginBottom: '20px'}}>
          Sorry, we couldn't find the page you were looking for.
        </p>
        <p style={{fontFamily: 'Inter',fontWeight: 500,fontSize: '18px',lineHeight: '280px',letterSpacing: '0%', textAlign: 'center', color:'#000000',marginBottom: '30px'}}>
          It may have been removed, changed or is temporarily unavailable.<br />
          Please return to our home page to continue browsing our site or discover the products selected for you.
        </p>
        <a 
          href="/" 
          style={{
            backgroundColor: '#00093F',
            color: '#FFFFFF',
            padding: '0.5rem 1.5rem',
            borderRadius: '0.375rem',
            textDecoration: 'none'
          }}
        >
          Visit our Homepage
        </a>
      </div>
  )
}

export default notfound
