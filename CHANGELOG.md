# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).

## [1.6.2] - 2023-07-21

### Changed

- Passwords may now contain up to 100 characters.

## [1.6.1] - 2023-07-15

## Fixed

- Fixed a bug where editing a post was not possible.

## [1.6.0] - 2023-07-15

## Added

- Custom `<textarea>` component added. The component may also be used via the `input` modal.

## Changed

- `[code]`, `[quote]` and `[spoiler]` tag buttons in the post form now use textarea modals.

## Fixed

- Removed some `console.log()`s.

## [1.5.3] - 2023-06-30

## Fixed

- BBCode that is contained in [code] tags will no longer be parsed to HTML.

## [1.5.2] - 2023-06-17

## Fixed

- Post content is now being sanitized and all HTML is being escaped before parsing BBCode.

## [1.5.1] - 2023-06-08

## Fixed

- Video tags now use valid HTML and no longer prevent successive content from rendering.

## Changed

- Some minor changes to session management in preparation for `v6` of `ember-simple-auth`.

## [1.5.0] - 2023-06-04

## Added

- Added support for `[trigger]` tag.

## Changed

- The BBCode parser has been rewritten from the ground up. BBCode parsing should now work much better.

## [1.4.0] - 2023-06-04

### Changed

- Significantly improved desktop experience.

### Fixed

- Worked on fixing the BBCode parsing. Unfortunately, this is not noticable by the user yet.
- The PWA now respects both the device's orientation and rotation lock.
- Added missing 'FrogeLove' meme.
- Fixed some unit tests not being executed properly.

## [1.3.0] - 2023-06-02

### Added

- The newsfeed now displays and links to unread incoming private messages. A red indicator on top of sidebar toggle indicates unread messages.
- Froge memes are now available.
- The PWA now supports landscape orientation.
- You can now tap on a post author's name to see their profile.

### Changed

- The application was moved to a kubernetes environment. By that, the application gained several beneficial features like high availability or rolling updates.
- Deployment is now handled via Flux GitOps pipelines. Prior environments have been replaced with a staging and a production environment. Deployment to staging is triggerd via commits to master. Deployment to production is triggered via releasing semantic versioning tags.

### Fixed

- Fixed multiple mostly visual bugs.

## [1.2.1] - 2023-04-02

### Fixed

- Fixed an issue where the scroll position would mess up when quoting posts.

## [1.2.0] - 2023-04-01

### Added

- The post form now includes a preview function.
- Added the ability to save posts locally.
- Added a dialog to post form for adding specific memes.
- The sidebar toggle now displays a small dot indicating whether there are any news.
- The board dropdown menu does now contain a button for navigating to the first page.

### Changed

- When navigating to board and thread pages, the scroll position will no longer reset before the entire page has rendered.
- The loading indicator will now only be shown for slow transitions.

### Fixed

- When opening bookmarks, the correct number of posts are now being faded out.
- Various improvements and fixes to the scroll behavior after page changes.
- When switching boards, the page is no longer being persisted.
- Spoiler button now uses the correct tags.
- Fixed multiple mostly visual bugs.

## [1.1.1] - 2022-02-27

### Fixed

- Fixed avatars not being displayed.

## [1.1.0] - 2022-02-27

### Added

- Sidebar layout and position is now customizable.
- Added function to navigate back to various pages.
- Added a new home page that displays the same quickstart menu as the sidebar does.
- Expanding the sidebar now also refreshes the newsfeed.

### Changed

- Moves session view to settings route.
- Settings are now stored as a single localStorage property.

### Removed

- Removed session route.

### Fixed

- Fixed multiple mostly visual bugs.

## [1.0.3] - 2023-02-23

### Fixed

- Fixed an issue where the post context menu was being clipped.

## [1.0.2] - 2023-02-21

### Fixed

- Fixed an issue where embedded videos would prevent the following post content from rendering properly.
- Fixed an issue where BBCode code blocks and tables were not scrollable horizontally.
- Fixed an issue where posts would not display properly in 'Hobelware' design mode.

## [1.0.1] - 2023-02-19

### Fixed

- Fixed an issue where the bottom nav would occupy too much space on iOS.

## [1.0.0] - 2023-02-19

### Initial release.
