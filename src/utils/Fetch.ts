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
  // 超时时间
  const timeout = 10000;
  // 请求方法
  const method = params.method || "GET";
  //   区分Get以及其他请求
  const data =
    method === "GET"
      ? await getFetch(initUrl, requireHead, timeout)
      : await postFetch(initUrl, params, requireHead, timeout);
  return data;
};

/**
 * Post
 * @param initUrl 请求地址
 * @param params 请求方法以及请求体
 * @param requireHead 需要的请求头
 * @returns
 */
const postFetch = (
  initUrl: string,
  params: any,
  requireHead: {},
  timeout: number
) => {
  //数据请求
  const data = isFetch(initUrl, params.method, params, requireHead, timeout)
    .then((response: any) => response.json())
    .then((data) => data)
    .catch((error) => console.log(`Error: isFetch => ${error}`));
  return data;
};

/**
 *get 请求方法
 * @param initUrl 请求地址
 * @param requireHead 请求头
 * @param timeout 超时时间
 * @returns
 */
const getFetch = (initUrl: string, requireHead: {}, timeout: number) => {
  //数据请求
  const data = isFetch(initUrl, "GET", {}, requireHead, timeout)
    .then((response: any) => response.json())
    .then((data) => data)
    .catch((error) => console.log(`Error: isFetch => ${error}`));
  return data;
};

// 处理Get请求超时
const isFetch = (
  url: string,
  method: string,
  params: any,
  requireHead: {},
  timeout: number
) => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error("Request timeout"));
    }, timeout);

    let requestBody: any = {
      method,
      ...requireHead,
    };
    if (method !== "GET") {
      requestBody.body = JSON.stringify(params.body);
    }
    fetch(url, requestBody)
      .then((response) => {
        clearTimeout(timeoutId);
        resolve(response);
      })
      .catch((error) => {
        clearTimeout(timeoutId);
        reject(error);
      });
  });
};
export { Fetch };
