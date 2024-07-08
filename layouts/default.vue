<script setup></script>

<template>
    <main>
        <nav class="nav">
            <div class="container">
                <div class="nav__content">
                    <ul class="nav__content-list">
                        <NuxtLink class="nav__content-list-link">
                            <a href="#">Home</a>
                        </NuxtLink>
                        <NuxtLink class="nav__content-list-link">
                            <a href="#skills">Skills</a>
                        </NuxtLink>
                        <NuxtLink class="nav__content-list-link">
                            <a href="">Work experience</a>
                        </NuxtLink>
                        <NuxtLink class="nav__content-list-link">
                            <a href="">About</a>
                        </NuxtLink>
                        <NuxtLink class="nav__content-list-link">
                            <a href="">Contanct Me</a>
                        </NuxtLink>
                    </ul>
                </div>
            </div>
        </nav>

        <header id="header" class="header">
            <div class="container">
                <div class="header__content">
                    <div class="header__content-left">
                        <p>Hi, I'm</p>
                        <h1>Saidaxror</h1>
                        <p>a full-stack web developer.</p>
                    </div>

                    <div class="header__content-right">
                        <div class="header__content-right-img"></div>
                        <div class="header__content-right-text">
                            <span>Sobirov Saidaxror</span>
                            <span>Full-Stack Developer</span>
                            <span><i class="far fa-globe-asia"></i>Tashkent</span>
                        </div>
                        <div class="header__content-right-mail">
                            <i class="fal fa-envelope"></i>
                            <span>saidaxrorpc7@gmail.com</span>
                        </div>
                        <div class="header__content-right-exp">
                            <i class="fal fa-id-card"></i>
                            <span>1 year of experience</span>
                        </div>
                        <div class="header__content-right-skills">
                            <span>Nuxt</span>
                            <span>Vue.JS</span>
                            <span>VueX</span>
                            <span>Pinia</span>
                            <span>JavaScript</span>
                            <span>GIT</span>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>SASS</span>
                            <span>RESTful APIs</span>
                        </div>
                        <div class="header__content-right-social">
                            <a href=""><i class="fab fa-github"></i></a>
                            <a href=""><i class="fab fa-telegram"></i></a>
                            <a href=""><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <footer class="">
            <div class="container">
                <div class="footer__content"></div>
            </div>
        </footer>
    </main>
</template>
