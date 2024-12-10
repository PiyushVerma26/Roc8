async function getOneMail(id) {
  const mails = { data: "", status: "" };

  try {
    const data = await fetch(`https://flipkart-email-mock.now.sh/?id=${id}`);
    mails.data = await data.json();
    mails.status = data.status;
  } catch (error) {
    console.error(error);
  }

  return mails;
}

export default getOneMail;
