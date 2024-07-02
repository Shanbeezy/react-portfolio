function Footer() {

    // Social media profile links
    const icons = [
      {
        name: "fab fa-github",
        link: "https://github.com/Shanbeezy"
      },
      {
        name: "fab fa-linkedin",
        link: "https://www.linkedin.com/in/shannon-james-0930827a/"
      },
      {
        name: "fab fa-facebook",
        link: "https://www.facebook.com/Shannon.breezy07/"
      }
    ]
  
    return (
      <footer className="flex-row px-1">
        {icons.map(icon =>
        (
          <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
        )
          )}
      </footer>
    );
  }
  
  export default Footer;
  