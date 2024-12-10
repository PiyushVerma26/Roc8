import getAllData from "../Netowrk/getAllData";

class Store {
  constructor() {
    this.data = {
      dataList: [],
      length: 0,
    };
  }

  async getAllData() {
    try {
      const data = await fetch("https://flipkart-email-mock.now.sh/");
      const response = await data.json();

      this.data.dataList = response?.list || [];
      this.data.length = this.data.dataList?.length;
    } catch (error) {
      console.error(error);
    }

    return this.data;
  }

  async getDataFromPageNumber(pageNumber) {
    try {
      const data = await fetch(
        `https://flipkart-email-mock.now.sh/?page=${pageNumber}`
      );
      const response = await data.json();

      this.data.dataList = response?.list || [];
    } catch (error) {
      console.error(error);
    }

    return this.data;
  }

  async getStorData() {
    return this.data.dataList;
  }

  async getLength() {
    return this.data.dataList.length;
  }
}

export default Store;
