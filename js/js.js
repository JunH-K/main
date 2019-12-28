(function () {
  let count = 0;

  function interval() {
    const ul = document.querySelector( '.slider ul' );
    const childLength = ul.children.length;
    const index = count % childLength;

    Array.from( ul.children ).forEach( (e, i) => {
      if ( i === index ){
        return e.classList.remove( 'hide' );
      }
      e.classList.add( 'hide' );
    } );
    count += 1;
  }

  setInterval( interval, 4000 );
})();




