const getData = async function (subject) {
  try {
    let urlSubject = subject;
    const randomPageNumber = Math.floor(Math.random() * 100);
    const requestUrl = `https://api.unsplash.com/search/photos?query=${urlSubject}&client_id=cTDUVlLPVV4SoCK_UjD5yimHJ4EEZ6TuwA-6HN7_k7M&page=${randomPageNumber}`;
    const res = await fetch(requestUrl, { method: "GET" });
    const convertedRes = await res.json();
    return convertedRes;
  } catch (error) {
    console.log(error);
  }
};

export default getData;