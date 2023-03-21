import React, { Component } from 'react';
import { connect } from 'react-redux';
import IssueList from '../../components/IssueList';
import { getIssues, getRepoDetails } from '../../redux/actions';
import Paginate from 'react-paginate';
import FakeIssueList from '../../components/FakeIssueList';
import './IssueList.css';

function Header({ openIssuesCount, org, repo }) {
  if(openIssuesCount === -1) {
    return (
      <h1>
        Open issues for <OrgRepo org={'Twitter'} repo={'Bootstrap'}/>
      </h1>
    );
  } else {
    const pluralizedIssue = openIssuesCount === 1 ? 'issue' : 'issues';
    return (
      <h1>
        <span className="header__openIssues">{openIssuesCount}</span> open {pluralizedIssue} for <OrgRepo org={'Twitter'} repo={'Bootstrap'}/>
      </h1>
    );
  }
}

function OrgRepo({ org, repo }) {
  return (
    <span>
      <span className="header__org">{org}</span>
      {' / '}
      <span className="header__repo">{repo}</span>
    </span>
  )
}

export class IssueListPage extends Component {

  componentDidMount() {
    const {getIssues, getRepoDetails, org, repo} = this.props;
    
    const currentPage = Math.max(1,
      (parseInt(this.props.location.search.split('=')[1], 10) || 1)
    );

    getRepoDetails(org, repo);
    getIssues(org, repo, currentPage);
  }

  handlePageChange = ({ selected }) => {
    const { history } = this.props

    const newPage = selected + 1;

    history.push('?page='+ newPage);
  }

  componentWillReceiveProps(newProps) {
    const {getIssues, org, repo, location} = newProps;

    // Fetch new issues whenever the page changes
    if(location.search !== this.props.location.search) {
      getIssues(org, repo, location.search.split('=')[1]);
    }
  }

  render() {
    const {
      org, repo, isLoading, issues,
      pageCount, openIssuesCount, issuesError,
      location
    } = this.props;

    if(issuesError) {
      return (
        <div>
          <h1>Something went wrong...</h1>
          <div>{issuesError.toString()}</div>
        </div>
      );
    }
    const currentPage = Math.min(
      pageCount,
      Math.max(1, parseInt(location.search.split('=')[1], 10) || 1)
    ) - 1;

    return (
      <div id="issue-list-page">
        <Header openIssuesCount={openIssuesCount} org={org} repo={repo}/>
        {isLoading
          ? <FakeIssueList/>
          : <IssueList issues={issues}/>
        }
        <div className="issues__pagination">
          <Paginate
            forcePage={currentPage}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageChange}
            nextLabel="&rarr;"
            previousLabel="&larr;" />
        </div>
      </div>
    );
  }
}


const selectIssues = issues =>
  issues.currentPageIssues.map(number => issues.issuesByNumber[number]);

const mapStateToProps = ({ issues, repo }, ownProps) => ({
  issues: selectIssues(issues),
  issuesError: issues.error,
  openIssuesCount: repo.openIssuesCount,
  isLoading: issues.isLoading,
  pageCount: issues.pageCount,
  org: ownProps.params ? ownProps.params.org: '',
  repo: ownProps.params ? ownProps.params.repo: ''
});

const mapDispatch = { getIssues, getRepoDetails };

export default connect(mapStateToProps, mapDispatch)(IssueListPage);
