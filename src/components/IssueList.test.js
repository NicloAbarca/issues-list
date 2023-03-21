import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { checkSnapshot } from '../utils/testUtils';
import IssueList from './IssueList';
Enzyme.configure({ adapter: new Adapter() });
let issues = [
{
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27931",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27931/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27931/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27931/events",
    "html_url": "https://github.com/twbs/bootstrap/pull/27931",
    "id": 394419040,
    "node_id": "MDExOlB1bGxSZXF1ZXN0MjQxMTcyMDM0",
    "number": 27931,
    "title": "toasts: mention that positioning is manual.",
    "user": {
      "login": "XhmikosR",
      "id": 349621,
      "node_id": "MDQ6VXNlcjM0OTYyMQ==",
      "avatar_url": "https://avatars2.githubusercontent.com/u/349621?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/XhmikosR",
      "html_url": "https://github.com/XhmikosR",
      "followers_url": "https://api.github.com/users/XhmikosR/followers",
      "following_url": "https://api.github.com/users/XhmikosR/following{/other_user}",
      "gists_url": "https://api.github.com/users/XhmikosR/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/XhmikosR/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/XhmikosR/subscriptions",
      "organizations_url": "https://api.github.com/users/XhmikosR/orgs",
      "repos_url": "https://api.github.com/users/XhmikosR/repos",
      "events_url": "https://api.github.com/users/XhmikosR/events{/privacy}",
      "received_events_url": "https://api.github.com/users/XhmikosR/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 143597,
        "node_id": "MDU6TGFiZWwxNDM1OTc=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/docs",
        "name": "docs",
        "color": "007bff",
        "default": false
      },
      {
        "id": 250176882,
        "node_id": "MDU6TGFiZWwyNTAxNzY4ODI=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/v4",
        "name": "v4",
        "color": "563d7c",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-12-27T15:14:08Z",
    "updated_at": "2018-12-27T15:16:13Z",
    "closed_at": null,
    "author_association": "MEMBER",
    "pull_request": {
      "url": "https://api.github.com/repos/twbs/bootstrap/pulls/27931",
      "html_url": "https://github.com/twbs/bootstrap/pull/27931",
      "diff_url": "https://github.com/twbs/bootstrap/pull/27931.diff",
      "patch_url": "https://github.com/twbs/bootstrap/pull/27931.patch"
    },
    "body": "Closes #27919 "
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27930",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27930/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27930/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27930/events",
    "html_url": "https://github.com/twbs/bootstrap/issues/27930",
    "id": 394405421,
    "node_id": "MDU6SXNzdWUzOTQ0MDU0MjE=",
    "number": 27930,
    "title": "Link to the latest version is not available in dropdown",
    "user": {
      "login": "maxkorz",
      "id": 25089646,
      "node_id": "MDQ6VXNlcjI1MDg5NjQ2",
      "avatar_url": "https://avatars2.githubusercontent.com/u/25089646?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/maxkorz",
      "html_url": "https://github.com/maxkorz",
      "followers_url": "https://api.github.com/users/maxkorz/followers",
      "following_url": "https://api.github.com/users/maxkorz/following{/other_user}",
      "gists_url": "https://api.github.com/users/maxkorz/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/maxkorz/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/maxkorz/subscriptions",
      "organizations_url": "https://api.github.com/users/maxkorz/orgs",
      "repos_url": "https://api.github.com/users/maxkorz/repos",
      "events_url": "https://api.github.com/users/maxkorz/events{/privacy}",
      "received_events_url": "https://api.github.com/users/maxkorz/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 143597,
        "node_id": "MDU6TGFiZWwxNDM1OTc=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/docs",
        "name": "docs",
        "color": "007bff",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 1,
    "created_at": "2018-12-27T14:16:04Z",
    "updated_at": "2018-12-27T15:16:14Z",
    "closed_at": null,
    "author_association": "NONE",
    "body": "https://getbootstrap.com/docs/4.1/getting-started/introduction/\r\nhttps://getbootstrap.com/docs/4.0/getting-started/introduction/\r\n\r\n![image](https://user-images.githubusercontent.com/25089646/50483031-e336bc80-09fa-11e9-8484-ee64d36cb2f0.png)\r\n\r\nP.S. it would be cool to have a special tag for the latest version, something like\r\nhttps://getbootstrap.com/docs/latest/getting-started/introduction/"
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27929",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27929/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27929/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27929/events",
    "html_url": "https://github.com/twbs/bootstrap/pull/27929",
    "id": 394348507,
    "node_id": "MDExOlB1bGxSZXF1ZXN0MjQxMTE2MzE5",
    "number": 27929,
    "title": "Fix custom select font sizes",
    "user": {
      "login": "MartijnCuppens",
      "id": 11559216,
      "node_id": "MDQ6VXNlcjExNTU5MjE2",
      "avatar_url": "https://avatars3.githubusercontent.com/u/11559216?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/MartijnCuppens",
      "html_url": "https://github.com/MartijnCuppens",
      "followers_url": "https://api.github.com/users/MartijnCuppens/followers",
      "following_url": "https://api.github.com/users/MartijnCuppens/following{/other_user}",
      "gists_url": "https://api.github.com/users/MartijnCuppens/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/MartijnCuppens/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/MartijnCuppens/subscriptions",
      "organizations_url": "https://api.github.com/users/MartijnCuppens/orgs",
      "repos_url": "https://api.github.com/users/MartijnCuppens/repos",
      "events_url": "https://api.github.com/users/MartijnCuppens/events{/privacy}",
      "received_events_url": "https://api.github.com/users/MartijnCuppens/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 210556,
        "node_id": "MDU6TGFiZWwyMTA1NTY=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/css",
        "name": "css",
        "color": "563d7c",
        "default": false
      },
      {
        "id": 250176882,
        "node_id": "MDU6TGFiZWwyNTAxNzY4ODI=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/v4",
        "name": "v4",
        "color": "563d7c",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-12-27T09:51:04Z",
    "updated_at": "2018-12-27T09:51:05Z",
    "closed_at": null,
    "author_association": "MEMBER",
    "pull_request": {
      "url": "https://api.github.com/repos/twbs/bootstrap/pulls/27929",
      "html_url": "https://github.com/twbs/bootstrap/pull/27929",
      "diff_url": "https://github.com/twbs/bootstrap/pull/27929.diff",
      "patch_url": "https://github.com/twbs/bootstrap/pull/27929.patch"
    },
    "body": "The font sizes of custom selects are unchangeable. This PR syncs the custom select font size with `$input-font-size`.\r\n\r\nAlso `$custom-select-font-size-sm` is `$input-btn-font-size-sm` by default, while it should be `$input-btn-font-size`. Same for `$custom-select-font-size-lg`."
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27928",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27928/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27928/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27928/events",
    "html_url": "https://github.com/twbs/bootstrap/issues/27928",
    "id": 394345674,
    "node_id": "MDU6SXNzdWUzOTQzNDU2NzQ=",
    "number": 27928,
    "title": "gh-pages: find a way to include sub-sitemaps",
    "user": {
      "login": "XhmikosR",
      "id": 349621,
      "node_id": "MDQ6VXNlcjM0OTYyMQ==",
      "avatar_url": "https://avatars2.githubusercontent.com/u/349621?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/XhmikosR",
      "html_url": "https://github.com/XhmikosR",
      "followers_url": "https://api.github.com/users/XhmikosR/followers",
      "following_url": "https://api.github.com/users/XhmikosR/following{/other_user}",
      "gists_url": "https://api.github.com/users/XhmikosR/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/XhmikosR/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/XhmikosR/subscriptions",
      "organizations_url": "https://api.github.com/users/XhmikosR/orgs",
      "repos_url": "https://api.github.com/users/XhmikosR/repos",
      "events_url": "https://api.github.com/users/XhmikosR/events{/privacy}",
      "received_events_url": "https://api.github.com/users/XhmikosR/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 143597,
        "node_id": "MDU6TGFiZWwxNDM1OTc=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/docs",
        "name": "docs",
        "color": "007bff",
        "default": false
      },
      {
        "id": 94611078,
        "node_id": "MDU6TGFiZWw5NDYxMTA3OA==",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/help%20wanted",
        "name": "help wanted",
        "color": "bfe5bf",
        "default": true
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-12-27T09:39:26Z",
    "updated_at": "2018-12-27T09:39:26Z",
    "closed_at": null,
    "author_association": "MEMBER",
    "body": "Probably a manual step for the existent old docs, and semi-manual for each new version."
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27927",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27927/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27927/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27927/events",
    "html_url": "https://github.com/twbs/bootstrap/issues/27927",
    "id": 394273015,
    "node_id": "MDU6SXNzdWUzOTQyNzMwMTU=",
    "number": 27927,
    "title": "4.2 breaking change: custom $grid-breakpoints that are smaller than default ones give errors",
    "user": {
      "login": "phazei",
      "id": 431395,
      "node_id": "MDQ6VXNlcjQzMTM5NQ==",
      "avatar_url": "https://avatars3.githubusercontent.com/u/431395?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/phazei",
      "html_url": "https://github.com/phazei",
      "followers_url": "https://api.github.com/users/phazei/followers",
      "following_url": "https://api.github.com/users/phazei/following{/other_user}",
      "gists_url": "https://api.github.com/users/phazei/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/phazei/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/phazei/subscriptions",
      "organizations_url": "https://api.github.com/users/phazei/orgs",
      "repos_url": "https://api.github.com/users/phazei/repos",
      "events_url": "https://api.github.com/users/phazei/events{/privacy}",
      "received_events_url": "https://api.github.com/users/phazei/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [

    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 2,
    "created_at": "2018-12-27T02:00:09Z",
    "updated_at": "2018-12-27T02:43:23Z",
    "closed_at": null,
    "author_association": "NONE",
    "body": "I'm unable to compile sass with the new $grid-breakpoint changes.\r\nThis worked just fine with 4.1.  It now doesn't seem possible with 4.2\r\n\r\nIn my custom variable file that's included before everything BS4 I have the following:\r\n\r\n```sass\r\n$grid-breakpoints: (\r\n        xxs: 0,\r\n        xs: 480px,\r\n        sm: 576px,\r\n        md: 768px,\r\n        lg: 992px,\r\n        xl: 1200px\r\n);\r\n```\r\n\r\nAs you can see, an additional custom breakpoint exists at 480px.\r\n\r\nPreviously 4.1 `_variable.sass` contained:\r\n```sass\r\n$grid-breakpoints: (\r\n  xs: 0,\r\n  sm: 576px,\r\n  md: 768px,\r\n  lg: 992px,\r\n  xl: 1200px\r\n) !default;\r\n\r\n@include _assert-ascending($grid-breakpoints, \"$grid-breakpoints\");\r\n@include _assert-starts-at-zero($grid-breakpoints);\r\n```\r\n\r\nAnd my code overrode all the breakpoints and worked fine.\r\n\r\nNow in 4.2 _variable.sass:\r\n```sass\r\n$grid-breakpoints: () !default;\r\n// stylelint-disable-next-line scss/dollar-variable-default\r\n$grid-breakpoints: map-merge(\r\n                (\r\n                        xs: 0,\r\n                        sm: 576px,\r\n                        md: 768px,\r\n                        lg: 992px,\r\n                        xl: 1200px\r\n                ),\r\n                $grid-breakpoints\r\n);\r\n\r\n@include _assert-ascending($grid-breakpoints, \"$grid-breakpoints\");\r\n@include _assert-starts-at-zero($grid-breakpoints);\r\n```\r\n\r\nAnd it gives the following errors:\r\n\r\n```\r\nWARNING: Invalid value for $grid-breakpoints: This map must be in ascending order, but key 'xxs' has value 0 which isn't greater than 1200px, the value of the previous key 'xl' !\r\n\r\nWARNING: First breakpoint in `$grid-breakpoints` must start at 0, but starts at 480px.\r\n\r\nWARNING: Invalid value for $container-max-widths: This map must be in ascending order, but key 'xs' has value 500px which isn't greater than 1140px, the value of the previous key 'xl' !\r\n```\r\n"
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27925",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27925/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27925/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27925/events",
    "html_url": "https://github.com/twbs/bootstrap/issues/27925",
    "id": 394201415,
    "node_id": "MDU6SXNzdWUzOTQyMDE0MTU=",
    "number": 27925,
    "title": "Form feedback SVG icons use wrong stroke color",
    "user": {
      "login": "coneybeare",
      "id": 35369,
      "node_id": "MDQ6VXNlcjM1MzY5",
      "avatar_url": "https://avatars2.githubusercontent.com/u/35369?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/coneybeare",
      "html_url": "https://github.com/coneybeare",
      "followers_url": "https://api.github.com/users/coneybeare/followers",
      "following_url": "https://api.github.com/users/coneybeare/following{/other_user}",
      "gists_url": "https://api.github.com/users/coneybeare/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/coneybeare/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/coneybeare/subscriptions",
      "organizations_url": "https://api.github.com/users/coneybeare/orgs",
      "repos_url": "https://api.github.com/users/coneybeare/repos",
      "events_url": "https://api.github.com/users/coneybeare/events{/privacy}",
      "received_events_url": "https://api.github.com/users/coneybeare/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 210556,
        "node_id": "MDU6TGFiZWwyMTA1NTY=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/css",
        "name": "css",
        "color": "563d7c",
        "default": false
      },
      {
        "id": 250176882,
        "node_id": "MDU6TGFiZWwyNTAxNzY4ODI=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/v4",
        "name": "v4",
        "color": "563d7c",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-12-26T16:39:53Z",
    "updated_at": "2018-12-26T17:37:08Z",
    "closed_at": null,
    "author_association": "NONE",
    "body": "In `variables`, the SVG values for [$form-feedback-icon-valid](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss#L653) and [$form-feedback-icon-invalid](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss#L655) are not setting the stroke color properly in order to respect the specified colors.\r\n\r\nUnless I am mistaken, the SVG strokes should be the same color as specified by [$form-feedback-icon-valid-color](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss#L654) and [$form-feedback-icon-invalid-color](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss#L656), respectively.\r\n\r\nHere is a screenshot of the bug, in which I have changed the `$danger` color to be `#CF76A8`, and propagates down to `$form-feedback-icon-invalid-color`, yet still shows the red default value for the SVG as a hardcoded `#d9534f`\r\n\r\n![screen shot 2018-12-26 at 11 32 26 am](https://user-images.githubusercontent.com/35369/50451579-f0708000-0902-11e9-8075-0314b9537ba5.png)"
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27920",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27920/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27920/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27920/events",
    "html_url": "https://github.com/twbs/bootstrap/issues/27920",
    "id": 393947324,
    "node_id": "MDU6SXNzdWUzOTM5NDczMjQ=",
    "number": 27920,
    "title": "blog internet explorer",
    "user": {
      "login": "Theolodewijk",
      "id": 9058326,
      "node_id": "MDQ6VXNlcjkwNTgzMjY=",
      "avatar_url": "https://avatars2.githubusercontent.com/u/9058326?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Theolodewijk",
      "html_url": "https://github.com/Theolodewijk",
      "followers_url": "https://api.github.com/users/Theolodewijk/followers",
      "following_url": "https://api.github.com/users/Theolodewijk/following{/other_user}",
      "gists_url": "https://api.github.com/users/Theolodewijk/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Theolodewijk/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Theolodewijk/subscriptions",
      "organizations_url": "https://api.github.com/users/Theolodewijk/orgs",
      "repos_url": "https://api.github.com/users/Theolodewijk/repos",
      "events_url": "https://api.github.com/users/Theolodewijk/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Theolodewijk/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 52382818,
        "node_id": "MDU6TGFiZWw1MjM4MjgxOA==",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/examples",
        "name": "examples",
        "color": "005299",
        "default": false
      },
      {
        "id": 250176882,
        "node_id": "MDU6TGFiZWwyNTAxNzY4ODI=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/v4",
        "name": "v4",
        "color": "563d7c",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-12-25T02:08:01Z",
    "updated_at": "2018-12-25T10:01:33Z",
    "closed_at": null,
    "author_association": "NONE",
    "body": "When using Internetexplorer the text gowing out of the box.\r\n\r\nhttps://getbootstrap.com/docs/4.2/examples/blog\r\n\r\nresult : https://gyazo.com/3ea30f1d35650cc4ce003f5d188f41ac"
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27919",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27919/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27919/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27919/events",
    "html_url": "https://github.com/twbs/bootstrap/issues/27919",
    "id": 393921414,
    "node_id": "MDU6SXNzdWUzOTM5MjE0MTQ=",
    "number": 27919,
    "title": "Toast problem",
    "user": {
      "login": "lcsqlpete",
      "id": 8495380,
      "node_id": "MDQ6VXNlcjg0OTUzODA=",
      "avatar_url": "https://avatars3.githubusercontent.com/u/8495380?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/lcsqlpete",
      "html_url": "https://github.com/lcsqlpete",
      "followers_url": "https://api.github.com/users/lcsqlpete/followers",
      "following_url": "https://api.github.com/users/lcsqlpete/following{/other_user}",
      "gists_url": "https://api.github.com/users/lcsqlpete/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/lcsqlpete/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/lcsqlpete/subscriptions",
      "organizations_url": "https://api.github.com/users/lcsqlpete/orgs",
      "repos_url": "https://api.github.com/users/lcsqlpete/repos",
      "events_url": "https://api.github.com/users/lcsqlpete/events{/privacy}",
      "received_events_url": "https://api.github.com/users/lcsqlpete/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 143597,
        "node_id": "MDU6TGFiZWwxNDM1OTc=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/docs",
        "name": "docs",
        "color": "007bff",
        "default": false
      },
      {
        "id": 467471091,
        "node_id": "MDU6TGFiZWw0Njc0NzEwOTE=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/has-pr",
        "name": "has-pr",
        "color": "666666",
        "default": false
      },
      {
        "id": 250176882,
        "node_id": "MDU6TGFiZWwyNTAxNzY4ODI=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/v4",
        "name": "v4",
        "color": "563d7c",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 5,
    "created_at": "2018-12-24T19:01:27Z",
    "updated_at": "2018-12-27T15:16:29Z",
    "closed_at": null,
    "author_association": "NONE",
    "body": "Using OSX 10.13.6, Chrome 71.0.3578.98 and Bootstrap 4.2.1. \r\n\r\nCopied the code for showing a toast from the documentation along with a button to show it.  I thought toasts normally displayed on top of other page elements but in my case, the toast displays below (further down the page than) the button\r\n\r\nHere's the code.\r\n\r\n```html\r\n<button type=\"button\" class=\"btn\" onClick=\"$('.toast').toast('show')\">Show</button>\r\n        <div class=\"toast\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" data-autohide=\"false\">\r\n            <div class=\"toast-header\">\r\n                <strong class=\"mr-auto\">Toast heading</strong>\r\n                <button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"toast-body text-success\">\r\n                <p>Toast body</p>\r\n            </div>\r\n        </div>\r\n```\r\n\r\nI'm bringing in Bootstrap with:\r\n\r\n```html\r\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css\" integrity=\"sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS\" crossorigin=\"anonymous\">\r\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\" integrity=\"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k\" crossorigin=\"anonymous\"></script>\r\n```\r\n\r\nThanks in advance for any guidance."
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27917",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27917/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27917/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27917/events",
    "html_url": "https://github.com/twbs/bootstrap/pull/27917",
    "id": 393768832,
    "node_id": "MDExOlB1bGxSZXF1ZXN0MjQwNjkzNTk3",
    "number": 27917,
    "title": "Configurable display utility classes",
    "user": {
      "login": "MartijnCuppens",
      "id": 11559216,
      "node_id": "MDQ6VXNlcjExNTU5MjE2",
      "avatar_url": "https://avatars3.githubusercontent.com/u/11559216?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/MartijnCuppens",
      "html_url": "https://github.com/MartijnCuppens",
      "followers_url": "https://api.github.com/users/MartijnCuppens/followers",
      "following_url": "https://api.github.com/users/MartijnCuppens/following{/other_user}",
      "gists_url": "https://api.github.com/users/MartijnCuppens/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/MartijnCuppens/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/MartijnCuppens/subscriptions",
      "organizations_url": "https://api.github.com/users/MartijnCuppens/orgs",
      "repos_url": "https://api.github.com/users/MartijnCuppens/repos",
      "events_url": "https://api.github.com/users/MartijnCuppens/events{/privacy}",
      "received_events_url": "https://api.github.com/users/MartijnCuppens/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 210556,
        "node_id": "MDU6TGFiZWwyMTA1NTY=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/css",
        "name": "css",
        "color": "563d7c",
        "default": false
      },
      {
        "id": 250176882,
        "node_id": "MDU6TGFiZWwyNTAxNzY4ODI=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/v4",
        "name": "v4",
        "color": "563d7c",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 1,
    "created_at": "2018-12-23T17:51:55Z",
    "updated_at": "2018-12-23T20:16:03Z",
    "closed_at": null,
    "author_association": "MEMBER",
    "pull_request": {
      "url": "https://api.github.com/repos/twbs/bootstrap/pulls/27917",
      "html_url": "https://github.com/twbs/bootstrap/pull/27917",
      "diff_url": "https://github.com/twbs/bootstrap/pull/27917.diff",
      "patch_url": "https://github.com/twbs/bootstrap/pull/27917.patch"
    },
    "body": "With this PR you'll be able to control which responsive display classes are generated."
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27915",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27915/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27915/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27915/events",
    "html_url": "https://github.com/twbs/bootstrap/issues/27915",
    "id": 393762774,
    "node_id": "MDU6SXNzdWUzOTM3NjI3NzQ=",
    "number": 27915,
    "title": "Github considers bootstrap 3.4.0 as insecure",
    "user": {
      "login": "GeyseR",
      "id": 1364479,
      "node_id": "MDQ6VXNlcjEzNjQ0Nzk=",
      "avatar_url": "https://avatars2.githubusercontent.com/u/1364479?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/GeyseR",
      "html_url": "https://github.com/GeyseR",
      "followers_url": "https://api.github.com/users/GeyseR/followers",
      "following_url": "https://api.github.com/users/GeyseR/following{/other_user}",
      "gists_url": "https://api.github.com/users/GeyseR/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/GeyseR/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/GeyseR/subscriptions",
      "organizations_url": "https://api.github.com/users/GeyseR/orgs",
      "repos_url": "https://api.github.com/users/GeyseR/repos",
      "events_url": "https://api.github.com/users/GeyseR/events{/privacy}",
      "received_events_url": "https://api.github.com/users/GeyseR/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 26387941,
        "node_id": "MDU6TGFiZWwyNjM4Nzk0MQ==",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/meta",
        "name": "meta",
        "color": "444444",
        "default": false
      },
      {
        "id": 250176946,
        "node_id": "MDU6TGFiZWwyNTAxNzY5NDY=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/v3",
        "name": "v3",
        "color": "d9534f",
        "default": false
      },
      {
        "id": 250176882,
        "node_id": "MDU6TGFiZWwyNTAxNzY4ODI=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/v4",
        "name": "v4",
        "color": "563d7c",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": {
      "login": "bardiharborow",
      "id": 1073681,
      "node_id": "MDQ6VXNlcjEwNzM2ODE=",
      "avatar_url": "https://avatars2.githubusercontent.com/u/1073681?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bardiharborow",
      "html_url": "https://github.com/bardiharborow",
      "followers_url": "https://api.github.com/users/bardiharborow/followers",
      "following_url": "https://api.github.com/users/bardiharborow/following{/other_user}",
      "gists_url": "https://api.github.com/users/bardiharborow/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/bardiharborow/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/bardiharborow/subscriptions",
      "organizations_url": "https://api.github.com/users/bardiharborow/orgs",
      "repos_url": "https://api.github.com/users/bardiharborow/repos",
      "events_url": "https://api.github.com/users/bardiharborow/events{/privacy}",
      "received_events_url": "https://api.github.com/users/bardiharborow/received_events",
      "type": "User",
      "site_admin": false
    },
    "assignees": [
      {
        "login": "bardiharborow",
        "id": 1073681,
        "node_id": "MDQ6VXNlcjEwNzM2ODE=",
        "avatar_url": "https://avatars2.githubusercontent.com/u/1073681?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/bardiharborow",
        "html_url": "https://github.com/bardiharborow",
        "followers_url": "https://api.github.com/users/bardiharborow/followers",
        "following_url": "https://api.github.com/users/bardiharborow/following{/other_user}",
        "gists_url": "https://api.github.com/users/bardiharborow/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/bardiharborow/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/bardiharborow/subscriptions",
        "organizations_url": "https://api.github.com/users/bardiharborow/orgs",
        "repos_url": "https://api.github.com/users/bardiharborow/repos",
        "events_url": "https://api.github.com/users/bardiharborow/events{/privacy}",
        "received_events_url": "https://api.github.com/users/bardiharborow/received_events",
        "type": "User",
        "site_admin": false
      }
    ],
    "milestone": null,
    "comments": 3,
    "created_at": "2018-12-23T16:23:10Z",
    "updated_at": "2018-12-24T11:28:09Z",
    "closed_at": null,
    "author_association": "NONE",
    "body": "Hi Bootstrap team.\r\n\r\nGithub considers bootstrap 3.4.0 as an insecure dependency via its security vulnerabilities alerts tool: https://help.github.com/articles/about-security-alerts-for-vulnerable-dependencies\r\nIt points to the https://nvd.nist.gov/vuln/detail/CVE-2018-14041 page and this page shows that only >4.1.2 is secure.\r\nDoes 3.4.0 is safe to use as it has a fix for the https://snyk.io/vuln/npm:bootstrap:20160627 vulnerability or it is something different?\r\n\r\nscreenshot from one of our private projects\r\n\r\n![image](https://user-images.githubusercontent.com/1364479/50385539-47e6d400-06e8-11e9-943e-6d338e177006.png)\r\n"
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27913",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27913/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27913/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27913/events",
    "html_url": "https://github.com/twbs/bootstrap/pull/27913",
    "id": 393747493,
    "node_id": "MDExOlB1bGxSZXF1ZXN0MjQwNjgwNDMy",
    "number": 27913,
    "title": "Remove service worker from v4.0 and v4.1.",
    "user": {
      "login": "XhmikosR",
      "id": 349621,
      "node_id": "MDQ6VXNlcjM0OTYyMQ==",
      "avatar_url": "https://avatars2.githubusercontent.com/u/349621?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/XhmikosR",
      "html_url": "https://github.com/XhmikosR",
      "followers_url": "https://api.github.com/users/XhmikosR/followers",
      "following_url": "https://api.github.com/users/XhmikosR/following{/other_user}",
      "gists_url": "https://api.github.com/users/XhmikosR/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/XhmikosR/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/XhmikosR/subscriptions",
      "organizations_url": "https://api.github.com/users/XhmikosR/orgs",
      "repos_url": "https://api.github.com/users/XhmikosR/repos",
      "events_url": "https://api.github.com/users/XhmikosR/events{/privacy}",
      "received_events_url": "https://api.github.com/users/XhmikosR/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 143597,
        "node_id": "MDU6TGFiZWwxNDM1OTc=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/docs",
        "name": "docs",
        "color": "007bff",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-12-23T12:51:10Z",
    "updated_at": "2018-12-23T12:51:11Z",
    "closed_at": null,
    "author_association": "MEMBER",
    "pull_request": {
      "url": "https://api.github.com/repos/twbs/bootstrap/pulls/27913",
      "html_url": "https://github.com/twbs/bootstrap/pull/27913",
      "diff_url": "https://github.com/twbs/bootstrap/pull/27913.diff",
      "patch_url": "https://github.com/twbs/bootstrap/pull/27913.patch"
    },
    "body": "Fixes #27482 \r\n\r\n@mdo it's untested but it should work hopefully. You had some paths wrong so I had to duplicate sw.js for now."
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27911",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27911/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27911/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27911/events",
    "html_url": "https://github.com/twbs/bootstrap/pull/27911",
    "id": 393729316,
    "node_id": "MDExOlB1bGxSZXF1ZXN0MjQwNjY5MTUw",
    "number": 27911,
    "title": "Update devDependencies and gems.",
    "user": {
      "login": "XhmikosR",
      "id": 349621,
      "node_id": "MDQ6VXNlcjM0OTYyMQ==",
      "avatar_url": "https://avatars2.githubusercontent.com/u/349621?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/XhmikosR",
      "html_url": "https://github.com/XhmikosR",
      "followers_url": "https://api.github.com/users/XhmikosR/followers",
      "following_url": "https://api.github.com/users/XhmikosR/following{/other_user}",
      "gists_url": "https://api.github.com/users/XhmikosR/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/XhmikosR/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/XhmikosR/subscriptions",
      "organizations_url": "https://api.github.com/users/XhmikosR/orgs",
      "repos_url": "https://api.github.com/users/XhmikosR/repos",
      "events_url": "https://api.github.com/users/XhmikosR/events{/privacy}",
      "received_events_url": "https://api.github.com/users/XhmikosR/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 69688998,
        "node_id": "MDU6TGFiZWw2OTY4ODk5OA==",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/build",
        "name": "build",
        "color": "eeeeee",
        "default": false
      },
      {
        "id": 250176882,
        "node_id": "MDU6TGFiZWwyNTAxNzY4ODI=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/v4",
        "name": "v4",
        "color": "563d7c",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 1,
    "created_at": "2018-12-23T07:14:29Z",
    "updated_at": "2018-12-27T09:20:52Z",
    "closed_at": null,
    "author_association": "MEMBER",
    "pull_request": {
      "url": "https://api.github.com/repos/twbs/bootstrap/pulls/27911",
      "html_url": "https://github.com/twbs/bootstrap/pull/27911",
      "diff_url": "https://github.com/twbs/bootstrap/pull/27911.diff",
      "patch_url": "https://github.com/twbs/bootstrap/pull/27911.patch"
    },
    "body": ""
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27907",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27907/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27907/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27907/events",
    "html_url": "https://github.com/twbs/bootstrap/pull/27907",
    "id": 393704926,
    "node_id": "MDExOlB1bGxSZXF1ZXN0MjQwNjU0NzAy",
    "number": 27907,
    "title": "Fix broken URLs.",
    "user": {
      "login": "XhmikosR",
      "id": 349621,
      "node_id": "MDQ6VXNlcjM0OTYyMQ==",
      "avatar_url": "https://avatars2.githubusercontent.com/u/349621?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/XhmikosR",
      "html_url": "https://github.com/XhmikosR",
      "followers_url": "https://api.github.com/users/XhmikosR/followers",
      "following_url": "https://api.github.com/users/XhmikosR/following{/other_user}",
      "gists_url": "https://api.github.com/users/XhmikosR/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/XhmikosR/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/XhmikosR/subscriptions",
      "organizations_url": "https://api.github.com/users/XhmikosR/orgs",
      "repos_url": "https://api.github.com/users/XhmikosR/repos",
      "events_url": "https://api.github.com/users/XhmikosR/events{/privacy}",
      "received_events_url": "https://api.github.com/users/XhmikosR/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 143597,
        "node_id": "MDU6TGFiZWwxNDM1OTc=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/docs",
        "name": "docs",
        "color": "007bff",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 1,
    "created_at": "2018-12-22T21:42:37Z",
    "updated_at": "2018-12-27T09:40:49Z",
    "closed_at": null,
    "author_association": "MEMBER",
    "pull_request": {
      "url": "https://api.github.com/repos/twbs/bootstrap/pulls/27907",
      "html_url": "https://github.com/twbs/bootstrap/pull/27907",
      "diff_url": "https://github.com/twbs/bootstrap/pull/27907.diff",
      "patch_url": "https://github.com/twbs/bootstrap/pull/27907.patch"
    },
    "body": "I'll try and fix most in the next days and also do the ones that apply to master.\r\n\r\nTODO:\r\n\r\n- [ ] Fix `assets/bootstrap.zip`\r\n- [x] Fix favicons/apple touch icons\r\n- [x] Remove broken translation links\r\n- [x] Add missing examples pages"
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27904",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27904/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27904/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27904/events",
    "html_url": "https://github.com/twbs/bootstrap/issues/27904",
    "id": 393702592,
    "node_id": "MDU6SXNzdWUzOTM3MDI1OTI=",
    "number": 27904,
    "title": "docs: redirect root pages to the latest version",
    "user": {
      "login": "XhmikosR",
      "id": 349621,
      "node_id": "MDQ6VXNlcjM0OTYyMQ==",
      "avatar_url": "https://avatars2.githubusercontent.com/u/349621?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/XhmikosR",
      "html_url": "https://github.com/XhmikosR",
      "followers_url": "https://api.github.com/users/XhmikosR/followers",
      "following_url": "https://api.github.com/users/XhmikosR/following{/other_user}",
      "gists_url": "https://api.github.com/users/XhmikosR/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/XhmikosR/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/XhmikosR/subscriptions",
      "organizations_url": "https://api.github.com/users/XhmikosR/orgs",
      "repos_url": "https://api.github.com/users/XhmikosR/repos",
      "events_url": "https://api.github.com/users/XhmikosR/events{/privacy}",
      "received_events_url": "https://api.github.com/users/XhmikosR/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 143597,
        "node_id": "MDU6TGFiZWwxNDM1OTc=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/docs",
        "name": "docs",
        "color": "007bff",
        "default": false
      },
      {
        "id": 250176882,
        "node_id": "MDU6TGFiZWwyNTAxNzY4ODI=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/v4",
        "name": "v4",
        "color": "563d7c",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 1,
    "created_at": "2018-12-22T20:56:45Z",
    "updated_at": "2018-12-23T20:12:46Z",
    "closed_at": null,
    "author_association": "MEMBER",
    "body": "Like `/about/` to `4.2/about/` etc.\r\n\r\nHere's the list\r\n\r\n```\r\nabout\r\nbrowser-bugs\r\ncomponents\r\ncss\r\ncustomize\r\nexamples\r\n    blog\r\n    carousel\r\n    cover\r\n    dashboard\r\n    grid\r\n    jumbotron\r\n    jumbotron-narrow\r\n    justified-nav\r\n    navbar\r\n    navbar-fixed-top\r\n    navbar-static-top\r\n    non-responsive\r\n    offcanvas\r\n    signin\r\n    starter-template\r\n    sticky-footer\r\n    sticky-footer-navbar\r\n    theme\r\n    tooltip-viewport\r\ngetting-started\r\njavascript\r\nmigration -> to /docs/3.4/migration/ ?\r\n```"
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27893",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27893/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27893/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27893/events",
    "html_url": "https://github.com/twbs/bootstrap/issues/27893",
    "id": 393566222,
    "node_id": "MDU6SXNzdWUzOTM1NjYyMjI=",
    "number": 27893,
    "title": "v4.3.0 ship list",
    "user": {
      "login": "mdo",
      "id": 98681,
      "node_id": "MDQ6VXNlcjk4Njgx",
      "avatar_url": "https://avatars3.githubusercontent.com/u/98681?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mdo",
      "html_url": "https://github.com/mdo",
      "followers_url": "https://api.github.com/users/mdo/followers",
      "following_url": "https://api.github.com/users/mdo/following{/other_user}",
      "gists_url": "https://api.github.com/users/mdo/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mdo/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mdo/subscriptions",
      "organizations_url": "https://api.github.com/users/mdo/orgs",
      "repos_url": "https://api.github.com/users/mdo/repos",
      "events_url": "https://api.github.com/users/mdo/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mdo/received_events",
      "type": "User",
      "site_admin": true
    },
    "labels": [
      {
        "id": 290840303,
        "node_id": "MDU6TGFiZWwyOTA4NDAzMDM=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/ship%20list",
        "name": "ship list",
        "color": "000000",
        "default": false
      },
      {
        "id": 250176882,
        "node_id": "MDU6TGFiZWwyNTAxNzY4ODI=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/v4",
        "name": "v4",
        "color": "563d7c",
        "default": false
      }
    ],
    "state": "open",
    "locked": true,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-12-21T19:26:21Z",
    "updated_at": "2018-12-23T20:25:41Z",
    "closed_at": null,
    "author_association": "MEMBER",
    "body": "### Highlights\r\n\r\n- **New:** Added `.stretched-link` utility to make any anchor the size of it's nearest `position: relative` parent, perfect for entirely clickable cards!\r\n- **New:** Added `.text-break` utility for applying `word-break: break-word`\r\n\r\n### CSS\r\n\r\n- #26184: Add `.stretched link.` utility for turning an anchor into a larger hit area\r\n- #27136: Match the `.badge` focus styles to their `background-color`s like buttons\r\n- #27750: Scope arrow styles to direct descendants of popover classes\r\n- #27846: Match `.table-dark`'s `background-color` to the `$gray-dark` variable\r\n- #27850: Add `$table-hover-color` variables\r\n- #27857: Add variable for `$dropdown-divider-margin-y`\r\n- #27863: Add new `.text-break` utility for applying `word-break: break-word`\r\n- #27870: Prevent `.form-check` inputs from shrinking in narrow widths\r\n- #27874: Sync modal header and footer border colors with `$border-color`\r\n- #27875: Sync `$table-border-color` with `$border-color`\r\n- #27880: Prevent unnecessary CSS output for emphasized links\r\n- #27883: Use `border-radius()` mixin for toasts\r\n- #27901: Simplify card group css\r\n- #27910: Fix 4:3 embed\r\n\r\n### JS\r\n\r\n- #27912: `getSelectorFromElement` return `null` on bad selectors\r\n\r\n### Docs\r\n\r\n- #27849: Mention the IE10/11 `min-height` bug with flexbox\r\n- #27853: List out what's explicitly supported in validation styles\r\n- #27897: Remove obsolete redirects in examples\r\n- #27902: Add two new meta tags for Algolia\r\n- #27906: Add horizontal card example\r\n- #27916: Add Open Collective to header\r\n\r\n### Meta\r\n\r\n- #27894: Update nuspec and build script\r\n\r\n### Build tooling\r\n\r\n- #27900: Blacklist border-radius property (use mixin instead)\r\n"
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27890",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27890/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27890/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27890/events",
    "html_url": "https://github.com/twbs/bootstrap/pull/27890",
    "id": 393453273,
    "node_id": "MDExOlB1bGxSZXF1ZXN0MjQwNDY5MjY5",
    "number": 27890,
    "title": "Fix buttons :focus state styles",
    "user": {
      "login": "mattez",
      "id": 143115,
      "node_id": "MDQ6VXNlcjE0MzExNQ==",
      "avatar_url": "https://avatars3.githubusercontent.com/u/143115?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mattez",
      "html_url": "https://github.com/mattez",
      "followers_url": "https://api.github.com/users/mattez/followers",
      "following_url": "https://api.github.com/users/mattez/following{/other_user}",
      "gists_url": "https://api.github.com/users/mattez/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mattez/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mattez/subscriptions",
      "organizations_url": "https://api.github.com/users/mattez/orgs",
      "repos_url": "https://api.github.com/users/mattez/repos",
      "events_url": "https://api.github.com/users/mattez/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mattez/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [

    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-12-21T13:08:40Z",
    "updated_at": "2018-12-27T16:13:20Z",
    "closed_at": null,
    "author_association": "CONTRIBUTOR",
    "pull_request": {
      "url": "https://api.github.com/repos/twbs/bootstrap/pulls/27890",
      "html_url": "https://github.com/twbs/bootstrap/pull/27890",
      "diff_url": "https://github.com/twbs/bootstrap/pull/27890.diff",
      "patch_url": "https://github.com/twbs/bootstrap/pull/27890.patch"
    },
    "body": "Small change which fix two issues:\r\n\r\n#### 1] Buttons :hover and :focus state shares styles now.\r\nAs you expect and as it is in BS3, `:focus` state is same as `:hover` state only extended by outline.\r\n\r\n**Before:** `.btn` with `:focus` appears as normal button state with 'outline':\r\n![image](https://user-images.githubusercontent.com/143115/50343520-7bc6cb80-0527-11e9-823f-4befa3bb1008.png)\r\n**After:** `.btn` with `:focus` looks like `:hover` state with 'outline':\r\n![image](https://user-images.githubusercontent.com/143115/50343553-a31d9880-0527-11e9-9649-00f4103c6982.png)\r\n\r\n#### 2] Buttons :focus text color on 'a.btn' is now consistent with others '.btn'.\r\nIf you somewhere define specific color (e.g. `$danger`) for `:focus` state on `<a>` then ...\r\n\r\n**Before:** This specific color is presented in `:focus` state on `.btn` made from `<a>`:\r\n![image](https://user-images.githubusercontent.com/143115/50343760-7027d480-0528-11e9-8846-8ee19a84aaf2.png)\r\n**After:** Specific color is overridden with right `.btn` color:\r\n![image](https://user-images.githubusercontent.com/143115/50343799-9483b100-0528-11e9-960d-54965789984a.png)\r\n "
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27886",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27886/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27886/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27886/events",
    "html_url": "https://github.com/twbs/bootstrap/issues/27886",
    "id": 393124519,
    "node_id": "MDU6SXNzdWUzOTMxMjQ1MTk=",
    "number": 27886,
    "title": "[Bug] Order classes also generate a class .order#{$infix}-0 for every infix",
    "user": {
      "login": "kopax",
      "id": 1866564,
      "node_id": "MDQ6VXNlcjE4NjY1NjQ=",
      "avatar_url": "https://avatars0.githubusercontent.com/u/1866564?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/kopax",
      "html_url": "https://github.com/kopax",
      "followers_url": "https://api.github.com/users/kopax/followers",
      "following_url": "https://api.github.com/users/kopax/following{/other_user}",
      "gists_url": "https://api.github.com/users/kopax/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/kopax/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/kopax/subscriptions",
      "organizations_url": "https://api.github.com/users/kopax/orgs",
      "repos_url": "https://api.github.com/users/kopax/repos",
      "events_url": "https://api.github.com/users/kopax/events{/privacy}",
      "received_events_url": "https://api.github.com/users/kopax/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [

    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 5,
    "created_at": "2018-12-20T16:40:19Z",
    "updated_at": "2018-12-21T16:23:39Z",
    "closed_at": null,
    "author_association": "NONE",
    "body": "## Order classes are starting from 0 instead of 1 for every infix\r\n\r\n- source: https://github.com/twbs/bootstrap/blob/v4.1.3/scss/mixins/_grid-framework.scss#L54\r\n\r\nIt should be like : \r\n\r\n- source: https://github.com/twbs/bootstrap/blob/v4.1.3/scss/mixins/_grid-framework.scss#L22\r\n\r\nGenerate css is wrong: \r\n\r\n```css\r\n.order-1-0 {\r\n  order: 0;\r\n}\r\n\r\n.order-1-1 {\r\n  order: 1;\r\n}\r\n\r\n.order-1-2 {\r\n  order: 2;\r\n}\r\n\r\n.order-1-3 {\r\n  order: 3;\r\n}\r\n\r\n.order-1-4 {\r\n  order: 4;\r\n}\r\n\r\n.order-1-5 {\r\n  order: 5;\r\n}\r\n\r\n.order-1-6 {\r\n  order: 6;\r\n}\r\n\r\n.order-1-7 {\r\n  order: 7;\r\n}\r\n\r\n.order-1-8 {\r\n  order: 8;\r\n}\r\n\r\n.order-1-9 {\r\n  order: 9;\r\n}\r\n\r\n.order-1-10 {\r\n  order: 10;\r\n}\r\n\r\n.order-1-11 {\r\n  order: 11;\r\n}\r\n\r\n.order-1-12 {\r\n  order: 12;\r\n}\r\n```\r\n\r\nPossible fix: \r\n\r\n```diff\r\n// Framework grid generation\r\n//\r\n// Used only by Bootstrap to generate the correct number of grid classes given\r\n// any value of `$grid-columns`.\r\n\r\n@mixin make-grid-columns($columns: $grid-columns, $gutter: $grid-gutter-width, $breakpoints: $grid-breakpoints) {\r\n  // Common properties for all breakpoints\r\n  %grid-column {\r\n    position: relative;\r\n    width: 100%;\r\n    padding-right: $gutter / 2;\r\n    padding-left: $gutter / 2;\r\n  }\r\n\r\n  @each $breakpoint in map-keys($breakpoints) {\r\n    $infix: breakpoint-infix($breakpoint, $breakpoints);\r\n\r\n    // Allow columns to stretch full width below their breakpoints\r\n    @for $i from 1 through $columns {\r\n      .col#{$infix}-#{$i} {\r\n        @extend %grid-column;\r\n      }\r\n    }\r\n    .col#{$infix},\r\n    .col#{$infix}-auto {\r\n      @extend %grid-column;\r\n    }\r\n\r\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\r\n      // Provide basic `.col-{bp}` classes for equal-width flexbox columns\r\n      .col#{$infix} {\r\n        flex-basis: 0;\r\n        flex-grow: 1;\r\n        max-width: 100%;\r\n      }\r\n      .col#{$infix}-auto {\r\n        flex: 0 0 auto;\r\n        width: auto;\r\n        max-width: 100%; // Reset earlier grid tiers\r\n      }\r\n\r\n      @for $i from 1 through $columns {\r\n        .col#{$infix}-#{$i} {\r\n          @include make-col($i, $columns);\r\n        }\r\n      }\r\n\r\n      .order#{$infix}-first { order: -1; }\r\n\r\n      .order#{$infix}-last { order: $columns + 1; }\r\n\r\n-      @for $i from 0 through $columns {\r\n+      @for $i from 1 through $columns {\r\n        .order#{$infix}-#{$i} { order: $i; }\r\n      }\r\n\r\n      // `$columns - 1` because offsetting by the width of an entire row isn't possible\r\n-      @for $i from 0 through ($columns - 1) {\r\n+      @for $i from 1 through ($columns - 1) {\r\n        @if not ($infix == \"\" and $i == 0) { // Avoid emitting useless .offset-0\r\n          .offset#{$infix}-#{$i} {\r\n            @include make-col-offset($i, $columns);\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n```"
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27881",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27881/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27881/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27881/events",
    "html_url": "https://github.com/twbs/bootstrap/pull/27881",
    "id": 392476180,
    "node_id": "MDExOlB1bGxSZXF1ZXN0MjM5NzM4ODky",
    "number": 27881,
    "title": "fix border issue for nested card inside accordions",
    "user": {
      "login": "ovpv",
      "id": 18413362,
      "node_id": "MDQ6VXNlcjE4NDEzMzYy",
      "avatar_url": "https://avatars0.githubusercontent.com/u/18413362?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ovpv",
      "html_url": "https://github.com/ovpv",
      "followers_url": "https://api.github.com/users/ovpv/followers",
      "following_url": "https://api.github.com/users/ovpv/following{/other_user}",
      "gists_url": "https://api.github.com/users/ovpv/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ovpv/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ovpv/subscriptions",
      "organizations_url": "https://api.github.com/users/ovpv/orgs",
      "repos_url": "https://api.github.com/users/ovpv/repos",
      "events_url": "https://api.github.com/users/ovpv/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ovpv/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 210556,
        "node_id": "MDU6TGFiZWwyMTA1NTY=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/css",
        "name": "css",
        "color": "563d7c",
        "default": false
      },
      {
        "id": 250176882,
        "node_id": "MDU6TGFiZWwyNTAxNzY4ODI=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/v4",
        "name": "v4",
        "color": "563d7c",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 4,
    "created_at": "2018-12-19T07:40:53Z",
    "updated_at": "2018-12-24T10:34:11Z",
    "closed_at": null,
    "author_association": "NONE",
    "pull_request": {
      "url": "https://api.github.com/repos/twbs/bootstrap/pulls/27881",
      "html_url": "https://github.com/twbs/bootstrap/pull/27881",
      "diff_url": "https://github.com/twbs/bootstrap/pull/27881.diff",
      "patch_url": "https://github.com/twbs/bootstrap/pull/27881.patch"
    },
    "body": "After analysing the code in scss/_card.scss, in line 281, the styles added for .card class inside .accordian class is targeting all the cards inside instead of its immediate children elements with the class .card.\r\n\r\nCode now:\r\n```\r\n.accordion {\r\n  .card {\r\n    ...\r\n  }\r\n}\r\n```\r\nFix:\r\n\r\n```\r\n.accordion {\r\n  > .card {\r\n    ...\r\n  }\r\n}\r\n```\r\n\r\nCloses #27510"
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27879",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27879/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27879/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27879/events",
    "html_url": "https://github.com/twbs/bootstrap/issues/27879",
    "id": 392472789,
    "node_id": "MDU6SXNzdWUzOTI0NzI3ODk=",
    "number": 27879,
    "title": "code conflict",
    "user": {
      "login": "linjialiang",
      "id": 8848263,
      "node_id": "MDQ6VXNlcjg4NDgyNjM=",
      "avatar_url": "https://avatars3.githubusercontent.com/u/8848263?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/linjialiang",
      "html_url": "https://github.com/linjialiang",
      "followers_url": "https://api.github.com/users/linjialiang/followers",
      "following_url": "https://api.github.com/users/linjialiang/following{/other_user}",
      "gists_url": "https://api.github.com/users/linjialiang/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/linjialiang/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/linjialiang/subscriptions",
      "organizations_url": "https://api.github.com/users/linjialiang/orgs",
      "repos_url": "https://api.github.com/users/linjialiang/repos",
      "events_url": "https://api.github.com/users/linjialiang/events{/privacy}",
      "received_events_url": "https://api.github.com/users/linjialiang/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 210556,
        "node_id": "MDU6TGFiZWwyMTA1NTY=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/css",
        "name": "css",
        "color": "563d7c",
        "default": false
      },
      {
        "id": 1069712305,
        "node_id": "MDU6TGFiZWwxMDY5NzEyMzA1",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/v5",
        "name": "v5",
        "color": "103987",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 3,
    "created_at": "2018-12-19T07:28:29Z",
    "updated_at": "2018-12-20T01:47:21Z",
    "closed_at": null,
    "author_association": "NONE",
    "body": "> version : `v4.1.3`\r\n\r\n> Compiled `bootstrap.css` , The two conflict `.table-dark`\r\n\r\n![default](https://user-images.githubusercontent.com/8848263/50205193-4c3a8680-03a2-11e9-8f6b-8e80116d0749.png)\r\n\r\n"
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27878",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27878/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27878/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27878/events",
    "html_url": "https://github.com/twbs/bootstrap/pull/27878",
    "id": 392346490,
    "node_id": "MDExOlB1bGxSZXF1ZXN0MjM5NjQwMDY0",
    "number": 27878,
    "title": "Add dark carousel color scheme",
    "user": {
      "login": "mdo",
      "id": 98681,
      "node_id": "MDQ6VXNlcjk4Njgx",
      "avatar_url": "https://avatars3.githubusercontent.com/u/98681?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mdo",
      "html_url": "https://github.com/mdo",
      "followers_url": "https://api.github.com/users/mdo/followers",
      "following_url": "https://api.github.com/users/mdo/following{/other_user}",
      "gists_url": "https://api.github.com/users/mdo/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mdo/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mdo/subscriptions",
      "organizations_url": "https://api.github.com/users/mdo/orgs",
      "repos_url": "https://api.github.com/users/mdo/repos",
      "events_url": "https://api.github.com/users/mdo/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mdo/received_events",
      "type": "User",
      "site_admin": true
    },
    "labels": [
      {
        "id": 210556,
        "node_id": "MDU6TGFiZWwyMTA1NTY=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/css",
        "name": "css",
        "color": "563d7c",
        "default": false
      },
      {
        "id": 148230,
        "node_id": "MDU6TGFiZWwxNDgyMzA=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/feature",
        "name": "feature",
        "color": "4bb14b",
        "default": false
      },
      {
        "id": 250176882,
        "node_id": "MDU6TGFiZWwyNTAxNzY4ODI=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/v4",
        "name": "v4",
        "color": "563d7c",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 3,
    "created_at": "2018-12-18T21:38:18Z",
    "updated_at": "2018-12-23T13:38:49Z",
    "closed_at": null,
    "author_association": "MEMBER",
    "pull_request": {
      "url": "https://api.github.com/repos/twbs/bootstrap/pulls/27878",
      "html_url": "https://github.com/twbs/bootstrap/pull/27878",
      "diff_url": "https://github.com/twbs/bootstrap/pull/27878.diff",
      "patch_url": "https://github.com/twbs/bootstrap/pull/27878.patch"
    },
    "body": "Fixes #25360.\r\n\r\nNot 100% if I want this added yet, but wanted to see how it looked and what the reception was for folks. Docs and example can be seen at <https://deploy-preview-27878--twbs-bootstrap4.netlify.com/docs/4.1/components/carousel/#dark-carousel>."
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27873",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27873/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27873/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27873/events",
    "html_url": "https://github.com/twbs/bootstrap/pull/27873",
    "id": 392011148,
    "node_id": "MDExOlB1bGxSZXF1ZXN0MjM5Mzc1NjY3",
    "number": 27873,
    "title": "Fix incorrect responsive alignment of dropdown menu",
    "user": {
      "login": "ysds",
      "id": 4065765,
      "node_id": "MDQ6VXNlcjQwNjU3NjU=",
      "avatar_url": "https://avatars0.githubusercontent.com/u/4065765?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ysds",
      "html_url": "https://github.com/ysds",
      "followers_url": "https://api.github.com/users/ysds/followers",
      "following_url": "https://api.github.com/users/ysds/following{/other_user}",
      "gists_url": "https://api.github.com/users/ysds/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ysds/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ysds/subscriptions",
      "organizations_url": "https://api.github.com/users/ysds/orgs",
      "repos_url": "https://api.github.com/users/ysds/repos",
      "events_url": "https://api.github.com/users/ysds/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ysds/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 210556,
        "node_id": "MDU6TGFiZWwyMTA1NTY=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/css",
        "name": "css",
        "color": "563d7c",
        "default": false
      },
      {
        "id": 250176882,
        "node_id": "MDU6TGFiZWwyNTAxNzY4ODI=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/v4",
        "name": "v4",
        "color": "563d7c",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-12-18T06:13:59Z",
    "updated_at": "2018-12-18T18:16:36Z",
    "closed_at": null,
    "author_association": "CONTRIBUTOR",
    "pull_request": {
      "url": "https://api.github.com/repos/twbs/bootstrap/pulls/27873",
      "html_url": "https://github.com/twbs/bootstrap/pull/27873",
      "diff_url": "https://github.com/twbs/bootstrap/pull/27873.diff",
      "patch_url": "https://github.com/twbs/bootstrap/pull/27873.patch"
    },
    "body": "It is incorrect to define left and right within separate `@media`.\r\n\r\nThe following demo shows incorrect alignment. The dropdown menu should be right aligned when large screen.\r\n\r\ndemo: https://codepen.io/anon/pen/WLGjGz\r\n\r\nTo fix the priority problem, it must be defined at the same breakpoint like a text utility.\r\n\r\nhttps://github.com/twbs/bootstrap/blob/12c4d3c248b49f1730c75fcf8fbcb4a97274ccf6/scss/utilities/_text.scss#L18-L26"
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27869",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27869/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27869/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27869/events",
    "html_url": "https://github.com/twbs/bootstrap/issues/27869",
    "id": 391901194,
    "node_id": "MDU6SXNzdWUzOTE5MDExOTQ=",
    "number": 27869,
    "title": "Error parsing older angular UI with new 3.4.0 release",
    "user": {
      "login": "mjasplin",
      "id": 45951976,
      "node_id": "MDQ6VXNlcjQ1OTUxOTc2",
      "avatar_url": "https://avatars1.githubusercontent.com/u/45951976?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mjasplin",
      "html_url": "https://github.com/mjasplin",
      "followers_url": "https://api.github.com/users/mjasplin/followers",
      "following_url": "https://api.github.com/users/mjasplin/following{/other_user}",
      "gists_url": "https://api.github.com/users/mjasplin/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mjasplin/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mjasplin/subscriptions",
      "organizations_url": "https://api.github.com/users/mjasplin/orgs",
      "repos_url": "https://api.github.com/users/mjasplin/repos",
      "events_url": "https://api.github.com/users/mjasplin/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mjasplin/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 143643,
        "node_id": "MDU6TGFiZWwxNDM2NDM=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/js",
        "name": "js",
        "color": "ffc40d",
        "default": false
      },
      {
        "id": 250176946,
        "node_id": "MDU6TGFiZWwyNTAxNzY5NDY=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/v3",
        "name": "v3",
        "color": "d9534f",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 4,
    "created_at": "2018-12-17T21:41:17Z",
    "updated_at": "2018-12-19T13:22:48Z",
    "closed_at": null,
    "author_association": "NONE",
    "body": "We are using Angular 1.6, and we just ran into issues when upgrading from 3.3.7 to 3.4.0 bootstrap.  It seems to have issues with the #/linkName in the href field.  Reverted back to 3.3.7 and it is working fine. \r\n\r\n`<ul class=\"dropdown-menu\">`\r\n`<li><a href=\"#/amount\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Amount Type</a>`\r\n`</li> </ul>`\r\n  \r\nError appearing in console: \r\nbundle.js:16915 Uncaught Error: Syntax error, unrecognized expression: #\r\n    at Function.Sizzle.error (bundle.js:16915)\r\n    at Sizzle.tokenize (bundle.js:17572)\r\n    at Sizzle.select (bundle.js:17993)\r\n    at Function.Sizzle [as find] (bundle.js:16316)\r\n    at jQuery.fn.init.find (bundle.js:18239)\r\n    at getParent (bundle.js:101210)\r\n    at HTMLAnchorElement.<anonymous> (bundle.js:101220)\r\n    at Function.each (bundle.js:15812)\r\n    at jQuery.fn.init.each (bundle.js:15584)\r\n    at clearMenus (bundle.js:101218)\r\n                                \t"
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27861",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27861/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27861/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27861/events",
    "html_url": "https://github.com/twbs/bootstrap/issues/27861",
    "id": 391473666,
    "node_id": "MDU6SXNzdWUzOTE0NzM2NjY=",
    "number": 27861,
    "title": "Remove now unnecessary `shrink-to-fit` viewport directive",
    "user": {
      "login": "XhmikosR",
      "id": 349621,
      "node_id": "MDQ6VXNlcjM0OTYyMQ==",
      "avatar_url": "https://avatars2.githubusercontent.com/u/349621?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/XhmikosR",
      "html_url": "https://github.com/XhmikosR",
      "followers_url": "https://api.github.com/users/XhmikosR/followers",
      "following_url": "https://api.github.com/users/XhmikosR/following{/other_user}",
      "gists_url": "https://api.github.com/users/XhmikosR/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/XhmikosR/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/XhmikosR/subscriptions",
      "organizations_url": "https://api.github.com/users/XhmikosR/orgs",
      "repos_url": "https://api.github.com/users/XhmikosR/repos",
      "events_url": "https://api.github.com/users/XhmikosR/events{/privacy}",
      "received_events_url": "https://api.github.com/users/XhmikosR/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 1069712305,
        "node_id": "MDU6TGFiZWwxMDY5NzEyMzA1",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/v5",
        "name": "v5",
        "color": "103987",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-12-16T14:40:53Z",
    "updated_at": "2018-12-16T14:40:53Z",
    "closed_at": null,
    "author_association": "MEMBER",
    "body": "Opening to track this for v5."
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27825",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27825/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27825/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27825/events",
    "html_url": "https://github.com/twbs/bootstrap/issues/27825",
    "id": 390392300,
    "node_id": "MDU6SXNzdWUzOTAzOTIzMDA=",
    "number": 27825,
    "title": "allow spacing utilities to override more easily",
    "user": {
      "login": "ricealexander",
      "id": 18580400,
      "node_id": "MDQ6VXNlcjE4NTgwNDAw",
      "avatar_url": "https://avatars1.githubusercontent.com/u/18580400?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ricealexander",
      "html_url": "https://github.com/ricealexander",
      "followers_url": "https://api.github.com/users/ricealexander/followers",
      "following_url": "https://api.github.com/users/ricealexander/following{/other_user}",
      "gists_url": "https://api.github.com/users/ricealexander/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ricealexander/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ricealexander/subscriptions",
      "organizations_url": "https://api.github.com/users/ricealexander/orgs",
      "repos_url": "https://api.github.com/users/ricealexander/repos",
      "events_url": "https://api.github.com/users/ricealexander/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ricealexander/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 210556,
        "node_id": "MDU6TGFiZWwyMTA1NTY=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/css",
        "name": "css",
        "color": "563d7c",
        "default": false
      },
      {
        "id": 250176882,
        "node_id": "MDU6TGFiZWwyNTAxNzY4ODI=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/v4",
        "name": "v4",
        "color": "563d7c",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 2,
    "created_at": "2018-12-12T20:17:59Z",
    "updated_at": "2018-12-19T07:27:36Z",
    "closed_at": null,
    "author_association": "NONE",
    "body": "Bootstrap 4 margin and padding utilities are generated in `/scss/utilities/_spacing.scss`.\r\nThese are generated in an order like\r\n```\r\n.p-0 { ... }\r\n.pt-0, .py-0 { ... }\r\n.pr-0, .px-0 { ... }\r\n.pb-0, .py-0 { ... }\r\n.pl-0, .px-0 { ... }\r\n\r\n.p-1 { ... }\r\n.pt-1, .py-1 { ... }\r\n. . .\r\n```\r\nbecause of this order, if you set a padding or margin for all sides of the element, you can only override a side with a utility that has a direction with a greater value. For example:\r\n`class=\"m-3 mt-0\"` would show the top margin from `.m-3` [(pen)](https://codepen.io/anon/pen/dwYRrY)\r\n`class=\"m-3 mt-5\"` would show the top margin from `.mt-5`\r\n\r\nThis results in a behavior where (without factoring in media queries and breakpoints), the largest value assigned by a spacing utility is the one that sticks.\r\n\r\nI feel that this behavior is flawed because it would make more sense for more specific classes to take precedence over more general ones.\r\n\r\nFor the simple case of `class=\"m-3 mt-0\"`, it's an easy enough solution to just set a margin for each side. `class=\"mx-3, mb-3\"` as it only adds one more character to produce the desired effect.\r\n\r\nFor more complicated margins and padding that also utilize media queries, there may not be as easy of a fix.\r\n\r\nAn easy solution for this would be to just reorder these classes:\r\n```\r\n.p-0 { ... }\r\n.p-1 { ... }\r\n.p-2 { ... }\r\n.p-3 { ... }\r\n.p-4 { ... }\r\n.p-5 { ... }\r\n\r\n.pt-0, .py-0 { ... }\r\n.pt-1, .py-1 { ... }\r\n.pt-2, .py-2 { ... }\r\n. . .\r\n```\r\n\r\n#### In Short\r\nThere is an inconsistent behavior right now where some more specific spacing utilities will override the generic margin and padding, but others will not. Reordering the classes by changing the SCSS loop would resolve this behavior. Please consider implementing this solution\r\n"
  },
  {
    "url": "https://api.github.com/repos/twbs/bootstrap/issues/27815",
    "repository_url": "https://api.github.com/repos/twbs/bootstrap",
    "labels_url": "https://api.github.com/repos/twbs/bootstrap/issues/27815/labels{/name}",
    "comments_url": "https://api.github.com/repos/twbs/bootstrap/issues/27815/comments",
    "events_url": "https://api.github.com/repos/twbs/bootstrap/issues/27815/events",
    "html_url": "https://github.com/twbs/bootstrap/issues/27815",
    "id": 389913673,
    "node_id": "MDU6SXNzdWUzODk5MTM2NzM=",
    "number": 27815,
    "title": "Coding conventions documentation",
    "user": {
      "login": "MartijnCuppens",
      "id": 11559216,
      "node_id": "MDQ6VXNlcjExNTU5MjE2",
      "avatar_url": "https://avatars3.githubusercontent.com/u/11559216?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/MartijnCuppens",
      "html_url": "https://github.com/MartijnCuppens",
      "followers_url": "https://api.github.com/users/MartijnCuppens/followers",
      "following_url": "https://api.github.com/users/MartijnCuppens/following{/other_user}",
      "gists_url": "https://api.github.com/users/MartijnCuppens/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/MartijnCuppens/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/MartijnCuppens/subscriptions",
      "organizations_url": "https://api.github.com/users/MartijnCuppens/orgs",
      "repos_url": "https://api.github.com/users/MartijnCuppens/repos",
      "events_url": "https://api.github.com/users/MartijnCuppens/events{/privacy}",
      "received_events_url": "https://api.github.com/users/MartijnCuppens/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 143597,
        "node_id": "MDU6TGFiZWwxNDM1OTc=",
        "url": "https://api.github.com/repos/twbs/bootstrap/labels/docs",
        "name": "docs",
        "color": "007bff",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 2,
    "created_at": "2018-12-11T19:16:59Z",
    "updated_at": "2018-12-16T09:34:34Z",
    "closed_at": null,
    "author_association": "MEMBER",
    "body": "A lot of (junior) developers use Bootstrap as starting point for front end development, but we don't reference to guidelines like http://codeguide.co/ in our docs where they can find out the best practices for HTML & (s)css. \r\n\r\nMaybe there are also other interesting sites we can refer to?"
  }
];

// Jest doesn't handle \r\n in snapshots very well.
// https://github.com/facebook/jest/pull/1879#issuecomment-261019033
// Replace the body with some plain text
issues = issues.map(issue => ({
  ...issue,
  body: "something with no line breaks"
}));

it('renders', () => {
  const tree = shallow(
    <IssueList issues={issues}/>
  );

  checkSnapshot(tree);
});