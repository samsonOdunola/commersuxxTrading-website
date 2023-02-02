const Footer = ({ content }) => {
  return (
    <footer>
      {content.map((item) => {
        const { title, children } = item;
        return (
          <div>
            <h3>{title}</h3>
            {children.map((child) => {
              return <p>{child}</p>;
            })}
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;
