import { fetchArticles, fetchCategories } from "../lib/api";
import { Redirect } from "next";

export default function TopPage() {
  return <></>;
}

export async function getStaticProps(): Promise<{
  redirect?: Redirect;
  notFound?: boolean;
}> {
  const categories = await fetchCategories();
  if (categories.length === 0) {
    return {
      notFound: true,
    };
  }
  const { articles } = await fetchArticles();
  const topArticle = articles.find(
    (article) => article.category._id === categories[0]._id
  );

  if (!topArticle) {
    return {
      notFound: true,
    };
  }

  return {
    redirect: {
      destination: `/article/${topArticle.slug}`,
      statusCode: 302,
    },
  };
}
