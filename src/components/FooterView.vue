<template>
    <div class="footer__container">
        <div class="footer__content">
            <p>© {{ new Date().getFullYear() }} - Vue 3 + Vuex + CSS</p>
        </div>
    </div>
</template>


<style scoped>
.footer__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #f0ecec;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.footer__content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background: #3F497F;
    /* background-color: #8e8e92; */
    color: #ebe9e9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 10px 10px;

}

.footer__content p {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 1rem;
}
</style>