import { Header } from "./components/Header.js";
import { Favicon } from "./components/Favicon.js";
import { Footer } from "./components/Footer.js";
import { ContactBanner } from "./components/ContactBanner.js";

Header.init("#header-container", "contact");
ContactBanner.init("#banner-container");
Footer.init("#footer-container");
Favicon.init();

const { createApp } = Vue;

const options = {
    data() {
        return {
            formData: {
                name: "",
                email: "",
                subject: "",
                message: "",
            },
        };
    },
    methods: {
        async doSend() {
            console.log("doSend");
            // 檢查是否都有輸入
            if (!this.formData.name) {
                alert("請輸入姓名");
                this.$refs.name.focus();
                return;
            }

            if (!this.formData.email) {
                alert("請輸入電子郵件");
                this.$refs.email.focus();
                return;
            }

            if (!this.formData.subject) {
                alert("請輸入主旨");
                this.$refs.subject.focus();
                return;
            }

            if (!this.formData.message) {
                alert("請輸入訊息內容");
                this.$refs.message.focus();
                return;
            }

            let options = {
                method: "POST",
                body: JSON.stringify(this.formData),
            };

            let response = await fetch(
                "https://book.niceinfos.com/api/form/form.php",
                options
            );

            let data = await response.json();
            if (data.code == 200) {
                alert("發送成功");
                this.formData = {
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                };

                let uid = data.uid;
                this.saveUid(uid);

                return;
            }

            alert("發送失敗");
        },
        async getFormData(uid) {
            let api = `https://book.niceinfos.com/api/form/form.php?uid=${uid}`;
            let response = await fetch(api);
            let data = await response.json();
            console.log(uid);
            console.log(data);
        },
        saveUid(uid) {
            let uids = this.getUids();

            uids.push(uid);
            localStorage.setItem("uids", JSON.stringify(uids));
        },
        getUids() {
            let uids = localStorage.getItem("uids");
            if (!uids) {
                uids = [];
            } else {
                uids = JSON.parse(uids);
            }
            return uids;
        },
    },
    mounted() {
        console.log("mounted");
        // let uids = this.getUids();
        // for (let uid of uids) {
        //     this.getFormData(uid);
        // }
    },
};

const app = createApp(options);
app.mount("#form-app");
