

const Blogs = () => {
    return (
      <div className="my-20">
        <div className="mockup-window border border-base-300">
          <p className="text-lg my-4 mx-4">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </p>
          <div className=" px-10 py-16 border-t border-base-300">
            <p className="text-2xl font-semibold"> Answer Question</p>
            <p>
              An access token and a refresh token are commonly used in
              authentication systems to grant and manage access to protected
              resources. Here s an overview of what they are, how they work, and
              where they should be stored on the client-side
            </p>
            <p>
              1. Access Token: An access token is a credential that represents
              the authorization granted to a client such as a user or an
              application to access specific resources on a server. It typically
              has a limited lifespan and is used to authenticate subsequent
              requests to protected endpoints. Access tokens are commonly used
              in token-based authentication mechanisms like OAuth.
            </p>
            <p>
              2. Refresh Token: A refresh token is a long-lived credential that
              is used to obtain a new access token once the original token
              expires. It is usually issued alongside the access token during
              the authentication process. When an access token expires, the
              client can send the refresh token to the server to request a new
              access token without requiring the user to re-enter their
              credentials. Refresh tokens are securely stored and should have a
              longer expiration period than access tokens.
            </p>
            <p>
              3.How they work together: When a user logs in or authorizes an
              application, they typically receive both an access token and a
              refresh token. The access token is used to authenticate API
              requests to access protected resources. Once the access token
              expires, the client can send the refresh token to the server in
              exchange for a new access token. This process can be repeated
              until the refresh token itself expires or is invalidated.
            </p>
          </div>
        </div>

        <div className="mockup-window border border-base-300">
          Compare SQL and NoSQL databases?
          <div className="px-10 py-16 border-t border-base-300">
            <p className="text-2xl font-semibold"> Answer Question</p>
            <p>
              SQL databases are vertically scalable, while NoSQL databases are
              horizontally scalable. SQL databases are table-based, while NoSQL
              databases are document, key-value, graph, or wide-column stores.
              SQL databases are better for multi-row transactions, while NoSQL
              is better for unstructured data like documents or JSON.
            </p>
          </div>
        </div>

        <div className="mockup-window border border-base-300">
          What is express js? What is Nest JS
          <div className="px-10 py-16 border-t border-base-300">
            <p className="text-2xl font-semibold"> Answer Question</p>
            <p>
              Express is a minimalist and flexible framework that is easy to use
              and has a large community of developers. NestJS, on the other
              hand, is a newer framework that provides additional features such
              as dependency injection, a modular architecture, and an intuitive
              CLI.
            </p>
          </div>
        </div>

        <div className="mockup-window border border-base-300">
          What is MongoDB aggregate and how does it work
          <div className="px-10 py-16 border-t border-base-300">
            <p className="text-2xl font-semibold"> Answer Question</p>
            <p>
              Aggregation is a way of processing a large number of documents in
              a collection by means of passing them through different stages.
              The stages make up what is known as a pipeline. The stages in a
              pipeline can filter, sort, group, reshape and modify documents
              that pass through the pipeline.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blogs;