const DEFAULT_ITEMS_PER_PAGE = 30;

export const DEFAULT_EMPTY_RESULT = {
  items: [],
  total_count: 0,
};

export const getGithubRepositories = async (
  query,
  { page = 1, perPage = DEFAULT_ITEMS_PER_PAGE } = {}
) => {
  try {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${query}`
    );
    return await response.json();
  } catch {
    return DEFAULT_EMPTY_RESULT;
  }
};
