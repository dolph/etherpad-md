## Important note for pull requests
**Our goal is to iterate in small steps. Release often, release early.
Evolution instead of a revolution**

## General goals
To make sure everybody is going in the same direction:

* Keep it simple.
* Easy to install for admins and easy to use for people
* Easy to integrate into other apps, but also usable as standalone
* Using less resources on server side
* Extensible, as much functionality should be extendable with plugins so
  changes don't have to be done in core.

## Coding style

* Do write comments. (You don't have to comment every line, but if you come up
  with something thats a bit complex/weird, just leave a comment. Bear in mind
    that you will probably leave the project at some point and that other people
      will read your code. Undocumented huge amounts of code are worthless!)
* Never ever use tabs
* Indentation: JS/CSS: 2 spaces; HTML: 4 spaces
* Don't overengineer. Don't try to solve any possible problem in one step, but
  try to solve problems as easy as possible and improve the solution over time!
  * Do generalize sooner or later! (if an old solution, quickly hacked together,
    poses more problems than it solves today, refactor it!)
  * Keep it compatible. Do not introduce changes to the public API, db schema or
    configurations too lightly. Don't make incompatible changes without good
      reasons!
      * If you do make changes, document them! (see below)
      * Use protocol independent urls "//"

## Documentation
The docs are in the `doc/` folder in the git repository, so people can easily
find the suitable docs for the current git revision.

Documentation should be kept up-to-date. This means, whenever you add a new API
method, add a new hook or change the database model, pack the relevant changes
to the docs in the same pull request.

You can build the docs e.g. produce html, using `make docs`. At some point in
the future we will provide an online documentation. The current documentation
in the github wiki should always reflect the state of `master` (!), since there
are no docs in master, yet.

## Testing
Front-end tests are found in the `tests/frontend/` folder in the repository.
Run them by pointing your browser to `<yourdomainhere>/tests/frontend`.
