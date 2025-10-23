import React from "react";
const PropertyPage = ({ params, searchParams }) => {
  const { id } = React.use(params);
  return <div>PropertyPage {id}</div>;
};

export default PropertyPage;
