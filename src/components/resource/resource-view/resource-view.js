import React from 'react';
import PropTypes from 'prop-types';

import ManagedResourceEdit from '../edit-managed-title';
import CustomResourceEdit from '../edit-custom-title';

export default function ResourceView({ model, ...props }) {
  let initialValues = {};
  let View;

  if (model.isTitleCustom === true || model.destroy.params.isTitleCustom === true) {
    View = CustomResourceEdit;
    initialValues = {
      isSelected: model.isSelected,
      customCoverages: model.customCoverages,
      coverageStatement: model.coverageStatement,
      customEmbargoValue: model.customEmbargoPeriod.embargoValue,
      customEmbargoUnit: model.customEmbargoPeriod.embargoUnit,
      customUrl: model.url
    };
  } else if (model.isTitleCustom === false) {
    View = ManagedResourceEdit;
    initialValues = {
      isSelected: model.isSelected,
      customCoverages: model.customCoverages,
      coverageStatement: model.coverageStatement,
      customEmbargoValue: model.customEmbargoPeriod.embargoValue,
      customEmbargoUnit: model.customEmbargoPeriod.embargoUnit
    };
  }

  return (
    <View
      model={model}
      initialValues={initialValues}
      {...props}
    />
  );
}

ResourceView.propTypes = {
  model: PropTypes.object.isRequired
};