<script setup>
    import { skills } from "@/constants";
    import { ref } from "vue";

    const activeTab = ref("tab-1");

    function setActive(tab) {
        activeTab.value = tab;
    }

    function isActive(tab) {
        return activeTab.value === tab;
    }

    const expertSkills = skills.filter((skills) => skills.lvl === "Expert");
    const proSkills = skills.filter((skills) => skills.lvl === "Proficient");
    const interSkills = skills.filter((skills) => skills.lvl === "Intermediate");
    const begSkills = skills.filter((skills) => skills.lvl === "Beginner");
</script>

<template>
    <section class="tabs">
        <div class="container">
            <div class="tabs__content">
                <div class="tabs__content-list">
                    <ul class="tabs__content-item">
                        <li @click="setActive('tab-1')" :class="{ active: isActive('tab-1') }" class="tabs__content-link">Technical Skills</li>
                        <li @click="setActive('tab-2')" :class="{ active: isActive('tab-2') }" class="tabs__content-link">Problem-Solving Skills</li>
                        <li @click="setActive('tab-3')" :class="{ active: isActive('tab-3') }" class="tabs__content-link">Soft Skills</li>
                    </ul>
                </div>
                <div class="tabs__content-window">
                    <div class="tabs__content-window-panel">
                        <div v-show="isActive('tab-1')" class="tabs__content-window-panel-fx">
                            <h1>Technical Skills</h1>
                            <div class="cart">
                                <span>• Expert </span>
                                <ul>
                                    <li v-for="skill in expertSkills" :key="skill.id">
                                        <img :src="skill.img" alt="" />
                                        {{ skill.name }}
                                    </li>
                                </ul>
                            </div>

                            <div class="cart">
                                <span>• Proficient </span>
                                <ul>
                                    <li v-for="skill in proSkills" :key="skill.id">
                                        <img :src="skill.img" alt="" />
                                        {{ skill.name }}
                                    </li>
                                </ul>
                            </div>

                            <div class="cart">
                                <span>• Intermediate </span>
                                <ul>
                                    <li v-for="skill in interSkills" :key="skill.id">
                                        <img :src="skill.img" alt="" />
                                        {{ skill.name }}
                                    </li>
                                </ul>
                            </div>

                            <div class="cart">
                                <span>• Beginner </span>
                                <ul>
                                    <li v-for="skill in begSkills" :key="skill.id">
                                        <img :src="skill.img" alt="" />
                                        {{ skill.name }}
                                    </li>
                                </ul>
                            </div>

                            <div class="info">
                                <p>
                                    I'm currently learning <img src="~/assets/img/typescript.png" alt="" /> <span>TypeScript</span>, a powerful
                                    JavaScript-based tool. So I am a starter in this technology. I focus on understanding its features like type
                                    checking to write better and more reliable code. Through hands-on projects, I am improving my skills and aim to
                                    make development faster and easier.
                                    <br />
                                    <br />
                                    My main tools for creating websites, web apps, and other projects are <img src="~/assets/img/vue.png" alt="" /> <span>Vue.js</span>, <img class="img-nuxt" src="~/assets/img/nuxt.png" alt="" />  <span>Nuxt</span>,
                                    <img src="~/assets/img/pinia.png" alt="" /> <span>Pinia</span>, and <img class="img-nuxt" src="~/assets/img/sass.png" alt="" />  <span>Sass</span>. 
                                    <br>
                                    <span>Vue.JS</span> helps me build
                                    interactive and dynamic user interfaces, while <span>Pinia</span> is my go-to state management solution for maintaining
                                    consistent and predictable application state. <span>Nuxt</span>
                                    enhances my development workflow by providing a robust framework for building server-side rendered applications,
                                    static websites, and more. <span>Sass</span> allows me to write more efficient and maintainable <span>CSS</span>, making my styling process
                                    smoother and more organized.
                                    <br />
                                    <br />
                                    By combining these tools with my growing knowledge of <span>TypeScript</span>, <span>Nuxt</span>, and <span>Pinia</span>, I am dedicated to developing
                                    high-quality, performant, and scalable web applications.
                                </p>
                            </div>
                        </div>
                        <div v-show="isActive('tab-2')" class="tabs__content-window-panel-fx">
                            <h1>Problem-Solving Skills</h1>
                            <div>
                                <p>2</p>
                            </div>
                        </div>
                        <div v-show="isActive('tab-3')" class="tabs__content-window-panel-fx">
                            <h1>Soft Skills</h1>
                            <div>
                                <p>3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
