import getOneMail from "../../Netowrk/getOneMail";
import showSingleMailDetailToDom from "../MailDetail";
import modal from "./modal";

async function showMailDetail(detail) {
  const mailDetailId = localStorage.getItem("activeIndex");

  const { data, status } = await getOneMail(mailDetailId);
  if (status === 200) {
    if (window.innerWidth > 778) {
      showSingleMailDetailToDom(data?.body, detail, mailDetailId);
    } else {
      modal(data?.body, detail, mailDetailId);
    }
  }
}

export default showMailDetail;
