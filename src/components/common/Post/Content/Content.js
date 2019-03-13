import React from 'react';
import PropTypes from 'prop-types';
import { ContentWrapper } from './styles';

const Content = ({ body }) => (
  <ContentWrapper>
    <div className="content">
      <div className="content__body" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  </ContentWrapper>
);

Content.propTypes = {
  body: PropTypes.string,
};

export default Content;
