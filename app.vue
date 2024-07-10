<script setup lang="ts">
    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} - Sobirov Saidaxror - Web CV` : "Sobirov Saidaxror - Web CV";
        },
        link: [{ rel: "icon", type: "image/x-icon", href: "/icon.svg" }],
    });
    useSeoMeta({
        ogImage: "/icon.svg",
    });
</script>

<template>
    <div>
        <NuxtPage />
    </div>
</template>
