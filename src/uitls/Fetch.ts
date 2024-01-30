/**
 *
 * @param url 请求路径
 * @param method 请求方法
 * @param params 请求参数
 * @param reqHead 请求头设置
 */
const Fetch = async (
  url: string,
  params: { method: string; body: {} } = { method: "GET", body: {} },
  header?: {}
) => {
  // 地址拼接
  const initUrl = `${baseUrl}${url}`;
  // 请求头
  const requireHead = {
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    ...header,
  };

  const method = params.method || "GET";
  //   区分Get以及其他请求
  const data =
    method === "GET"
      ? await getFetch(initUrl, requireHead)
      : await postFetch(initUrl, params, requireHead);
  return data;
};

/**
 * Post
 * @param initUrl 请求地址
 * @param params 请求方法以及请求体
 * @param requireHead 需要的请求头
 * @returns
 */
const postFetch = (initUrl: string, params: any, requireHead: {}) => {
  const bodys = {
    method: params.method,
    body: JSON.stringify(params.body),
    ...requireHead,
  };
  //数据请求
  const data = fetch(initUrl, bodys)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return data;
};

// get 请求方法
const getFetch = (initUrl: string, requireHead: {}) => {
  //数据请求
  const data = fetch(initUrl, {
    method: "GET",
    ...requireHead,
  })
    .then((response) => {
      const getData = response.json();
      return getData;
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return data;
};

export { Fetch };
