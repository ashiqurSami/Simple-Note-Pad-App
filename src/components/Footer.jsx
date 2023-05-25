function Footer()
{
   
    const currentYear=new Date().getFullYear();

   return (
       <footer>
        <p><b>Copyright ⓒ {currentYear} </b> </p>
       </footer>
   );
}

export default Footer