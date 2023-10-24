module.exports = {
	permalink: function (data) {
		// If there is no permalink, look for a slug in the data.
		// If there is no slug, just use the slugify filter on the title
		const slug = data.slug ?? this.slugify(data.title);

		return `/${slug}/index.html`;
	},
		tags: [
		"posts"
	],
	"layout": "layouts/post.njk",
	"youtube": true,
	"vimeo": true,
	"mermaid": false,
	"mavo": false,
};
