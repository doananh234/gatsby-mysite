import React from 'react';
import moment from 'moment';
import Post from '../../components/common/Post';

const PostPreview = ({ entry, widgetFor }) => {
  const body = widgetFor('body');
  const title = entry.getIn(['data', 'title']);
  const tags = entry.getIn(['data', 'tags']);
  const date = entry.getIn(['data', 'date']);
  // post
  console.log('post', tags);
  const post = {
    html: body,
    frontmatter: {
      tags,
      title,
      date: moment(date).format('DD-MM-YYYY'),
    },
    fields: {
      // tagSlugs: tags.split(','),
      tagSlugs: [],
    },
  };
  console.log('post', post);
  return (
    <div className="post">
      <Post post={post} />
      {/* <h1 className="post__title">{title}</h1>
      <div className="post__body">{body}</div> */}
    </div>
  );
};

export default PostPreview;
