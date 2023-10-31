
module.exports = {
	eleventyComputed: {
    /**
     * Adds support for drafts.
     * If a page has `draft: true` in its YAML frontmatter then this snippet
     * will set its permalink to false and exclude it from collections.
     *
     * For dev builds we will always render the page.
		 * Taken from https://github.com/11ty/eleventy/issues/26
     */
     permalink: data => {
      if (process.env.NODE_ENV === 'production' && (data.draft || data.page.date >= new Date())) {
        return false;
      }

      return data.permalink;
    },
    eleventyExcludeFromCollections: data => {
      if (process.env.NODE_ENV === 'production' &&  (data.draft || data.page.date >= new Date())) {
        return true;
      }

      return false;
    }
  },
	// permalink: function (data) {
	// 	const slug = data.slug ?? this.slugify(data.title);
	// 	return `/${slug}/index.html`;
	// },
		tags: [
		"posts"
	],
	// What layout to use
	"layout": "layouts/post.njk",
	// draft status for the post. May use it later
	draft: false,
	// all conditional elements are set to false by default
	"youtube": false,
	"vimeo": false,
	"mermaid": false,
	"mavo": false,
};
