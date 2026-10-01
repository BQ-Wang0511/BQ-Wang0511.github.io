# Research Project Pages

Public website files for three research projects:

- [InterTalk](https://bq-wang0511.github.io/InterTalk/)
- [TalkLikeYou](https://bq-wang0511.github.io/TalkLikeYou/)
- [PC-Talk](https://bq-wang0511.github.io/PC-Talk/)

Each project has its own directory containing `index.html` and `static/`.
The root `index.html` provides an index of the three project pages.

## Deployment

GitHub Pages serves the `main` branch from `/ (root)`.
`.nojekyll` allows the HTML and assets to be served directly.

The corresponding private source repositories retain the development histories.
Publish updates into each project's own directory, preserving the other projects
and the root homepage. Automatic cross-repository publishing requires a separate
deployment credential configured in each private source repository.

The public files are the deployed website assets, not the private development
histories. Public HTML, images and videos can be viewed or downloaded by visitors.

## Attribution

The project pages retain their original credits and licenses. InterTalk and
TalkLikeYou use the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template),
adopted from [Nerfies](https://nerfies.github.io/).
See each project's footer for its attribution and license information.
