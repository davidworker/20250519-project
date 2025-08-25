import { Header } from "./components/Header.js";
import { Favicon } from "./components/Favicon.js";
import { Footer } from "./components/Footer.js";

Header.init("#header-container", "news");
Footer.init("#footer-container");
Favicon.init();

const { createApp } = Vue;

const options = {
    data() {
        return {
            items: [],
            page: 1, // 當前頁碼
            once: 6, // 每頁顯示的項目數
        };
    },
    methods: {
        async loadItems() {
            const res = await fetch("/database/news.json");
            const data = await res.json();
            this.items = data;
        },
        getWithPaginate() {
            const start = (this.page - 1) * this.once;
            const end = start + this.once;
            return this.items.slice(start, end);
        },
        totalPage() {
            return Math.ceil(this.items.length / this.once);
        },
        prevPage() {
            if (this.page > 1) {
                this.page--;
            }
        },
        nextPage() {
            if (this.page < this.totalPage()) {
                this.page++;
            }
        },
    },
    mounted() {
        console.log("news app mounted");
        this.loadItems();
    },
};

createApp(options).mount("#news-app");
