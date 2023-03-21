import React from 'react';
import { Link } from 'react-router-dom'
import UserWithAvatar from './UserWithAvatar';
import IssueLabels from './IssueLabels';
import { shorten } from '../utils/stringUtils';
import './Issue.css';

export default function Issue({ number, title, labels, user, summary }) {
  return (
    <div className="issue">
      <UserWithAvatar user={user}/>
      <div className="issue__body">
        <Link to={`/twitter/bootstrap/issues/${number}`}>
          <span className="issue__number">#{number}</span>
          <span className="issue__title">{title}</span>
        </Link>
        <p className="issue__summary">{shorten(summary)}</p>
        <IssueLabels labels={labels}/>
      </div>
    </div>
  );
}
