/**
 *
 * @param url 请求路径
 * @param method 请求方法
 * @param params 请求参数
 * @param reqHead 请求头设置
 */
const Fetch = async (
  url: string,
  params: { method: string } = { method: "GET" },
  headers?: {}
) => {
  const initUrl = `${baseUrl}${url}`;
  const reqireHead = {
    mode: "no-cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  };

  //   区分Get以及其他请求
  const data =
    params.method === "GET"
      ? await getFetch(initUrl, reqireHead)
      : await postFetch(initUrl, params, reqireHead);
  //   console.log(data,"<<<<<<<<data");
  return data;
};

// 需要传入 body 请求参数的
const postFetch = (
  initUrl: string,
  params: {
    method: string;
  },
  reqireHead: {}
) => {
  //数据请求
  const data = fetch(initUrl, {
    method: params.method,
    body: JSON.stringify(params),
    ...reqireHead,
  })
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
const getFetch = (initUrl: string, reqireHead: {}) => {
  //数据请求
  const data = fetch(initUrl)
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
