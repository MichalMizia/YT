interface TeamArticleProps {}

const TeamArticle = ({}: TeamArticleProps) => {
  return (
    <article className="article flow !mr-auto pb-20">
      <h1>Empowering Digital Excellence</h1>

      <p>
        Meet our vibrant web development team, masters of the digital realm. Our
        skilled developers bring passion and expertise to every project,
        ensuring a seamless blend of design and functionality.
      </p>

      <h2>What Sets Us Apart:</h2>

      <ul>
        <li>
          <strong>Collaborative Brilliance:</strong> Our teamwork is
          unparalleled, with each member contributing unique skills to tackle
          challenges creatively.
        </li>
        <li>
          <strong>Continuous Learning:</strong> We stay ahead in technology
          trends, guaranteeing cutting-edge solutions for your digital needs.
        </li>
      </ul>

      <p>
        Our client-centric approach goes beyond code. We build lasting
        relationships, understanding your vision and providing ongoing support.
        Join us on a journey where innovation meets reliability. Experience the
        difference with our web development team!
      </p>
    </article>
  );
};

export default TeamArticle;
