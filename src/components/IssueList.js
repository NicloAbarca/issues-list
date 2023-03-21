import React from 'react';
import Issue from './Issue';
import './IssueList.css';

export default function IssueList({ issues }) {
  return (
    <ul className="issues">
      {issues.map(issue =>
        <li key={issue.id} className="issues__issue-wrapper">
            <Issue
              number={issue.number}
              user={issue.user}
              title={issue.title}
              summary={issue.body}
              labels={issue.labels} />
        </li>
      )}
    </ul>
  );
}
