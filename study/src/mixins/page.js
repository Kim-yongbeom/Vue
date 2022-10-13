export default {
  data() {
    return {
      pageData: [],
      currentPage: 1,
      currentCount: 0,
      count: 5,
      totalPage: 0,
      clickLeft: false,
      clickRight: false,
    };
  },

  methods: {
    totalPageCount(data) {
      if (data.length % this.count > 0) {
        this.totalPage = Math.floor(data.length / this.count) + 1;
      } else {
        this.totalPage = Math.floor(data.length / this.count);
      }
      if (this.totalPage < this.currentPage) {
        this.currentPage -= 1;
        this.currentCount -= 5;
      }
    },

    currentPageData(data) {
      this.pageData = data.slice(
        this.currentCount,
        this.currentCount + this.count
      );
      this.currentCount += this.count;
    },

    currentData(data) {
      if (this.clickLeft) {
        // this.currentCount += this.count;
        this.pageData = data.slice(
          this.currentCount,
          this.currentCount + this.count
        );
      } else {
        this.pageData = data.slice(
          this.currentCount - this.count,
          this.currentCount
        );
      }
    },

    minus(data) {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        this.currentCount -= this.count;
        this.clickLeft = true;
        if (this.clickRight) {
          this.clickRight = false;
          this.currentCount -= this.count;
        }
        this.pageData = data.slice(
          this.currentCount,
          this.currentCount + this.count
        );
      }
    },

    plus(data) {
      if (this.currentPage < this.totalPage) {
        this.currentPage += 1;
        this.currentCount += this.count;
        this.clickRight = true;
        if (this.clickLeft) {
          this.clickLeft = false;
          this.currentCount += this.count;
        }
        this.pageData = data.slice(
          this.currentCount - this.count,
          this.currentCount
        );
      }
    },
  },
};
