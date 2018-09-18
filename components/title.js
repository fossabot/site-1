export default ({ children }) => (
  <h1>
    <a href="#">{children}</a>
    <style jsx>{`
      h1 {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 22px;
        text-align: center;
      }
      a {
        color: #0366d6;
        text-decoration: none;
      }
      a:hover {
        background-color: #0366d6;
        color: #fff;
      }
    `}</style>
  </h1>
);
