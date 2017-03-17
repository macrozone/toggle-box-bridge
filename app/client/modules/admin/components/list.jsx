import React from 'react';
import flat from 'flat';

const List = ({
  resultsPerPage,
  collectionName,
  collection,
  publications,
  gotoEdit,
  columns,
  columnMetadata,
  listTransformEntry,
  filteredFields,
  baseQuery,
  sortBy,
  MeteorGriddle,
}) => (
  <div>
    <MeteorGriddle
      transformResult={listTransformEntry || flat}
      columns={columns}
      columnMetadata={columnMetadata}
      publication={publications.list}
      collection={collection}
      externalResultsPerPage={resultsPerPage}
      matchingResultsCount={publications.counts}
      filteredFields={filteredFields}
      initialSort={sortBy || columns[0]}
      onRowClick={event => gotoEdit(collectionName, event.props.data._id)}
      showFilter
      baseQuery={baseQuery}
    />
  </div>);

List.propTypes = {

};

List.defaultProps = {
  showActions: true,
  resultsPerPage: 100,
};

List.displayName = 'Admin.List';

export default List;
