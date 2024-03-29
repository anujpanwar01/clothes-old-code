import "./PreviewCollection.scss";
import CollectionItem from "../collection-item/CollectionItem";
import React from "react";

const CollectionPreview = function ({ title, items }) {
  console.log(title);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(({ id, ...otherItemProps }) => {
            return <CollectionItem key={id} {...otherItemProps} />;
          })}{" "}
      </div>
    </div>
  );
};

export default CollectionPreview;
