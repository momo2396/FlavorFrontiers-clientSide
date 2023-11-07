import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div className="flex flex-col gap-10 max-w-[1440px] mx-auto px-5 py-20">
      <Helmet>
        <title>Blog-Flavor Frontiers</title>
      </Helmet>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          What is oneWay data binding?
        </div>
        <div className="collapse-content text-red-800">
          <p>
            One-way data binding is a concept used in web development and user
            interfaces to describe a unidirectional flow of data from a source
            (usually a model or data source) to a target (typically a UI
            element) without the ability for the target to influence or update
            the source. In one-way data binding, changes in the source data are
            reflected in the target, but changes in the target do not affect the
            source.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What is npm in node.js?
        </div>
        <div className="collapse-content text-red-800">
          <p>
            NPM stands for "Node Package Manager." It is a package manager and
            dependency management tool that is commonly used in the Node.js
            ecosystem. npm is a command-line utility that allows you to easily
            install, manage, and share JavaScript libraries and packages.{" "}
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Difference between MongoDB vs MySQL
        </div>
        <div className="collapse-content text-red-800">
          <p>
            MongoDB and MySQL are both popular database management systems, but
            they have some fundamental differences in terms of their data
            models, query languages, use cases, and other aspects.MongoDB:
            MongoDB is a NoSQL database that uses a document-oriented data
            model. It stores data in collections, which are similar to tables in
            relational databases, but documents within collections can have
            varying structures. MySQL: MySQL is a relational database management
            system (RDBMS) that uses a tabular data model. It stores data in
            tables with fixed schemas and enforces data consistency through
            predefined relationships.MongoDB: MongoDB is schema-less, which
            means that documents within a collection do not need to have the
            same structure. You can easily add or remove fields without
            affecting other documents in the collection. MySQL: MySQL uses a
            rigid schema where tables have predefined structures. Any changes to
            the schema typically require altering the table, which can be a more
            complex process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
