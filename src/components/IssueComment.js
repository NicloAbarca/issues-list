import React from 'react';
import ReactMarkdown from 'react-markdown';
import UserWithAvatar from './UserWithAvatar';
import { insertMentionLinks } from '../utils/stringUtils';

export default function IssueComment({ comment }) {
  return (
    <div className="issue-detail__comment">
      <UserWithAvatar user={comment.user} orientation="horizontal"/>

      <div className="issue-detail__comment__body">
        <ReactMarkdown className="markdown" source={insertMentionLinks(comment.body)}/>
      </div>
    </div>
  );
}
