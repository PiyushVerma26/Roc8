async function getAllData() {
  const mails = { data: "", status: "" };

  try {
    const data = await fetch("https://flipkart-email-mock.now.sh/");
    mails.data = await data.json();
    mails.status = data.status;
  } catch (error) {
    console.error(error);
  }

  return mails;
}

export default getAllData;
