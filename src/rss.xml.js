import rss from "@astrojs/rss";

export async function GET(context) {
    const posts = await getCollection("posts");
    return rss({
        title: "yunogasai posts",
        description: "yunogasai posts",
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            link: `/posts/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}
