function Footer() {
  return (
    <footer className='page-footer app-footer'>
      <div className='container'>
        Demo Food React App © {new Date().getFullYear()}
        <span className='right app-fun'>
          Have Fun with React
        </span>
      </div>
    </footer>
  );
}

export { Footer };

